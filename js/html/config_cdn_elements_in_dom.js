var nameSkin="purple"

/* Set copy buttons actions in DOM ------------ */
function config_DOM() {
document.getElementById("copy-light").addEventListener("click", function(){
  navigator.clipboard.writeText('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/XXX.light.css">'.replace("XXX",nameSkin));
});
document.getElementById("copy-dark").addEventListener("click", function(){
  navigator.clipboard.writeText('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/XXX.dark.css">'.replace("XXX",nameSkin));
});
document.getElementById("copy-head").addEventListener("click", function(){
  navigator.clipboard.writeText( `<!-- begin BulmaSkins - XXX -->
<link id="BulmaSkins-light" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/XXX.light.css">
<link id="BulmaSkins-dark" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/XXX.dark.css">
<script src="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/js/cdn/first.js"></script> `.replace("XXX",nameSkin).replace("XXX",nameSkin).replace("XXX",nameSkin)    );
});
document.getElementById("copy-button").addEventListener("click", function(){
  navigator.clipboard.writeText( `<!-- BulmaSkins-switch -->
<button id="BulmaSkins-switch" class="button is-primary">
  <div id="BulmaSkins-switch-light">
    Light
  </div>
  <div id="BulmaSkins-switch-dark" style="display:none">
    Dark
  </div>
</button> `);
});
document.getElementById("copy-body").addEventListener("click", function(){
  navigator.clipboard.writeText( `<!-- end BulmaSkins -->
<script src="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/js/cdn/last.js"></script>`);
});

/* config code examples DOM */
document.getElementById("field-light").innerText='<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/XXX.light.css">'.replace("XXX",nameSkin);
document.getElementById("field-dark" ).innerText='<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/XXX.dark.css">'.replace("XXX",nameSkin);
document.getElementById("field-head" ).innerText=`<!-- begin BulmaSkins - XXX -->
<link id="BulmaSkins-light" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/XXX.light.css">
<link id="BulmaSkins-dark" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/XXX.dark.css">
<script src="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/js/cdn/first.js"></script> `.replace("XXX",nameSkin).replace("XXX",nameSkin).replace("XXX",nameSkin);
document.getElementById("field-button").innerText=`<!-- BulmaSkins-switch -->
<button id="BulmaSkins-switch" class="button is-primary">
  <div id="BulmaSkins-switch-light">
    Light
  </div>
  <div id="BulmaSkins-switch-dark" style="display:none">
    Dark
  </div>
</button> `;
document.getElementById("field-body").innerText=`<!-- end BulmaSkins -->
<script src="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/js/cdn/last.js"></script>`;

/*config labels on DOM*/
document.getElementById("label_skin_name").innerText=nameSkin;
document.getElementById("label-dark-cdn").innerText=nameSkin+"-dark via CDN";
document.getElementById("label-light-cdn").innerText=nameSkin+"-light via CDN";
document.getElementById("label-switch-cdn").innerText=nameSkin+" whith switch-color via CDN";
document.getElementById("label-cdn").innerText=nameSkin+" via CDN";

/*config skin button*/
document.getElementById("label_skin_github").innerText=nameSkin+" on github";
document.getElementById("button_skin_github").setAttribute("href","https://github.com/Saul11235/BulmaSkins/tree/main/skins/"+nameSkin);

/*config name html document*/
document.title=nameSkin;

};

// connfig DOM
config_DOM();
