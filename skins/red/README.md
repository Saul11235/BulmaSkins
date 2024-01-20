# red            
a Theme for Bulma part of BulmaSkins             
[![ Preview red ](https://img.shields.io/badge/-Preview_red-red)](https://saul11235.github.io/BulmaSkins?skin=red)
[![ light mode ](https://img.shields.io/badge/-light_mode-black)](https://saul11235.github.io/BulmaSkins?skin=red&dark=false)
[![ dark mode ](https://img.shields.io/badge/-dark_mode-black)](https://saul11235.github.io/BulmaSkins?skin=red&dark=true)
## adding in your project
if you what to use this theme in your project put this in your html doc:
### red-light via CDN
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/red.light.css">
```
### red-dark via CDN
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/red.dark.css">
```
### red whith switch-color via CDN
in head element:
```html
<!-- begin BulmaSkins - red -->
<link id="BulmaSkins-light" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/red.light.css">
<link id="BulmaSkins-dark"  rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/red.dark.css">
<script src="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/js/cdn/first.js"></script>
```
creating a button to manage the switch themes, in body:            
```html
<!-- BulmaSkins-switch -->
<button id="BulmaSkins-switch" class="button is-primary">
 <div id="BulmaSkins-switch-light">
   Light
 </div>
 <div id="BulmaSkins-switch-dark" style="display:none">
   Dark
 </div>
</button>
```
in end of body element:            
```html
<!-- end BulmaSkins -->
<script src="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/js/cdn/last.js"></script>
```
[![Bulma skins](https://img.shields.io/badge/-Bulma_skins-blue)](https://saul11235.github.io/BulmaSkins/)
[![By Edwin Saul](https://img.shields.io/badge/-By_Edwin_Saul-black)](https://edwinsaul.com)