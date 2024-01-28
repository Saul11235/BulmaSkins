// get local url
var url = window.location.href;
var urlParams = new URLSearchParams(url);
var skin = urlParams.get('skin');
var dark = urlParams.get('dark');
function add_script(path){
   var external_script= document.createElement('script');
   external_script.src = path;
   document.head.appendChild(external_script);

};
if (skin!=null) {
  if (arrayNameSkins.includes(skin)){
     console.log("v2_view");
     document.getElementById("BulmaSkins-light").setAttribute("href","https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/"+skin+".light.css");
     document.getElementById("BulmaSkins-dark" ).setAttribute("href","https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/"+skin+".dark.css");
     document.getElementById("Bulma-default").style.display="none";
     add_script("./js/webapp/v2_view/init.js");
     add_script("./js/webapp/v2_view/config_cdn_elements_in_dom.js");
     add_script("./js/webapp/v2_view/get_html_reel.js");
     add_script("./js/webapp/v2_view/get_html_skin_dropdown.js");

     /*End BulmaSkins*/
     add_script("https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/js/cdn/last.js");

  } else {
     console.log("v3_error");
     document.getElementById("BulmaSkins-light").setAttribute("href","https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css");
     document.getElementById("BulmaSkins-dark" ).setAttribute("href","https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css");
     add_script("./js/webapp/v3_error/init.js");
  };
} else {
  console.log(  "v1_init");
     document.getElementById("BulmaSkins-light").setAttribute("href","https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css");
     document.getElementById("BulmaSkins-dark" ).setAttribute("href","https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css");
     add_script("./js/webapp/v1_init/init.js");
};
