# aditional packages for scripting

from  os.path import isdir, join
from os import listdir, makedirs, system, remove

def writeFile(name,content):
    file=open(name,"w")
    try: remove(name)
    except: pass
    file.write(content)
    file.close()

def writeFilepath(container,name,content):
    try:    makedirs(container)
    except: pass
    fullname=str(join(container,name))
    file=open(fullname,"w")
    try:remove(fullname)
    except:pass
    file.write(content)
    file.close()

def getSkins():
    all_name_skins=[]
    all_name_files=listdir("../skins")
    for name in all_name_files:
        if isdir(join("../skins",name)):
            all_name_skins.append(name)
    return all_name_skins

