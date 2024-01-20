# create function get_skins.js 
from aditional_packages import *

writeFilepath("../js/data","get_skins.js",
"""// no code manually this file is generated
function get_name_skins() {
 return ['""" + "','".join(getSkins()) + """'];
}""")

print(">> Created get_skins.js finished!")
