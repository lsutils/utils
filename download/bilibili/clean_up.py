import json

with open('videos.json', 'r', encoding='utf-8') as f:
    json_data = json.loads(f.read())

with open('crawl_over.json', 'r', encoding='utf-8') as f:
    crawl_over = json.loads(f.read())

for _, v in json_data.get('KCD-China', {}).items():
    if crawl_over.get(v):
        del crawl_over[v]

with open('crawl_over.json', 'w', encoding='utf-8') as f:
    f.write(json.dumps(crawl_over, ensure_ascii=False, indent=4))
