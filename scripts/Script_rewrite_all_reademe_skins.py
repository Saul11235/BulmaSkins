# rewrite all readme packages
from aditional_packages import *

def writeReadme(nameSkin):
    print(nameSkin)
    writeFilepath(f"../skins/{nameSkin}","README.md",readme(nameSkin))

all_skins=getSkins();

for x in all_skins:writeReadme(x)


