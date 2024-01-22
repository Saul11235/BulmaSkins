var nameSkin="Reggaeskin"

/* Set copy buttons actions in DOM */

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
 <div id="BulmaSkins-switch-light"> Light </div>
 <div id="BulmaSkins-switch-dark" style="display:none"> Dark </div>
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
 <div id="BulmaSkins-switch-light"> Light </div>
 <div id="BulmaSkins-switch-dark" style="display:none"> Dark </div>
</button> `;
document.getElementById("field-body").innerText=`<!-- end BulmaSkins -->
<script src="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/js/cdn/last.js"></script>`;
document.getElementById("label_skin_name").innerText=nameSkin;





