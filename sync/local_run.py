import json
import os
import time
# import warnings
# warnings.filterwarnings("ignore", category=NotOpenSSLWarning)

try:
    with open('/tmp/s.json', 'r', encoding='utf8') as f:
        success = json.loads(f.read())
except Exception:
    success = {}


def sync(image):
    with open('/tmp/sync.sh', 'w', encoding='utf8') as f:
        f.write(f'''
rm /tmp/sync.txt || true
skopeo_copy_script.py {image}
''')
    os.system(f'bash /tmp/sync.sh')
    with open('/tmp/sync.txt', 'r', encoding='utf8') as f:
        code = int(f.read())
    return code


def sync_file(file):
    with open(file, 'r', encoding='utf8') as f:
        data = json.loads(f.read())
        keys = list(data.keys())
        keys.sort()
        for i, repo in enumerate(keys):
            for tag in data[repo]:
                image = f'{repo}:{tag}'
            if success.get(image) == 1:
                continue
            code = 1
            while code != 0:
                print(f'[{i}/{len(data)}] {image}')
                code = sync(image)
                time.sleep(2)
            success[image] = 1
            with open('/tmp/s.json', 'w', encoding='utf8') as f:
                f.write(json.dumps(success, ensure_ascii=False, indent=4))


abs_path = os.path.dirname(os.path.abspath(__file__))

sync_file(os.path.join(abs_path, 'random-tasks.json'))
sync_file(os.path.join(abs_path, 'fixed-tasks.json'))
