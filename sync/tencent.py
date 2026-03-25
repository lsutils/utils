# -*- coding: utf-8 -*-
import json
import os
import sys
from collections import defaultdict

# os.system('pip3 install tencentcloud-sdk-python-tcr')

from tencentcloud.common import credential
from tencentcloud.common.exception.tencent_cloud_sdk_exception import TencentCloudSDKException
from tencentcloud.common.profile.client_profile import ClientProfile
from tencentcloud.common.profile.http_profile import HttpProfile
from tencentcloud.tcr.v20190924 import tcr_client, models
from trans_image import trans_image, inner_repo as get_inner_repo

inner_repo = get_inner_repo()
if len(inner_repo) == 0:
    sys.exit(0)

cred = credential.Credential(os.getenv("SECRET_ID"), os.getenv("SECRET_KEY"))
httpProfile = HttpProfile()
httpProfile.endpoint = "tcr.tencentcloudapi.com"

clientProfile = ClientProfile()
clientProfile.httpProfile = httpProfile
client = tcr_client.TcrClient(cred, "ap-guangzhou", clientProfile)


def list_repo(repo):
    data = []
    total = 100000
    try:
        offset = 0
        while len(data) < total:
            req = models.DescribeRepositoryOwnerPersonalRequest()
            req.Limit = 100
            req.Offset = offset
            req.RepoName = repo
            resp = client.DescribeRepositoryOwnerPersonal(req)
            data.extend(resp.Data.RepoInfo)
            offset += len(resp.Data.RepoInfo)
            total = resp.Data.TotalCount
        return data
    except TencentCloudSDKException as err:
        print(err)


def create_repo(name):
    try:
        req = models.CreateRepositoryPersonalRequest()
        req.from_json_string(json.dumps({
            "RepoName": "acejilam/" + name,
            "Public": 1
        }))
        resp = client.CreateRepositoryPersonal(req)
        print(f"create repo:{name}", resp.to_json_string())
    except TencentCloudSDKException as err:
        print(err)


def delete_repo(name):
    try:
        req = models.DeleteRepositoryPersonalRequest()
        params = {
            "RepoName": name
        }
        req.from_json_string(json.dumps(params))
        resp = client.DeleteRepositoryPersonal(req)
        print(f"delete repo:{name}", resp.to_json_string())
        os.system(f"tinr ccr.tencentcloudcr.com/acejilam/{name}:{resp.to_json_string()}")
    except TencentCloudSDKException as err:
        print(err)


def delete_repo_tag(name, tag):
    try:
        req = models.DeleteImagePersonalRequest()
        params = {
            "RepoName": name,
            "Tag": tag
        }
        req.from_json_string(json.dumps(params))
        resp = client.DeleteImagePersonal(req)
        print(f'delete repo:{name} tag:{tag}', resp.to_json_string())
        os.system(f"tinr ccr.tencentcloudcr.com/acejilam/{name}:{resp.to_json_string()}")
    except TencentCloudSDKException as err:
        print(err)


def list_repo_tag(repo):
    tags = []
    try:
        req = models.DescribeImagePersonalRequest()
        params = {
            "RepoName": repo,
            'Limit': 100
        }
        req.from_json_string(json.dumps(params))
        resp = client.DescribeImagePersonal(req)
        for item in resp.Data.TagInfo:
            tags.append(item.TagName)
        return tags
    except TencentCloudSDKException as err:
        print(err)


def create():
    for item in list_repo("acejilam"):
        print(item)
        if item.Public != 1:
            delete_repo(item.RepoName)

    for repo in inner_repo:
        create_repo(repo)


def clean():
    image_tags = defaultdict(list)
    for item in list_repo("acejilam"):
        repo = item.RepoName.split('/')[1]
        image_tags[repo] = list_repo_tag(item.RepoName)

    current_image_tags = defaultdict(list)

    with open('random-tasks.json', 'r', encoding='utf8') as f:
        data = json.load(f)
        for repo, tags in data.items():
            for tag in tags:
                ti = trans_image(f'{repo}:{tag}')
                new_repo = ti.split(':')[0].split('/')[-1]
                new_tag = ti.split(':')[-1]
                current_image_tags[new_repo].append(new_tag)

    with open('fixed-tasks.json', 'r', encoding='utf8') as f:
        data = json.load(f)
        for repo, tags in data.items():
            for tag in tags:
                ti = trans_image(f'{repo}:{tag}')
                new_repo = ti.split(':')[0].split('/')[-1]
                new_tag = ti.split(':')[-1]
                current_image_tags[new_repo].append(new_tag)

    for repo, tags in image_tags.items():
        if repo not in inner_repo:
            delete_repo('acejilam/' + repo)
            continue
        for tag in set(tags) - set(current_image_tags[repo]):
            delete_repo_tag('acejilam/' + repo, tag)


def public():
    for ns in ["acejilam", "ls-2018", "fixed"]:
        for repo in list_repo(ns):
            if repo.Public != 1:
                try:
                    req = models.ModifyRepositoryAccessPersonalRequest()
                    req.from_json_string(json.dumps({
                        "RepoName": repo.RepoName,
                        "Public": 1
                    }))
                    resp = client.ModifyRepositoryAccessPersonal(req)
                    print(f"public repo:{repo}", resp.to_json_string())
                except TencentCloudSDKException as err:
                    print(err)


if __name__ == '__main__':
    public()
    create()
    clean()
