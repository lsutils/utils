import inspect
import json
import os.path
import random
import re
import time

from loguru import logger
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from collections import OrderedDict, defaultdict
from const import *

print(json)
# pip3 install selenium==3
# pip install pycryptodome  然后改名
# sys.stderr = None
# capabilities = DesiredCapabilities.CHROME
# capabilities["goog:loggingPrefs"] = {"performance": "ALL"}  # chromedriver 75+
chrome_options = webdriver.ChromeOptions()
# chrome_options.add_argument("--mute-audio")
# os.environ['PYTHONIOENCODING'] = 'utf-8'


# warnings.filterwarnings('ignore')
options = {
    'page-size': 'Letter',
    'encoding': "UTF-8",
    'custom-header': [
        ('Accept-Encoding', 'gzip')
    ]
}


def _print(*args):
    frame = inspect.stack()[1]
    print("当前行号:", frame.lineno, *args)


# docker run -d -p 46379:6379 redis
class Bilibili:
    def __init__(self):
        self.users_info = []
        self.current_process = ''
        self.video_map = OrderedDict()
        self.he_ji_map = OrderedDict()
        self.user_ids = set()
        self.driver = None
        self.counter = 1
        self.cookies_data = {}
        # 分类以及对应的页数

    def init_driver(self):
        # http://chromedriver.storage.googleapis.com/index.html
        # 启动浏览器，并设置好wait        desired_capabilities=capabilities
        service = Service(driver_path)
        self.driver = webdriver.Chrome(service=service)
        self.driver.get('https://space.bilibili.com/396637753/video')

        # 安装 Get cookies.txt LOCALLY 插件
        if os.path.exists(cookie_file):
            with open(cookie_file, 'r', encoding='utf8') as f:
                listCookies = []
                for line in f.readlines():
                    if not line.startswith(".bilibili"):
                        continue

                    res = []
                    for x in line.strip().split('\t'):
                        if x:
                            res.append(x)
                    listCookies.append({
                        "domain": res[0],
                        "expiry": int(res[4]),
                        "httpOnly": res[1] == 'True',
                        "name": res[-2],
                        "path": "/",
                        "sameSite": "Lax",
                        "secure": res[3] == 'True',
                        "value": res[-1]
                    }, )
                    # listCookies: List[Dict] = json.loads(f.read())

                self.cookies_data = listCookies
                for cookie in listCookies:
                    if not self.driver.get_cookie(cookie['name']):
                        self.driver.add_cookie(cookie)
                self.driver.refresh()
            return

        login_xpath = '//*[@id="biliMainHeader"]/div/div/ul[2]/li[1]/li/div[1]/div/span'
        login = self.find_elements_by_xpath(value=login_xpath)
        while login and '登录' in login[0].text:
            time.sleep(3)
            logger.info('需要登录')
            login = self.find_elements_by_xpath(value=login_xpath)

        self.driver.implicitly_wait(10)

    def find_element_by_xpath(self, value):
        return self.driver.find_element(By.XPATH, value)

    def find_elements_by_xpath(self, value):
        return self.driver.find_elements(By.XPATH, value)

    def get_all_users(self):

        i = 0
        while True:
            url = f'https://api.bilibili.com/x/relation/tag?tagid={go_tag_id}&pn={i}&ps=24&mid={user_mid}'
            self.driver.get(url)
            time.sleep(random.randint(1, 4))
            res = json.loads(self.driver.find_element(by=By.TAG_NAME, value="pre").text)
            if res['code'] != 0:
                raise Exception(url)
            for item in res['data']:
                self.users_info.append(item)
                self.user_ids.add(item['mid'])
            i += 1
            if len(res['data']) != 24:
                break

        for i, user_id in enumerate(list(self.user_ids)):
            name = self.get_user_name(user_id)
            self.current_process = f'{name:<20}:{i + 1:>4}/{len(self.user_ids)}'
            _print(self.current_process)
            self.video_map[name] = self.get_投稿(user_id)
            self.he_ji_map[name] = self.get_合集(user_id)

    def get_page_num(self):
        self.driver.execute_script('window.scrollTo(0, document.documentElement.scrollHeight)')
        time.sleep(random.randint(0, 3) + 1)
        self.driver.execute_script('window.scrollTo(0, document.documentElement.scrollHeight)')
        page_source = self.driver.page_source
        try:
            page_num = int(re.findall('共 (\d+) 页', page_source)[0].split(":")[-1])
            return page_num
        except Exception as e:
            return 1

    def get_投稿(self, _id):
        res = OrderedDict()
        while 1:
            try:
                self.driver.get(f'https://space.bilibili.com/{_id}/upload/video')
                page_count = max(self.get_page_num(), 1)
                for i in range(0, page_count):
                    self.get_page_num()
                    _print(
                        f'{self.current_process} page:{i + 1:>4}/{page_count:<4} https://space.bilibili.com/{_id}/upload/video'
                    )
                    for item in json.loads(self.driver.execute_script(a_script)):
                        res[item['text']] = item['url']
                    if i not in {page_count - 1, 1}:
                        ns = self.find_elements_by_xpath(tou_gao_next_xpath)
                        if len(ns) == 0:
                            raise Exception(tou_gao_next_xpath)
                        ns[-1].click()
                return res
            except Exception as e:
                _print(e)

    def get_合集(self, _id):
        user_hj = defaultdict(dict)
        # 合集名字-》 id
        hi_map = {}
        page_num = 1
        while True:
            try:
                url = f'https://api.bilibili.com/x/polymer/web-space/seasons_series_list?mid={_id}&page_size=20&page_num={page_num}&web_location={web_location}'
                self.driver.get(url)
                time.sleep(random.randint(1, 4))
                res = json.loads(self.driver.find_element(by=By.TAG_NAME, value="pre").text)
                if res['code'] != 0:
                    raise Exception(url)
                for item in res['data']['items_lists']['seasons_list']:
                    hi_map[item['meta']['season_id']] = item['meta']['name']
                page_num += 1
                if len(res['data']['items_lists']['seasons_list']) != 20:
                    break
            except Exception as e:
                _print(e)
        for season_id, season_name in hi_map.items():
            page_num = 1
            while 1:
                try:
                    self.driver.get(
                        f'https://api.bilibili.com/x/polymer/web-space/seasons_archives_list?mid={_id}&season_id={season_id}&sort_reverse=false&page_size=30&page_num={page_num}&web_location={web_location}')
                    time.sleep(random.randint(1, 4))
                    res = json.loads(self.driver.find_element(by=By.TAG_NAME, value="pre").text)
                    if res['code'] != 0:
                        raise Exception(url)
                    for item in res['data']['archives']:
                        user_hj[season_name][item['title']] = f'https://www.bilibili.com/video/{item["bvid"]}'
                    page_num += 1
                    if res['data']['archives'] != 30:
                        break
                except Exception as e:
                    _print(e)
        return user_hj

    def write(self):
        with open('videos.json', 'w', encoding='utf8') as fp:
            fp.write(json.dumps(self.video_map, ensure_ascii=False, indent=4))
        with open('he_ji.json', 'w', encoding='utf8') as fp:
            fp.write(json.dumps(self.he_ji_map, ensure_ascii=False, indent=4))

    def get_user_name(self, user_id):
        for item in self.users_info:
            if user_id == item['mid']:
                return item['uname']
        return None


def fix_title(_raw: str):
    for item in ['：', ': ']:
        _raw = _raw.replace(item, ' ')
    return _raw


if __name__ == '__main__':
    x = Bilibili()
    while 1:
        try:
            x.init_driver()
            x.get_all_users()
            x.write()
        except Exception as e:
            raise e
            continue
        x.driver.quit()
        break
