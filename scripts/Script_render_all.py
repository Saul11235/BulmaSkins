# script for render all

from aditional_packages import *

delete_all_contents("../css")

for namestyle in getSkins():
    system(f"sass ../skins/{namestyle}/{namestyle}.light.scss ../css/{namestyle}.light.css --style compressed")
    system(f"sass ../skins/{namestyle}/{namestyle}.dark.scss  ../css/{namestyle}.dark.css  --style compressed")
    print("render "+namestyle+" ok!")

import Script_rewrite_readme
