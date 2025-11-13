# chrome sign  coursePlayVarEle.getAttribute("vod-video-id-auth")
# videodata = {
#     "center_url": 'https://edu.51cto.com/center/player/play/vod-play-auth',
#     "data": {
#         "type": "course",
#         "lesson_id": "841005",
#         "id": "b6e95cfe18064298a070910d9b1c6506",
#         "sign": data.sign,
#         "lesson_type": 'course',
#         "is_try": 0
#     }
# }
import json
import os
import time
from collections import defaultdict
from typing import List, Dict

from loguru import logger
from lxml import etree
from selenium import webdriver
from selenium.webdriver.common.by import By


class cto:
    def __init__(self):
        self.counter = 1
        self.cookies_data = {}
        self.current_window = None
        self.storeMap = {}
        self.driver = webdriver.Chrome()

    def init_driver(self):
        # 启动浏览器，并设置好wait        desired_capabilities=capabilities

        self.driver.get('https://edu.51cto.com/lesson/841005.html')
        try:
            if os.path.exists('./anquan.txt') and time.time() - os.stat('./anquan.txt').st_mtime < 12 * 3600:
                with open('anquan.txt', 'r', encoding='utf8') as f:
                    listCookies: List[Dict] = json.loads(f.read())
                    self.cookies_data = listCookies
                    for cookie in listCookies:
                        if not self.driver.get_cookie(cookie['name']):
                            self.driver.add_cookie(cookie)
                    self.driver.refresh()
                    time.sleep(3)
        except Exception:
            pass
        if '学习中心' in self.driver.page_source:
            return
        while '登录/注册' in self.driver.page_source:
            time.sleep(5)
            logger.info('需要登录')

        self.driver.implicitly_wait(10)
        dictCookies = self.driver.get_cookies()
        self.cookies_data = dictCookies
        jsonCookies = json.dumps(dictCookies, ensure_ascii=False, indent=4)
        with open('anquan.txt', 'w') as f:
            f.write(jsonCookies)

    def find_element_by_xpath(self, value):
        return self.driver.find_element(By.XPATH, value)

    def find_elements_by_xpath(self, value):
        return self.driver.find_elements(By.XPATH, value)

    def print_text(self, element):
        res = ''
        if element.text:  # 如果当前标签有文本内容，则打印
            res += element.text
        for child in element.getchildren():  # 遍历当前标签的所有子标签
            res += self.print_text(child)  # 递归调用打印函数
        return res

    def run(self, course_url):
        res = defaultdict(list)
        if os.path.exists('detail.json'):
            with open('detail.json', 'r', encoding='utf8') as f:
                for k, items in json.loads(f.read()).items():
                    res[k].extend(items)
        else:
            self.driver.get(course_url)
            time.sleep(5)
            html = etree.HTML(self.driver.page_source)
            lis = html.xpath('//*[@id="lessonlistWrap"]/li')
            last_title = ' '
            for li in lis:
                if 'chapter' in li.attrib.get('class', ''):
                    last_title = self.print_text(li).strip()
                else:
                    res[last_title].append({
                        "title": li.attrib.get('title', ''),
                        "link": li.xpath('.//a')[0].attrib.get('sourceurl')
                    })
            with open('./detail.json', 'w', encoding='utf8') as f:
                f.write(json.dumps(dict(res), ensure_ascii=False, indent=4))

        total = 0
        for chapter, items in res.items():
            for i, item in enumerate(items):
                total += 1
                if res[chapter][i].get('crawl'):
                    continue
                self.driver.get(item['link'])
                time.sleep(2)

                created_obj = self.driver.execute_script("return window.createdobj")
                if isinstance(created_obj, dict):
                    res[chapter][i].update({'crawl': True})
                    print(total, chapter, i, item['title'])
                    playAuth = created_obj['playAuth']
                    videoId = created_obj['vodVideoId']
                    x = "%03d" % total
                    filePath = f"./xxx/{chapter}/{x} {self.get_real_title(item['title'])}.mp4"
                    # print(f" -chunkSize 10 -playAuth '{playAuth}' -videoId {videoId} -filePath '{filePath}'")
                    os.system(
                        f"go run main.go -chunkSize 10 -playAuth '{playAuth}' -videoId {videoId} -filePath '{filePath}'"
                    )
                    with open('./detail.json', 'w', encoding='utf8') as f:
                        f.write(json.dumps(dict(res), ensure_ascii=False, indent=4))
                else:
                    print(chapter, i, item['title'], "===================")

    @staticmethod
    def get_real_title(article_title):
        sp = '(2022'
        xxxx = article_title.split(sp)
        if len(xxxx) > 1:
            a, b = xxxx[0], sp.join(xxxx[1:])
        else:
            a, b = article_title, ''
        for item in ['_', '\b', '+', '>', '<']:
            # './dataPath\\陈天 · Rust 编程第一课\\16 ｜ 数据结构：Vec<T>、&[T]、Box<[T]> ，你真的了解集合容器么？.html'
            a = a.replace(item, "|")
        if '|' in a:
            a = a.replace('|', '｜')
        if '｜' in a:
            a = a.replace(' ｜ ', '｜')
            a = a.replace('｜', ' ｜ ')
        a = a.replace(':', '：')
        for r in ["|", r"\\", r"/", "?", "*", '"', ":"]:
            a = a.replace(r, "")
        xx = [a]
        if b:
            xx.append(b)

        return sp.join(xx).strip()


if __name__ == '__main__':
    x = cto()
    x.init_driver()
    x.init_driver()
    print("替换js文件")  # 选择 player 目录
    for i in range(20):
        print(i)
        time.sleep(1)
    # x.run('https://edu.51cto.com/lesson/841005.html')
    x.run('https://edu.51cto.com/lesson/976517.html')
    x.driver.quit()
