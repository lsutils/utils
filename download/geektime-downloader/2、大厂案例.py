import json
import os.path
import random
import time

import requests.cookies

ua = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36"

cookies = {}
p = os.path.join(os.path.expanduser("~"), "geektime-downloader", "secret")
try:
    os.makedirs(os.path.dirname(p))
except Exception:
    pass
if os.path.exists(p):
    try:
        with open(p, 'r', encoding='utf8') as f:
            for line in f.readlines():
                if not line.strip():
                    continue
                line = line.strip()
                cookies[line.split(' ')[0]] = line.split(' ')[1]
    except Exception:
        pass
if len(cookies) <= 0:
    res = requests.post(
        "https://account.geekbang.org/account/ticket/login",
        headers={
            "Origin": "https://account.geekbang.org",
            "User-Agent": ua,
        },
        data={
            "country": 86,
            "appid": 1,
            "platform": 3,
            "cellphone": "15733101139",
            "password": "2TjYV@Tm6Jxrg8w",
        })
    print(res.status_code)
    xcookies = []
    for item in res.cookies:
        xcookies.append({
            'name': item.name,
            'value': item.value,
            'domain': ".geekbang.org",
            'httpOnly': True,
            'expires': item.expires
        })
    with open(p, 'w', encoding='utf8') as f:
        for item in xcookies:
            f.write(f'{item["name"]} {item["value"]}\n')

headers = {
    'Content-Type': 'application/json',
    'Origin': 'https://time.geekbang.org',
    'Referer': 'https://time.geekbang.org/qconplus/videolist?sort=new',
    'User-Agent': ua,
}

json_data = {
    'type': 'q',
    'size': 20,
    'prev': 0,
    'orderby': 'new',
}

case_data = {}

try:
    with open('case.json', 'r', encoding='utf8') as f:
        case_data = json.loads(f.read())
except Exception:
    pass
finally:
    if not case_data.get('info'):
        case_data['info'] = {}
    if not case_data.get('detail'):
        case_data['detail'] = {}


def find_min():
    _min = 1 << 64
    for k, vs in case_data['info'].items():
        if min(vs['pids']) < _min:
            _min = vs['start_time']
    return _min


while 1:
    response = requests.post('https://time.geekbang.org/serv/v3/product/list', cookies=cookies, headers=headers,
                             json=json_data)
    find = False
    for item in response.json()['data']['topics']:
        if item['title'] not in case_data['info']:
            find = True
        print(item['title'], item['pids'])
        case_data['info'][item['title']] = {
            'pids': item['pids'],
            'start_time': item['start_time'],
            'subtitle': item['subtitle'],
        }
    for item in response.json()['data']['list']:
        case_data['detail'][item['id']] = item['title']
    if not find:
        break
    time.sleep(random.randint(3, 10))
    json_data['prev'] = find_min()
    with open('case.json', 'w', encoding='utf8') as f:
        f.write(json.dumps(case_data, ensure_ascii=False, indent=4))

for key, items in case_data['info'].items():
    for pid in items['pids']:
        cmd = f'go run main.go --classID={pid} --productTypeIndex=3 --relPath=\'{items["subtitle"] + "-----" + key}\''
        print(cmd)
        os.system(cmd)
