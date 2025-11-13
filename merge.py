import datetime
import os
import shutil
from multiprocessing import Pool

path = '/Volumes/Ventoy/3/'


def archiver():
    cdir, dirs, _ = list(os.walk(path))[0]
    ds = []
    for d in dirs:
        p = os.path.join(cdir, d)
        info = os.stat(p)
        date = datetime.datetime.fromtimestamp(info.st_mtime)
        formatted_date = date.strftime('%Y-%m-%d')
        ds.append(formatted_date)
    ds.sort()
    for _dir in set(ds):
        try:
            os.mkdir(os.path.join(cdir, _dir))
        except Exception:
            pass
    for d in dirs:
        p = os.path.join(cdir, d)
        info = os.stat(p)
        date = datetime.datetime.fromtimestamp(info.st_mtime)
        formatted_date = date.strftime('%Y-%m-%d')
        shutil.move(os.path.join(cdir, d), os.path.join(cdir, formatted_date))


def zip_directory(directory, output_path):
    shutil.make_archive(output_path, 'tar', directory)
    # with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
    #     for root, dirs, files in os.walk(directory):
    #         for file in files:
    #             file_path = os.path.join(root, file)
    #             zipf.write(file_path, os.path.relpath(file_path, directory))
    shutil.rmtree(directory)
    os.system('rm -rf ~/.Trash/*')


def tar():
    pool = Pool(2)
    cdir, dirs, _ = list(os.walk(path))[0]
    args = []
    for _dir in dirs:
        directory = os.path.join(cdir, _dir)
        args.append((directory, directory + '.zip'))
    pool.starmap(zip_directory, args)


if __name__ == '__main__':
    # archiver()
    tar()
