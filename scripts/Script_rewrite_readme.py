# script to rewrite README.md in parent file config

from aditional_packages import *

# -----------------------------------------------------------------------

t1="""# Bulmaskins
a collection for themes for Bulma

"""
t2="""## Credits
Bulmaskins is an project based on Bulma 
[![Bulma skins](https://img.shields.io/badge/-Bulma_skins-blue)](https://saul11235.github.io/BulmaSkins/)
[![By Edwin Saul](https://img.shields.io/badge/-By_Edwin_Saul-black)](https://edwinsaul.com) """

# -----------------------------------------------------------------------

def get_line_readme(skin):
    return f"""-  [![ Preview {skin} ](https://img.shields.io/badge/-{skin}-blue)](https://saul11235.github.io/BulmaSkins?skin={skin})
[![ code ](https://img.shields.io/badge/-code-white)](https://github.com/Saul11235/BulmaSkins/tree/main/skins/{skin})
[![ light mode ](https://img.shields.io/badge/-light_mode-black)](https://saul11235.github.io/BulmaSkins?skin={skin}&dark=false)
[![ dark mode ](https://img.shields.io/badge/-dark_mode-black)](https://saul11235.github.io/BulmaSkins?skin={skin}&dark=true)""".replace("\n","")

# -----------------------------------------------------------------------

def get_central_text():
    list_data=[]
    for skin in getSkins():
        list_data.append(get_line_readme(skin))
    return "\n".join(list_data)+"\n"

# -----------------------------------------------------------------------

writeFilepath("../"     ,"README.md",t1+get_central_text()+t2)
writeFilepath("../skins","README.md",t1+get_central_text()+t2)
writeFilepath("../css"  ,"README.md",t1+get_central_text()+t2)
 
