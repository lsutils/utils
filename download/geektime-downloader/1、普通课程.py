import json
import os.path
import time

import requests.cookies

ua = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36"

cookies = []
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
                cookies.append({
                    'name': line.split(' ')[0],
                    'value': line.split(' ')[1],
                    'domain': ".geekbang.org",
                    'httpOnly': True,
                    'expires': time.time() + 60 * 60 * 24 * 360
                })
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
    for item in res.cookies:
        cookies.append({
            'name': item.name,
            'value': item.value,
            'domain': ".geekbang.org",
            'httpOnly': True,
            'expires': item.expires
        })
    with open(p, 'w', encoding='utf8') as f:
        for item in cookies:
            f.write(f'{item["name"]} {item["value"]}\n')

jar = requests.cookies.RequestsCookieJar()
for cookie in cookies:
    jar.set(cookie['name'], cookie['value'])

data = []
if os.path.exists('./normal_class.json'):
    with open('./normal_class.json', 'r', encoding='utf8') as f:

        data = json.loads(f.read())['data']['list']
else:
    res = requests.post(
        "https://time.geekbang.org/serv/v3/lecture/list",
        headers={
            "User-Agent": ua,
            'Origin': 'https://time.geekbang.org',
            'Host': 'time.geekbang.org',
            'Referer': 'https://time.geekbang.org/'
        },
        data={
            "label_id": 0,
            "type": 0,
        },
        cookies=jar
    )
    print(res)
    with open('./normal_class.json', 'w', encoding='utf8') as f:
        f.write(res.text)
    print(res.status_code)
    if res.status_code != 451:
        data = res.json()['data']['list']
over={}
try:
    with open('over.json', 'r', encoding='utf8') as f:
        over = json.loads(f.read())
except Exception:
    pass
for item in data:
    print(item['pid'])

    if over.get('over', {}).get(str(item['pid'])):
        continue
    if over.get('nobuy', {}).get(str(item['pid'])):
        continue

    os.system(f'go run main.go --classID={item["pid"]} --productTypeIndex=0')
