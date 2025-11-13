import json

urls = set()
with open('./course_detail.json', 'r', encoding='utf8') as f:
    for items in json.loads(f.read()).values():
        for item in items:
            urls.add(int(item['link'].strip().split('/')[-1]))
for i in range(1, 5000):
    if i not in urls:
        print('open -a "/Applications/Google Chrome.app" https://www.jtthink.com/course/play/%s' % i)
