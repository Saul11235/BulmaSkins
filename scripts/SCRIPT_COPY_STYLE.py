# create an new style

from aditional_packages import *
from os import system

print("copy style:")

print(" ".join(getSkins()))
name=input("Select original style > ").replace(" ","")
new=input( "Select new name style > ").replace(" ","")

if isSkin(name) and  not(isSkin(new)):

    writeFilepath(f"../skins/{new}",f"{new}.light.scss",light_scss(new))
    writeFilepath(f"../skins/{new}",f"{new}.dark.scss", dark_scss(new))
    writeFilepath(f"../skins/{new}",f"1.{new}.light.custom.scss", readFilepath(f"../skins/{name}",f"1.{name}.light.custom.scss"))
    writeFilepath(f"../skins/{new}",f"2.{new}.dark.custom.scss",  readFilepath(f"../skins/{name}",f"2.{name}.dark.custom.scss"))
    writeFilepath(f"../skins/{new}",f"test.{new}.light.html",test_light_html(new))
    writeFilepath(f"../skins/{new}",f"test.{new}.dark.html",test_dark_html(new))
    writeFilepath(f"../skins/{new}","README.md",readme(new))
    writeFilepath(f"../skins/{new}","render_script.py",python_script(new))

    import Script_create_js_nameSkins
    system(f"vifm ../skins/{new}")

