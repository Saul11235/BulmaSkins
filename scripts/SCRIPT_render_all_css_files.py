# script for render all BulmaSkins css files
# writed by Edwin Saul

from os.path import isdir, join
from os import listdir,system,rmdir, remove

#-------------------------------------------

def delete_all_contents(path):
    for element in listdir(path):
        full_path=join(path,element)
        if isdir(full_path): rmdir(full_path) 
        else: remove(full_path)

#-------------------------------------------

delete_all_contents("../css")

#-------------------------------------------

all_name_skins=[]
all_name_files=listdir("../skins")

for name in all_name_files:
    if isdir(join("../skins",name)):
        all_name_skins.append(name)

#-------------------------------------------

def render_template(namestyle):
    system(f"sass ../skins/{namestyle}/{namestyle}.light.scss ../css/{namestyle}.light.css --style compressed")
    system(f"sass ../skins/{namestyle}/{namestyle}.dark.scss  ../css/{namestyle}.dark.css  --style compressed")
    print("render "+namestyle+" ok!")

#-------------------------------------------

print("RENDER ALL CSS FILES")

for style in all_name_skins:
    render_template(style)

#-------------------------------------------
if __name__=="__main__":
    import SCRIPT_create_namestyles_js
    input("all css files rendered! ")
