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
/*----------------------------------*/
if (skin!=null) {
  if (arrayNameSkins.includes(skin)){
     console.log("v2_view");
     var dark_is_loaded=false;
     var light_is_loaded=false;
     document.getElementById("BulmaSkins-light").setAttribute("href","https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/"+skin+".light.css");
     document.getElementById("BulmaSkins-dark" ).setAttribute("href","https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/"+skin+".dark.css");
     function config_view_skin() {
       add_script("./js/webapp/v2_view/init.js");
       add_script("./js/webapp/v2_view/config_cdn_elements_in_dom.js");
       add_script("./js/webapp/v2_view/get_html_skin_dropdown.js");
     };
    function config_style_view(){
       document.getElementById("load-container").style.display="none";
       add_script("https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/js/cdn/first.js");
       config_DOM();
       config_dropdown();
       add_script("./js/webapp/v2_view/get_html_reel.js");
       add_script("https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/js/cdn/last.js");
    };
    /*sensor css files*/
    document.getElementById("BulmaSkins-light").addEventListener("load",function(){light_is_loaded=true});
    document.getElementById("BulmaSkins-dark" ).addEventListener("load",function(){dark_is_loaded=true});
    config_view_skin()
    /*DOM sensor*/
    var run_sensor=true;
    function DOM_sensor() {
       if (document.getElementById("footer-webapp")!=null){
         console.log('web app: view style '+skin);
	 config_style_view();
         run_sensor=false;	 
       };
    if (run_sensor) {setTimeout(function(){DOM_sensor();}, 50);}
    }   
    DOM_sensor();
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
/*----------------------------------*/

