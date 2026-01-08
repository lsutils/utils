#!/usr/bin/env python3
import json
import os
import shutil
import ssl
from collections import OrderedDict

from slugify import slugify

ssl._create_default_https_context = ssl._create_unverified_context
all_count = 0


def mk(xx):
    try:
        os.makedirs(xx)
    except Exception:
        pass


def run(command):
    print(command)
    os.system(command)


run('pip3 install bilix')

# save_path = "./data"
# save_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data")
save_path = '/Users/acejilam/Desktop/bilibili视频'
# save_path = '/Volumes/Tf/skip/bilibili视频2'
tmp_path = os.path.join(save_path, "tmp")
mk(save_path)
over_data = OrderedDict()
videos = OrderedDict()
all_users_he_ji = OrderedDict()
try:
    with open("./crawl_over.json", 'r', encoding='utf8') as f:
        over_data = json.loads(f.read())
    with open("./videos.json", 'r', encoding='utf8') as f:
        videos = json.loads(f.read())
    with open("./he_ji.json", 'r', encoding='utf8') as f:
        all_users_he_ji = json.loads(f.read())
except Exception as e:
    pass


def write(r):
    if r > 0.7:
        with open("./crawl_over.json", 'w', encoding='utf8') as f:
            f.write(json.dumps(over_data, ensure_ascii=False, indent=4))


def not_download(all_links, over_links):
    count = 0
    for _link in all_links.values():
        if _link.strip('/') not in over_links:
            count += 1
    return count


def common(_title, _href, _user, _save_path, need_download):
    global all_count
    if _fileter(_title):
        over_data[_href] = True
        write(1)
        return
    if not over_data.get(_href, False):

        all_count += 1
        print(f'user:{_user:>30} {all_count:>4}/{need_download:<4}  {_href}')
        cmd = f"""
rm -rf r.txt||true
bilix -fb chrome get_series -d {_save_path} '{_href}' 
echo $?> ./r.txt
"""
        with open('./cmd.sh', 'w', encoding='utf8') as f:
            f.write(cmd)
        run("bash cmd.sh")
        try:
            with open('./r.txt', 'r', encoding='utf8') as f:
                res = f.read()
            if res.strip() == "0":
                # run("clear")
                over_data[_href] = True
                write(1)
        except:
            pass


def _fileter(_title):
    for _item in [
        "gorm", "前端", "编译原理", "vue", "android", 'java', 'dubbo', 'Spring', 'Mybatis', 'python'
    ]:  # type: str
        if _item.lower() in _title.lower():
            return True
    else:
        return False


def download_hj():
    for user, user_detail in all_users_he_ji.items():
        global all_count
        all_count = 0
        need_download_set = set()

        for hj_name, hj_details in user_detail.items():
            for title, link in hj_details.items():
                if link in over_data:
                    continue
                if _fileter(title):
                    continue
                if over_data.get(link, False):
                    continue
                need_download_set.add(link)

        for hj_name, hj_details in user_detail.items():
            for title, link in hj_details.items():
                if link not in need_download_set:
                    continue
                mk(os.path.join(save_path, user, slugify(hj_name, allow_unicode=True)))
                common(
                    title, link, user,
                    os.path.join(save_path, user, slugify(hj_name, allow_unicode=True)),
                    len(need_download_set)
                )
    write(1)


def download():
    for user, user_detail in all_users_he_ji.items():
        print(f"handling user:{user}")
        need_download_set = set()
        for hj_name, hj_details in user_detail.items():
            for title, link in hj_details.items():
                if link in over_data:
                    continue
                if _fileter(title):
                    continue
                if over_data.get(link, False):
                    continue
                need_download_set.add(link)
        global all_count
        all_count = 0
        for hj_name, hj_details in user_detail.items():

            for title, link in hj_details.items():
                if link not in need_download_set:
                    continue
                mk(os.path.join(save_path, user))
                print(title, link)
                common(title, link, user, os.path.join(save_path, user), len(need_download_set))
    write(1)


def clean():
    for _dir in os.listdir(save_path):
        account_path = os.path.join(save_path, _dir)
        file_count = 0
        for cd, dirs, files in os.walk(account_path):
            file_count += len(files)
            if cd != save_path:
                if len(files) == 0 and len(dirs) == 0:
                    shutil.rmtree(cd)
        if file_count == 0:
            shutil.rmtree(account_path, ignore_errors=True)


if __name__ == '__main__':
    download_hj()
    download()
    clean()
