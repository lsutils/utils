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
# save_path = '/Users/acejilam/Desktop/bilibili视频'
save_path = '/Volumes/Ventoy/bilibili视频'
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


def common(_title, _href, _user, save_path):
    global all_count
    print(f'user:{_user:>30} {all_count:>4}/{len(videos[_user]):<4}  {_href}')
    all_count += 1
    if _fileter(_title):
        over_data[_href] = True
        write(1)
        return
        # if _href in re_data:
    if not over_data.get(_href, False):
        # cmd = f"bilix get_series -fb chrome -vc 3 -d {os.path.join(save_path, _user)} --cookie '/Users/acejilam/Desktop/utils/bilibili/www.bilibili.com_cookies.txt' '{_href}' \necho $?> ./r.txt"
        cmd = f"bilix -fb chrome get_series -d {save_path} '{_href}' \necho $?> ./r.txt"
        with open('./cmd.sh', 'w', encoding='utf8') as f:
            f.write(cmd)
        run("bash cmd.sh")
        with open('./r.txt', 'r', encoding='utf8') as f:
            res = f.read()
        if res.strip() == "0":
            # run("clear")
            over_data[_href] = True
            write(1)


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
        all_count = 1
        for hj_name, hj_details in user_detail.items():
            mk(os.path.join(save_path, user, slugify(hj_name, allow_unicode=True)))
            for title, link in hj_details.items():
                if link in over_data:
                    continue
                common(title, link, user, os.path.join(save_path, user, slugify(hj_name, allow_unicode=True)))
    write(1)


def download():
    for user, user_detail in all_users_he_ji.items():
        for hj_name, hj_details in user_detail.items():
            global all_count
            all_count = 1
            for title, link in hj_details.items():
                if link in over_data:
                    continue
                mk(os.path.join(save_path, user, ))
                common(title, link, user, os.path.join(save_path, user))
    write(1)


def clean():
    for cd, dirs, files in os.walk(save_path):
        if cd != save_path:
            if len(files) == 0 and len(dirs) == 0:
                shutil.rmtree(cd)


if __name__ == '__main__':
    download_hj()
    download()
    clean()
