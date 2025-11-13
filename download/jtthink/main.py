# -*-coding:utf-8-*-
import json
import os
import os.path
import platform
import re
import shutil
import sys
import time
import uuid
import warnings
from abc import ABC
from collections import defaultdict
from typing import List, Dict, Sized

import pyautogui
import requests
import requests.cookies
from Crypto.Cipher import AES
from selenium.webdriver.chrome.service import Service
from loguru import logger
from selenium import webdriver
from selenium.webdriver.common.by import By

# pip3 install pycrypto pycryptodome
# pip3 install pycryptodome  然后改名
sys.stderr = None
pyautogui.FAILSAFE = False

warnings.filterwarnings('ignore')
options = {
    'page-size': 'Letter',
    'encoding': "UTF-8",
    'custom-header': [
        ('Accept-Encoding', 'gzip')
    ]
}

dataPath = r"Z:\Ventoy\视频\程序员在囧途"
dataPath = r"/Volumes/Ventoy/视频/程序员在囧途"


class Download:

    # 获取key 和iv
    def __init__(self, url, key, iv):
        try:
            os.remove("/tmp/tmp.mp4")
        except Exception:
            pass

        self.ts_path = "/tmp/tsfiles"
        shutil.rmtree(self.ts_path, ignore_errors=True)
        self.url = url
        self.key = bytes.fromhex(key)
        self.iv = bytes.fromhex(iv)

    # 获取ts列表url
    def get_ts_list(self, content):
        data_list = content.split('\n')
        is_first = 0
        first_num = 0
        for i, data in enumerate(data_list):
            if '.ts' in data and is_first == 0:
                first_num = i
                is_first = 1
            elif '.ts' in data and is_first == 1:
                is_first = i - first_num
                break
        ts_list = data_list[first_num::is_first]
        return ts_list

    # 设置保存路径
    def set_file(self):
        file_path = os.path.abspath(os.path.join(os.getcwd(), self.ts_path))
        if not os.path.exists(file_path):
            os.makedirs(file_path)
        return file_path

    # 合并ts视频
    def ts_to_mp4(self):
        path = self.set_file()
        mp4_name = str(uuid.uuid1()) + '.mp4'
        merge_cmd = 'copy /b ' + path + r'\*.ts ' + path + '\\' + mp4_name
        # 根据需求，看合并后，是否保留ts视频
        del_cmd = 'del ' + path + r'\*.ts'
        os.system(merge_cmd)
        os.system(del_cmd)

    def download_ts(self, dic):
        # 统一默认都是有加密的，没有加密只需把true改为false
        is_cry = True
        i = dic['i']
        ts = dic['ts']
        if ts == "":
            return
        if is_cry:
            # 实例化CBC模式的AES对象
            cryptor = AES.new(self.key, AES.MODE_CBC, self.iv)

        res = requests.get(ts)
        # 可以根据ts文件数量，适当设置3(3表示是位数，如 001)
        file_name = str(i).rjust(3, '0') + '.ts'
        file = os.path.join(self.set_file(), file_name)
        with open(file, 'wb') as f:
            if is_cry:
                content = cryptor.decrypt(res.content)
            else:
                content = res.content
            f.write(content)
            print(i, end=' ')

    def merge(self, ):
        # ts文件绝对路径
        ts_path = self.ts_path
        # 读取ts文件夹下所有的ts文件
        path_list = os.listdir(ts_path)
        # 对文件进行排序
        path_list.sort()
        # 将排序后的ts的绝对路径放入列表中
        # li = [os.path.abspath(os.path.join(ts_path, filename)) for filename in path_list]
        li = ['/tmp/tsfiles/%s' % filename for filename in path_list]
        # 类似于[001.ts|00.2ts|003.ts]
        input_file = '|'.join(li)
        # 指定输出文件名称
        output_file = '/tmp/tmp.mp4'
        # 使用ffmpeg将ts合并为mp4

        if 'wind' in platform.platform().lower():
            p = 'ffmpeg.exe'
        else:
            p = 'ffmpeg'

        command = '%s -i "concat:%s" -acodec copy -vcodec copy -v error  %s' % (p, input_file, output_file)
        # 指行命令
        os.system(command)

    def run(self):
        content = requests.get(self.url).text
        ts_list = self.get_ts_list(content)
        # pool = Pool(200)  # 协程的

        s = time.time()
        g_list = []
        # for i, ts in enumerate(ts_list):
        #     g = pool.spawn(self.download_ts, ({'ts': ts, 'total': len(ts_list), 'i': i, 'content': content}))
        #     g_list.append(g)
        # # 协程
        # gevent.joinall(g_list)
        from concurrent.futures import ThreadPoolExecutor
        pool = ThreadPoolExecutor(10)
        print(f'total: {len(ts_list)} 下载成功 ')
        results = pool.map(self.download_ts,
                           ([{'ts': ts, 'total': len(ts_list), 'i': i, 'content': content} for i, ts in
                             enumerate(ts_list)]))
        for res in results:
            pass
        print()
        self.merge()
        print(time.time() - s)


class Map(Sized, ABC):
    def __init__(self, key, d=True):
        self.key = key
        if d:
            self.data = {}
        else:
            self.data = defaultdict(list)
        try:
            with open('%s.json' % self.key, 'r', encoding='utf8') as f:
                data = json.loads(f.read())
            for k, v in data.items():
                self.data[k] = v
        except Exception as e:
            pass

    def __setitem__(self, key, value):

        self.data[key] = value
        self.dump()

    def __getitem__(self, item):
        if item in self.data:
            return self.data[item]
        return None

    def dump(self):
        with open('%s.json' % self.key, 'w', encoding='utf8') as f:
            f.write(json.dumps(self.data, ensure_ascii=False, indent=4))

    def __len__(self):
        return len(self.data)

    def __str__(self):
        return json.dumps(self.data, ensure_ascii=False)

    def items(self):
        for k, v in self.data.items():
            yield k, v

    def append(self, k, v):
        exist = False
        for item in self.data[k]:
            if json.dumps(item, sort_keys=True) == json.dumps(v, sort_keys=True):
                exist = True
                break
        if exist:
            pass
        else:
            print(k, v)
            self.data[k].append(v)
            self.dump()

    def json(self):
        return json.dumps(self.data)


# docker run -d -p 46379:6379 redis
class jtthink:
    def __init__(self):
        self.driver = None
        self.counter = 1
        self.cookies_data = {}
        self.current_window = None
        self.storeMap = {}
        self.over = Map("over")
        self.zip_not_exists = Map("zip_not_exists", False)
        self.link_map = Map("专栏链接")  # title:link
        # 分类以及对应的页数
        self.cp = {
            8: 1,
            9: 2,
            13: 1,
            14: 2,
            16: 1,
            17: 8,
            19: 2,
            20: 1,
            21: 1,
            22: 1,
            23: 2,
            24: 1,
            25: 3,
            26: 1,
            27: 1,
            28: 2,
            99: 4,
        }

        self.course = Map('course')
        self.flash = Map('flash', False)
        self.course_detail = Map('course_detail', False)

    def init_driver(self):
        # 启动浏览器，并设置好wait        desired_capabilities=capabilities
        service = Service('/Users/acejilam/software/chromedriver')
        self.driver = webdriver.Chrome(service=service)
        self.driver.get('https://www.jtthink.com/nologin?from=%2F')
        if os.path.exists('./anquan.txt') and time.time() - os.stat('./anquan.txt').st_mtime < 12 * 3600:
            with open('anquan.txt', 'r', encoding='utf8') as f:
                listCookies: List[Dict] = json.loads(f.read())
                self.cookies_data = listCookies
                for cookie in listCookies:
                    if not self.driver.get_cookie(cookie['name']):
                        self.driver.add_cookie(cookie)
                self.driver.refresh()
            return

        login = self.find_elements_by_xpath(value='//*[@id="loginlink"]/li[1]/a')
        while not login or '登录' in login[0].text:
            time.sleep(3)
            logger.info('需要登录')
            login = self.find_elements_by_xpath(value='//*[@id="loginlink"]/li[1]/a')
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

    #  获取所有专栏
    def get_all_columns(self):
        todo = []
        extern = 5
        for c, p in self.cp.items():
            for i in range(1, p + 1 + extern):
                url = "https://www.jtthink.com/course?c=%s&page=%s" % (c, i)
                self.driver.get(url)
                try:
                    a_list = self.find_elements_by_xpath('/html/body/div[1]/div[3]/div/div/div/h4/a')
                    for a in a_list:
                        todo.append(a.get_attribute('href'))
                except Exception as e:
                    print(str(e))
                    print(url)
        todo.append('https://www.jtthink.com/course/162')
        todo.append('https://www.jtthink.com/course/111')
        with open('./class.json', 'w', encoding='utf8') as f:
            f.write(json.dumps(todo, indent=4, ensure_ascii=False))
        for course in todo:
            self.get_course(course)

    def get_course(self, course):
        self.driver.get(course)
        if '下一页' in self.driver.page_source:
            flag = True
            while flag:
                try:
                    title = self.find_element_by_xpath('/html/body/div[2]/div[2]/div/h2').text
                except Exception as e:
                    print(e, course)
                    continue
                self.course[title] = course
                steps = self.find_elements_by_xpath('/html/body/div[2]/div[4]/div[1]/div/div/ul/li/a')
                for step in steps:
                    link = step.get_attribute('href')
                    if link:
                        self.course_detail.append(title, {
                            'title': step.text,
                            'link': link
                        })
                if '下一页' in self.driver.page_source:
                    lis = self.driver.find_elements(by=By.XPATH,
                                                    value='/html/body/div[2]/div[4]/div[1]/div/div/nav[2]/ul/li/a')
                    lis[-2].click()
                else:
                    flag = False
        try:
            title = self.find_element_by_xpath('/html/body/div[2]/div[2]/div/h2').text
        except Exception as e:
            print(e, course)
            return
        self.course[title] = course
        steps = self.find_elements_by_xpath('/html/body/div[2]/div[4]/div[1]/div/div/ul/li/a')
        for step in steps:
            link = step.get_attribute('href')

            if link:
                self.course_detail.append(title, {
                    'title': step.text,
                    'link': link
                })
                print(course, step.text)

    def download_movie(self):
        total = 0
        not_exists = 0
        for course, vs in self.course_detail.items():
            total += len(vs)
            for item in vs:
                dest_path = '%s/%s.mp4' % (self.get_real_class(course), self.get_real_title(item['title']))
                if (os.path.exists(dest_path.replace('/read/', '/over/')) |
                        os.path.exists(dest_path.replace('/over/', '/read/'))):
                    continue

                if item['link'] not in self.flash.json():
                    print(course, self.get_real_title(item['title']), 'not exists')
                    not_exists += 1
        i = 0
        for course, vs in self.course_detail.items():
            course = self.get_real_class(course)
            for m in vs:
                title, link = m['title'], m['link']
                rlink = m.get('replace')
                if link in self.flash.json():
                    continue
                dest_path = '%s/%s.mp4' % (course, self.get_real_title(title))
                if (os.path.exists(dest_path.replace('/read/', '/over/')) |
                        os.path.exists(dest_path.replace('/over/', '/read/'))):
                    continue
                dest_path = dest_path.replace('/over/', '/read/')

                course = course.replace('/over/', '/read/')
                try:
                    os.mkdir(course)
                except Exception as e:
                    pass

                try:
                    i += 1
                    if rlink:
                        link = rlink
                    self.driver.get(link)
                    self.driver.refresh()
                    time.sleep(9)
                    a = self.driver.page_source
                    if '是否安装了flash' in a:
                        continue
                    self.driver.find_element(by=By.XPATH, value='//*[@id="player"]/div/div[1]/div[4]/span').click()
                    time.sleep(2)
                    decrypt_data = self.driver.execute_script("return window.decrypt_data")
                    url_info = self.driver.execute_script("return window.keys")
                    iv = url_info['iv']
                    key = url_info['key']
                    print(not_exists, "剩余", not_exists - i)
                    if iv == '6a3f8b2a013863a80f4c5aa398cfa4f1' and key == 'a25656a2e096ca55446514a3d40606aa':
                        print('测试视频')
                        continue
                    if iv == 'aed49b869726e83b742ea85b92683422' and key == 'e06ba27f9dbcacc857c8ca5353c7dc66':
                        print('测试视频')
                        continue
                    print(decrypt_data)
                    print(url_info)
                    Download(decrypt_data['baseuri'], url_info['key'], url_info['iv']).run()
                    print(dest_path, os.stat("/tmp/tmp.mp4"))
                    shutil.copy("/tmp/tmp.mp4", dest_path)
                except Exception as e:
                    if 'flash' in str(e):
                        self.flash.append(course, {"link": link, "title": title})
                    else:
                        print(not_exists, "剩余", not_exists - i, e)

    def down_all_zip(self):
        for course, vs in self.course_detail.items():
            headers = {
                'Cookie': 'PHPSESSID=%s; foxphp_user_cookie_jtthink=%s' % (
                    self.driver.get_cookie('PHPSESSID')['value'],
                    self.driver.get_cookie('foxphp_user_cookie_jtthink')['value']
                ),
                "Host": 'www.jtthink.com'
            }
            course = self.get_real_class(course)
            try:
                os.mkdir(course)
            except Exception as e:
                pass
            for m in vs:
                title, link = m['title'], m['link']
                if self.zip_not_exists[link]:
                    continue
                filename = re.findall(r'(\d+)讲', m['title'])
                path = "%s/%02d.zip" % (course, int(filename[0]))
                if os.path.exists(path):
                    continue
                file = 'https://www.jtthink.com/course/getsubject?id=%s' % link.split('/')[-1]
                try:
                    res = requests.get(file, headers=headers)
                    # filename = res.headers.get('Content-Disposition').split('=')[1]
                    if len(res.content) > 0:
                        if len(filename) == 0:
                            pass
                        else:
                            print(course, filename)
                            with open(path, 'wb') as f:
                                f.write(res.content)
                    else:
                        self.zip_not_exists.append(link, [])
                except Exception as e:
                    print(str(e))

    #  https://img.videocc.net/uimage/4/4dbb3148bf/8/4dbb3148bffe18ac9a62007d2c9ed378_0_b.jpg
    # https://hw-dts.videocc.net/4dbb3148bf/0/1657391142087/8/9e/d3/78_2/4dbb3148bffe18ac9a62007d2c9ed378_2_4.ts?pid=1669885615640X1765364&device=desktop
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

    def get_real_class(self, article_title):
        x = self.get_real_title(article_title)
        for item in ['over', 'read']:
            t = os.path.join(dataPath, item, x)
            if os.path.exists(t):
                return t
        return os.path.join(dataPath, 'read', x)

    def process_browser_logs_for_network_events(self, logs):
        res = []
        for entry in logs:
            if 'hw-dts.videocc.net' in entry["message"]:
                entry = json.loads(entry["message"])
                log = entry["message"]
                res.append(log)
        return re.findall('https://hls.videocc.net.*?desktop', json.dumps(res))

    def update_cp(self):
        self.driver.get('https://www.jtthink.com/course?c=17')
        links = []
        for a in self.find_elements_by_xpath('/html/body/div[1]/div[1]/a'):
            links.append(a.get_attribute('href'))

        for c in links:
            self.driver.get(c)
            try:
                _as = self.find_elements_by_xpath('/html/body/div[1]/div[4]/ul/li/a')
                self.cp[int(c.split('?c=')[-1])] = int(_as[-3].text)
            except Exception:
                self.cp[int(c.split('?c=')[-1])] = 1


if __name__ == '__main__':
    x = jtthink()
    print("获取所有专栏")
    x.init_driver()
    print("替换js文件")  # 选择 player 目录
    for i in range(20):
        print(i)
        time.sleep(1)
    x.update_cp()

    flag = True
    # x.down_all_zip()
    # x.get_all_columns()  # 获取所有专栏  # mac windows
    while flag:
        try:
            x.download_movie()  # mac windows
            # if Clean().judge_same() or Clean().same_size(): # windows
            #     pass
            # else:
            #     flag = False
            # time.sleep(random.randrange(10, 100) * 1000)
            # x.down_all_zip()  # mac windows
        except Exception as e:
            print(e)
    x.driver.quit()
