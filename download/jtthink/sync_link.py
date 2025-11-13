# -*-coding:utf-8-*-
import os
import winshell

import os, winshell
from win32com.client import Dispatch


def create_link(source, target):
    # path = os.path.join('./test', "RenXianQi" + " - 快捷方式.lnk")  # Path to be saved (shortcut)
    # target = "H:\Crawl程序员在囧途\data\(版本已经过时)ElasticSearch速学领悟"  # The shortcut target file or folder
    # work_dir = r"D:\New folder"  # The parent folder of your file
    shell = Dispatch('WScript.Shell')
    shortcut = shell.CreateShortCut(source)
    shortcut.Targetpath = target
    shortcut.WorkingDirectory = os.path.dirname(target)
    shortcut.save()


def x(path, first=True):
    res = set()
    for current_dir, dirs, files in os.walk(path):
        for _dir in dirs:
            res.add(_dir)
        if not first:
            for file in files:
                res.add(file)
    return res


_all = []
_all.extend(x("./data"))
pre = ' - 快捷方式.lnk'
_now = []
_now.extend(x("./未读", False))
_now.extend(x("./读完", False))

for item in set(_all):
    if item + pre not in set(_now):
        s = os.path.abspath(os.path.join('./data', item))
        d = os.path.abspath(os.path.join('./未读', item + pre))
        try:
            create_link(d, s)
            # create_link(r'H:\Crawl程序员在囧途\test\a.lnk',
            #             r'H:\Crawl程序员在囧途\data\(版本已经过时)ElasticSearch速学领悟', )

        except Exception as e:
            print(e, s, d)
