save_path = '/Users/acejilam/Desktop/bilibili视频'
cookie_file = '/Users/acejilam/Downloads/www.bilibili.com_cookies.txt'
driver_path = "/Users/acejilam/software/chromedriver"

index_page = "https://space.bilibili.com/210836176/relation/follow?tagid=36802400"

#  投稿
tou_gao_next_xpath = '//*[@id="app"]/main//div[@class="vui_pagenation--btns"]/button'

# let data = []
a_script = '''
return JSON.stringify(
    Array.from(
        new Set(
            Array.from(document.querySelectorAll('div.bili-video-card__cover > a'))
                .filter(el => el.href.includes('www.bilibili.com/video'))
                .map(el => ({
                    "url": el.origin + el.pathname,
                    "text": el.querySelectorAll("img")[0].alt
                }))
        )
    )
);
'''


user_mid = '210836176'
go_tag_id = '36802400'
web_location='333.1387'