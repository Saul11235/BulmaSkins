# create an new style

from aditional_packages import *
from os import system

name=input("New style, create name > ").replace(" ","")

if not isSkin(name) :

    writeFilepath(f"../skins/{name}",f"{name}.light.scss",light_scss(name))
    writeFilepath(f"../skins/{name}",f"{name}.dark.scss", dark_scss(name))
    writeFilepath(f"../skins/{name}",f"1.{name}.light.custom.scss",light_custom_scss(name))
    writeFilepath(f"../skins/{name}",f"2.{name}.dark.custom.scss",dark_custom_scss(name))
    writeFilepath(f"../skins/{name}",f"test.{name}.light.html",test_light_html(name))
    writeFilepath(f"../skins/{name}",f"test.{name}.dark.html",test_dark_html(name))
    writeFilepath(f"../skins/{name}","README.md",readme(name))
    writeFilepath(f"../skins/{name}","render_script.py",python_script(name))

    import Script_create_js_nameSkins
    import Script_rewrite_readme

    system(f"vifm ../skins/{name}")

