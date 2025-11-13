# pip install browsermob-proxy
import os.path
import time

from browsermobproxy import Server
from selenium.webdriver.chrome import webdriver
from selenium.webdriver.chrome.options import Options

base = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                    './browsermob-proxy-2.1.4-bin/browsermob-proxy-2.1.4/bin/browsermob-proxy.bat')
# server = Server(os.path.abspath(base))  # 这是bat文件路径
# server.start()
# proxy = server.create_proxy()

chrome_options = Options()
# proxy.new_har('bb', options={'captureHeaders': True})
# chrome_options.add_argument('--proxy-server={0}'.format(proxy.proxy))
driver = webdriver.WebDriver(executable_path="../chromedriver.exe", chrome_options=chrome_options)

driver.get('http://www.baidu.com')
time.sleep(1)
print(driver.get_log("browser"))
# print(proxy.har)
# driver.get('https://www.baidu.com')

# print(proxy.har)

driver.quit()
