# create reel js - by Edwin Saul
from aditional_packages import *

def clear(string):
    string=string.replace("\n","")
    while "  " in string:  string=string.replace("  "," ")
    while " <" in string: string=string.replace(" <","<")
    while "> " in string: string=string.replace("> ",">")
    return string

writeFilepath("../js/html","get_html_reel.js", "document.getElementById('put_reel_html_here').innerHTML='"+clear(readFilepath("../js/html","reel.html"))+"'")
 
