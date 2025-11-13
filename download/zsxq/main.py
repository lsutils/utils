# -*-coding:utf-8-*-
import concurrent.futures
import json
import os
import os.path
import platform
import subprocess
import sys
import time
from abc import ABC
from collections import defaultdict
from typing import List, Dict, Sized

import requests
import requests.cookies
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad
from selenium.webdriver.chrome.service import Service
from loguru import logger
from selenium import webdriver
from selenium.webdriver.common.by import By
from slugify import slugify
import shutil

from tqdm import tqdm

options = {
    'page-size': 'Letter',
    'encoding': "UTF-8",
    'custom-header': [
        ('Accept-Encoding', 'gzip')
    ]
}


def _print(*args, **kwargs):
    print(*args, **kwargs, flush=True)


dataPath = r"/Users/acejilam/Desktop/data"


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
            for k, vs in data.items():
                for v in vs:
                    self.data[k].append(v)
        except Exception as e:
            print(e)

    def __setitem__(self, key, value):

        self.data[key] = value
        self.dump()

    def __getitem__(self, item):
        return self.data[str(item)]

    def dump(self):
        with open('%s.json' % self.key, 'w', encoding='utf8') as f:
            f.write(json.dumps(dict(self.data), ensure_ascii=False, indent=4))

    def __len__(self):
        return len(self.data)

    def __str__(self):
        return json.dumps(self.data, ensure_ascii=False)

    def items(self):
        for k, v in self.data.items():
            yield k, v

    def append(self, k, v):
        k = str(k)
        exist = False
        for item in self.data[k]:
            if json.dumps(item, sort_keys=True) == json.dumps(v, sort_keys=True):
                exist = True
                break
        if exist:
            pass
        else:
            self.data[k].append(v)
            self.dump()

    def json(self):
        return json.dumps(self.data)


def pad_hanzi_string(s, length, pad_char=' '):
    """
    将汉字字符串填充到固定长度
    :param s: 输入字符串
    :param length: 目标长度
    :param pad_char: 填充字符，默认为空格
    :return: 填充后的字符串
    """
    current_length = len(s)  # 当前字符串长度
    # 如果当前长度已经达到了或超过了目标长度
    if current_length >= length:
        return s[:length]  # 截取到目标长度

    # 计算需要的填充长度
    pad_needed = length - current_length

    # 创建填充字符串
    pad_string = pad_char * pad_needed

    # 返回拼接后的字符串
    return s + pad_string


class zsxq:
    def __init__(self):
        self.driver = None  # WebDriver
        self.cookies_data = {}
        self.xing_qiu_map = {}
        self.video_topic_over = Map("video_topic", False)
        self.ts_path = "/tmp/tsfiles"

    def init_driver(self):
        # 启动浏览器，并设置好wait        desired_capabilities=capabilities
        p = '/Users/acejilam/software/chromedriver'
        service = Service(p)
        self.driver = webdriver.Chrome(service=service)
        self.driver.get('https://wx.zsxq.com/login')
        # self.driver.minimize_window()
        if os.path.exists('./anquan.txt') and time.time() - os.stat('./anquan.txt').st_mtime < 12 * 3600:
            with open('anquan.txt', 'r', encoding='utf8') as f:
                listCookies: List[Dict] = json.loads(f.read())
                self.cookies_data = listCookies
                for cookie in listCookies:
                    if not self.driver.get_cookie(cookie['name']):
                        self.driver.add_cookie(cookie)
                self.driver.refresh()
            return

        login = self.find_elements_by_xpath(value='//*[@class="login-container"]')
        while len(login) > 0:
            time.sleep(3)
            logger.info('需要登录')
            login = self.find_elements_by_xpath(value='//*[@class="login-container"]')
        self.driver.implicitly_wait(10)
        dictCookies = self.driver.get_cookies()
        self.cookies_data = dictCookies
        with open('anquan.txt', 'w') as f:
            f.write(json.dumps(dictCookies, ensure_ascii=False, indent=4))

    def init_session(self, column_id):
        # if column_id:
        #     self.driver.get(f'https://wx.zsxq.com/columns/{column_id}')
        cookies = self.driver.get_cookies()
        jar = requests.cookies.RequestsCookieJar()
        for cookie in cookies:
            jar.set(cookie['name'], cookie['value'])
        self.session = requests.Session()
        self.session.cookies.update(jar)

    def find_element_by_xpath(self, value):
        return self.driver.find_element(By.XPATH, value)

    def find_elements_by_xpath(self, value):
        return self.driver.find_elements(By.XPATH, value)

    def save_articles(self):
        _as = self.find_elements_by_xpath("//app-topic-flow//app-group-list/div//div[@class='group-list']//a")
        for a in _as:
            title = a.text.strip()
            if a.find_elements(By.XPATH, './span'):
                title = title[:len(title) - len(a.find_elements(By.XPATH, './span')[0].text)].strip()
            self.xing_qiu_map[slugify(title, allow_unicode=True)] = (
                a.get_attribute('href').strip().split('/')
            )[-1]
        time.sleep(3)

        # _print(len(self.find_elements_by_xpath('//div[@class="main-content-container"]/app-topic')))
        # x = self.find_elements_by_xpath('//div[@class="main-content-container"]/app-topic')[0]
        for xing_qiu_name, xing_qiu_id in self.xing_qiu_map.items():
            self.handle(xing_qiu_name, xing_qiu_id)

    def handle(self, xing_qiu_name, xing_qiu_id):
        _print('starting handle %s' % xing_qiu_name)
        columns_url = f'https://api.zsxq.com/v2/groups/{xing_qiu_id}/columns'
        self.init_session(None)
        res = self.session.get(columns_url)
        if res.status_code != 200:
            _print(f"get {xing_qiu_name} failed", res.status_code)
            return
        data = res.json()
        for column_info in data['resp_data'].get('columns', []):
            column_name = slugify(column_info['name'], allow_unicode=True)
            _print('starting handle %s🤑🤑%s' % (xing_qiu_name, column_name))
            _as = f'https://api.zsxq.com/v2/groups/{xing_qiu_id}/columns/{column_info["column_id"]}/topics?count=100&sort=default&direction=desc'
            res = self.session.get(_as)
            if res.status_code != 200:
                _print(f"get {xing_qiu_name} {column_info['column_id']}failed", res.status_code)
                sys.exit(1)
            d = res.json()
            for topic_info in d['resp_data'].get('topics', []):
                self.handle_topic(
                    xing_qiu_name, xing_qiu_id, column_name, column_info['column_id'], topic_info['topic_id'],
                    slugify(topic_info['text'].split('\n')[0], allow_unicode=True)
                )

    @staticmethod
    def get_column_path(xing_qiu_name, column_name, column_id):
        p = os.path.join(dataPath, xing_qiu_name, "专栏", column_name)
        try:
            os.makedirs(p)
        except:
            pass
        return p

    #  # 原始字节字符串
    def handle_topic(self, xing_qiu_name, xing_qiu_id, column_name, column_id, topic_id, topic_name):

        res = self.session.get(f'https://api.zsxq.com/v2/topics/{topic_id}/info')
        if res.status_code != 200:
            _print(f"get {xing_qiu_name} {column_name} {topic_name} info failed", res.status_code)
            sys.exit(1)
        if res.json()['succeeded']:
            video_info = res.json()['resp_data']['topic']['talk'].get('video')
            if video_info:
                # title = pad_hanzi_string('%s🤑🤑%s😎😎%s' % (xing_qiu_name, column_name, topic_name), 68)
                title = '%s🤑🤑%s😎😎%s' % (xing_qiu_name, column_name, topic_name)

                self.download_video(
                    xing_qiu_name, xing_qiu_id, column_name, column_id, topic_id, topic_name,
                    video_info['video_id'], title
                )

    def download_video(self, xing_qiu_name, xing_qiu_id, column_name, column_id, topic_id, topic_name, video_id, title):
        for item in self.video_topic_over[topic_id]:
            if item['video_id'] == video_id:
                return

        res = self.session.get(f'https://api.zsxq.com/v2/videos/{video_id}/url')
        if res.status_code != 200:
            _print(f"get {xing_qiu_name} {column_name} {topic_name} failed", res.status_code)
            return
        if not res.json()['succeeded']:
            _print(f"get {xing_qiu_name} {column_name} {topic_name} m3u8 url failed", res.status_code,
                   res.json()['error'])
            return
        m3u8_url = res.json()['resp_data']['url']
        self.init_session(column_id)
        res = self.session.get(m3u8_url)
        if res.status_code != 200:
            _print(f"get {xing_qiu_name} {column_name} {topic_name} m3u8 failed", res.status_code)
            return
        self.init_session(column_id)

        key = self.get_key(res.text)
        if key == '7369676e6174757265206572726f72':
            _print('key sign error')
            return
        if key:
            _len = self.download_ts(key, res.text, title)
            if _len == len(os.listdir(self.ts_path)):
                column_save_path = self.get_column_path(xing_qiu_name, column_name, column_id)
                self.merge(topic_id, video_id, os.path.join(column_save_path, topic_name))
            else:
                _print('length not match')

    def download_ts(self, key, txt, title):
        ts_list = []
        for line in txt.splitlines():
            if not line.strip().endswith('ts'):
                continue
            num = int(line.strip('ts.').split('-')[-1])
            url = f'https://videos.zsxq.com/{line.strip()}'
            ts_list.append((num, url))
        s = time.time()
        shutil.rmtree(self.ts_path, ignore_errors=True)
        os.mkdir(self.ts_path)
        # flag = True
        flag = False
        if flag:
            for i, ts in enumerate(ts_list):
                self.download_ts_pre(
                    self.ts_path,
                    dic={'ts': ts, 'total': len(ts_list), 'i': i, 'content': txt, "key": key}
                )
        else:
            self.concurrent_download(title, [
                {
                    'ts': ts[1].strip(), 'total': len(ts_list), 'i': ts[0], 'content': txt, "key": key
                } for ts in ts_list
            ])

        return len(ts_list)

    def concurrent_download(self, text, ts_list):
        with tqdm(total=len(ts_list), desc=text, unit='ts') as pbar:
            # 创建一个线程池
            with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
                # 提交任务并收集 Future 对象
                futures = {
                    executor.submit(self.download_ts_pre, self.ts_path, dic): dic for dic in ts_list
                }

                # 主线程收集结果
                for future in concurrent.futures.as_completed(futures):

                    task_id = futures[future]
                    try:
                        future.result()  # 获取工作线程的结果
                    except Exception as e:
                        print(f"Task {task_id} generated an exception: {e}")
                    pbar.update(1)

    # 设置保存路径
    def set_file(self):
        file_path = os.path.abspath(os.path.join(os.getcwd(), self.ts_path))
        if not os.path.exists(file_path):
            os.makedirs(file_path)
        return file_path

    @staticmethod
    def download_ts_pre(ts_path, dic):
        # 统一默认都是有加密的，没有加密只需把true改为false
        is_cry = True
        i = dic['i']
        ts = dic['ts']
        key = dic['key']
        if ts == "":
            return
        if is_cry:
            # 实例化CBC模式的AES对象
            try:
                key_bytes = bytes.fromhex(key.zfill(32))
                iv_bytes = bytes.fromhex(f"{i:032x}")
                cipher = AES.new(key_bytes, AES.MODE_CBC, iv_bytes)
            except Exception as e:
                _print(e)
                return

        res = requests.get(ts)
        # 可以根据ts文件数量，适当设置3(3表示是位数，如 001)
        file_name = str(i).rjust(3, '0') + '.ts'
        file = os.path.join(ts_path, file_name)

        with open(file, 'wb') as f:
            if is_cry:
                decrypted_data = unpad(cipher.decrypt(res.content), AES.block_size)
            else:
                decrypted_data = res.content
            f.write(decrypted_data)
            # _print(i, end=' ')

    def merge(self, topic_id, video_id, out_path):
        # ts文件绝对路径
        ts_path = self.ts_path
        # 读取ts文件夹下所有的ts文件
        path_list = os.listdir(ts_path)
        # 对文件进行排序
        path_list.sort()
        # 将排序后的ts的绝对路径放入列表中
        # li = [os.path.abspath(os.path.join(ts_path, filename)) for filename in path_list]
        li = [f'{ts_path}/%s' % filename for filename in path_list]
        # 类似于[001.ts|00.2ts|003.ts]
        input_file = '|'.join(li)
        # 指定输出文件名称
        output_file = '/tmp/tmp.mp4'
        os.system(f'rm -rf {output_file}')
        # 使用ffmpeg将ts合并为mp4
        if 'wind' in platform.platform().lower():
            p = 'ffmpeg.exe'
        else:
            p = 'ffmpeg'

        # command = '%s -i "concat:%s" -acodec copy -vcodec copy -v error  %s' % (p, input_file, output_file)
        command = '%s -y -i "concat:%s" -c copy %s' % (p, input_file, output_file)
        # 指行命令
        subprocess.getoutput(command)
        # os.system(command)
        if os.path.exists(output_file):
            self.video_topic_over.append(topic_id, {
                "video_id": video_id,
                "topic_id": topic_id,
            })
        os.rename(output_file, out_path + ".mp4")

    def get_key(self, text, ):
        url = ''
        for item in text.split('\n'):
            if item.startswith('#EXT-X-KEY:METHOD=AES-128'):
                url = item[len('#EXT-X-KEY:METHOD=AES-128,URI=') + 1:].strip('"')
        # _print(url)
        c = requests.get(url, cookies={
            "abtest_env": "product",
            "zsxq_access_token": dict(self.session.cookies)['zsxq_access_token']
        })
        if c.status_code != 200:
            _print(f"get auth failed", c.status_code)
            return
        return c.content.hex()


if __name__ == '__main__':
    x = zsxq()
    x.init_driver()
    time.sleep(2)
    x.save_articles()
    x.driver.quit()
