import json
import os
import random
import shutil
from abc import ABC
from collections import defaultdict
from typing import Sized

import pytesseract
from PIL import Image
import cv2

os.environ['TESSDATA_PREFIX'] = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'traineddata')


# pip install opencv-python

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
        if exist:
            pass
        else:
            print(k, v)
            self.data[k].append(v)
            self.dump()

    def json(self):
        return json.dumps(self.data)


# pip install opencv-python

class Clean:
    def __init__(self):
        self.ok = Map("ok", False)
        self.res = []
        for current_dir, dirs, files in os.walk('./data'):
            for file in files:
                path = os.path.join(current_dir, file)
                path = os.path.abspath(path)
                if path.endswith('.mp4'):
                    self.res.append(path)

    def same_size(self, size=7602055):
        t = []
        for file in self.res:
            if os.stat(file).st_size == size:
                try:
                    print(file)
                    os.remove(file)
                except Exception:
                    pass
            else:
                t.append(file)
        flag = len(self.res) == len(t)
        self.res = t
        return flag

    def save_images(self, file, func):
        try:
            shutil.rmtree("images", ignore_errors=True)
            os.mkdir('images')
        except Exception:
            pass
        #   读取视频文件
        vode = cv2.VideoCapture(file)
        #   读帧
        success, frame = vode.read()
        #   初始化变量
        i = 0  # 帧计数
        j = 0  # 图片计数
        timeF = 57 * 5  # 每隔57帧（一秒）保存一张图片，这个要看自己的视频每秒是多少帧
        # 使用循环进行图片的保存
        while success:
            i = i + 1

            if i % timeF == 0:
                j = i + 1
                if i > timeF * 4:
                    return False
                path = f'./images/image_{j}.jpg'
                cv2.imwrite(path, frame)
                if func(path):
                    return True
                print('save image:', file, j)
            success, frame = vode.read()

    def judge_same(self):
        x = 0
        random.shuffle(self.res)
        for file in self.res:
            if self.__judge_same(file):
                x += 1
        return x

    def __judge_same(self, file):
        if self.ok[file]:
            return
        delete_flag = self.save_images(file, self.__judge_test)
        if delete_flag:
            print('delete', file)
            os.remove(file)
            shutil.rmtree("images", ignore_errors=True)
            return True
        else:
            shutil.rmtree("images", ignore_errors=True)
            self.ok.append(file, [])

    @staticmethod
    def __judge_test(img):
        image = Image.open(img)
        text = pytesseract.image_to_string(image, lang='chi_sim')  # 使用简体中文解析图片
        text = text.replace(" ", "")
        if '本视频是测试视频' in text:
            return True
        return False

# Clean().same_size()
# Clean().save_images("1.mp4")
# Clean().judge_same()
