# create function get_skins.js 
from aditional_packages import *

writeFilepath("../js/webapp","get_skins.js",
"""// no code manually this file is generated
var arrayNameSkins= ['""" + "','".join(getSkins()) + """'];""")
print(">> Created get_skins.js finished!")
