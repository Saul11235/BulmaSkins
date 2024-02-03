console.log("v1: view 1 init");
var random_skin=arrayNameSkins[ Math.floor(Math.random()*arrayNameSkins.length)];

function go_to_random() {
  let another_random_skin=arrayNameSkins[ Math.floor(Math.random()*arrayNameSkins.length)];
  let url = "https://saul11235.github.io/BulmaSkins/?&skin="+another_random_skin;
  window.location.href = url;
}

function button_from_skin(nameSkin) {
  return `
<div class="grid-item">
 <div class="container has-text-centered is-centered">
  <div class="block">
    <a class="title" href="https://saul11235.github.io/BulmaSkins/?&skin=XXX">XXX</a>
  </div>
  <div class="container">
   <div class="buttons has-addons is-centered">
   <a class="button is-link is-small is-rounded" href="https://saul11235.github.io/BulmaSkins/?&skin=XXX">
    <span>view</span>
    <span class="icon"> <i class="bi bi-globe"></i> </span>
   </a>
   <a class="button is-light is-small is-rounded" href="https://github.com/Saul11235/BulmaSkins/tree/main/skins/XXX"> 
    <span>code</span>
    <span class="icon"> <i class="bi bi-github"></i> </span>
   </a>
  </div>
  </div>
 </div>       
</div>
  `.replace(new RegExp("XXX", 'g'), nameSkin);
};
/*------------------------------------------------------*/
var buttons="";
for (var i = 0; i < arrayNameSkins.length; i++) {
  buttons+=button_from_skin(arrayNameSkins[i]);
}
buttons='<div class="grid-container">'+buttons+'<div></div></div>'
/*------------------------------------------------------*/
document.body.innerHTML=`
<style>
hr {
  background-color: #606060;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap:10px;
}
.grid-item {
  padding: 15px;
  margin: 0px;
  border: 1px solid gray;
  border-radius: 5px;
}
.my-code{
  font-family:monospace;
  font-size:0.6rem;
  background-color:black;
  padding:8px;
  color:white;
  text-wrap:wrap;
  word-break:break-word;
}
</style>
<div class="hero is-dark is-fullheight is-mobile">
 <div class="hero-body">
  <div class="container">
   <div class="block">
    <div class="field has-text-centered">
      <a id="bulmaskins-pick" class="title has-text-centered is-1"> BulmaSkins </a>
    </div>
    <p class="has-text-centered">
     BulmaSkins is a collection of themes created for Bulma, available via CDN, with light and dark options.
    </p> 
   </div>
   <div class="content"><hr>
<div class="container">
  <div class="columns is-multiline is-vcentered">
<div class="column is-12-tablet is-4-desktop"><!-- column 1 -->
  <div class="container">
     <h1 class="subtitle is-5"> How to use BulmaSkins, using for example XXX-skin:</h1>
     <div class="field has-text-centered">
       <a class="button is-link is-rounded" href="https://saul11235.github.io/BulmaSkins/?&skin=XXX">
          <span>preview XXX</span>
          <span class="icon"><i class="bi bi-globe"></i></span>
       </a>
     </div>
     <div>
       <span>XXX-light via CDN</span>
       <button id="copy-light" class="button icon is-dark"><i class="bi bi-copy"></i></button>
     </div>
     <div id="field-light" class="my-code" ></div>
     <div>
       <span>XXX-dark via CDN</span>
       <button id="copy-dark" class="button icon is-dark"><i class="bi bi-copy"></i></button>
     </div>
     <div id="field-dark" class="my-code"></div>
  </div>  
</div> <!-- end column 1 -->    
<div class="column is-12-tablet is-8-desktop"> <!-- column 2 -->
  <h1 class="subtitle is-5"> How to use BulmaSkins with a light/dark switch, using for example XXX-skin:</h1>
  <div class="columns is-multiline is-vcentered">    <!--begin subcolumns -->
<div class="column is-12-tablet is-6-desktop "> <!-- subcol 2.1 -->
  <div class="container">
     <div>
       <span>in head element:</span>
       <button id="copy-head" class="button icon is-dark"><i class="bi bi-copy"></i></button>
     </div>
     <div id="field-head" class="my-code"></div>
     <div>
       <span>in end of body element</span>
       <button id="copy-body" class="button icon is-dark"><i class="bi bi-copy"></i></button>
     </div>
     <div id="field-body" class="my-code"></div>
  </div> 
</div> <!-- end subcol 2.1 -->
<div class="column is-12-tablet is-6-desktop "> <!-- subcol 2.2 -->
  <div class=""container>
    <div>
      <span>creating a button to manage the switch themes, in body:</span>
      <button id="copy-button" class="button icon is-dark"><i class="bi bi-copy"></i></button>
    </div>
    <div id="field-button" class="my-code"></div>
  </div> 
</div> <!-- end subcol 2.2 -->
    </div> <!-- end subcolumns -->
   </div> <!-- end column 2 -->
  </div> <!-- end columns -->
</div> <!-- end container -->
<hr></div>
 <h1 class="title">all skins:</h1>
 <div class="block">
   <div class="content" id="BulmaSkins_all_skins"></div>
 </div>
 <div class="block">
   <div class="content">
     <h1 class="subtitle">why use BulmaSkins</h1>
     <div class="container" style="border:1px solid darkgray;margin:20px;padding:20px;border-radius:25px;">
       <ul class="padding: 20px;">
         <li><strong> Effortless Integration: </strong> BulmaSkins seamlessly integrates with Bulma, a modern CSS framework, ensuring compatibility and ease of use in your web development projects. </li>
         <li><strong> Time-Saving: </strong> By utilizing pre-designed and well-crafted skins, developers can save valuable time on styling, allowing them to focus on other aspects of their projects. </li>
         <li><strong> Customization: </strong> BulmaSkins offers a starting point for customization, enabling developers to tailor the appearance of their websites according to specific branding or design requirements. </li>
         <li><strong> Responsive Design: </strong> Built on the foundation of Bulma, BulmaSkins inherits its responsive design principles, ensuring that your web applications look great on various devices and screen sizes. </li>
         <li><strong> CDN Convenience: </strong> The availability of minified CSS files via CDN ensures fast and reliable delivery, enhancing the performance of your web pages. </li>
	 <br>
       </ul>
     </div>
     <h1 class="subtitle">About BulmaSkins</h1>
    <p>
     BulmaSkins is a collection of skins based on Bulma, accompanied by minified
     CSS compiled and readily available via CDN. These skins offer a convenient
     and stylish way to enhance the visual appearance of your web projects.
    </p>
    <h1 class="subtitle">Using saas</h1>
    <p>
     BulmaSkins leverages the power of Sass (Syntactically Awesome Stylesheets)
     to provide a more organized and modular structure for styling.
     With Sass, developers can enjoy features like variables, nesting,
     and mixins, making the styling process more efficient and maintainable.
    </p>
    <h1 class="subtitle">License</h1>
    <p>Bulma Skins is built upon Bulma and incorporates Google Fonts. It is provided under the MIT license.</p>
  </div>
 </div>
</div>
 </div> <!-- end hero-body -->
 <div id="footer-webapp" class="hero-foot">
  <div class="container has-text-centered">
   <div class="block is-spaced">
    <a class="button is-link" href="https://edwinsaul.com">
      <span>By Edwin Saul</span>
      <span class="icon"><i class="bi bi-rocket-takeoff"></i></span>
    </a>
    <a class="button is-light" href="https://github.com/Saul11235/BulmaSkins">
      <span>View on github</span>
      <span class="icon"><i class="bi bi-github"></i></span>
    </a>
    <br></br>
   </div>
  </div>
 </div> <!-- end hero-foot -->
</div>`.replace(new RegExp("XXX", 'g'), random_skin);

//----------------------------------
var run_sensor=true;
function DOM_sensor() {
  if (document.getElementById("footer-webapp")!=null){
    let nameSkin=random_skin;
    /* config code examples DOM */
    document.getElementById("field-light" ).innerText='<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/XXX.light.css">'.replace("XXX",nameSkin);
    document.getElementById("field-dark"  ).innerText='<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/XXX.dark.css">'.replace("XXX",nameSkin);
    document.getElementById("field-head"  ).innerText=`<!-- begin BulmaSkins - XXX -->\n<link id="BulmaSkins-light" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/XXX.light.css">\n<link id="BulmaSkins-dark" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/XXX.dark.css">\n<script src="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/js/cdn/first.js"></script> `.replace("XXX",nameSkin).replace("XXX",nameSkin).replace("XXX",nameSkin);
    document.getElementById("field-button").innerText=`<!-- BulmaSkins-switch -->\n<button id="BulmaSkins-switch" class="button is-primary">\n  <div id="BulmaSkins-switch-light">\n    Light\n  </div>\n  <div id="BulmaSkins-switch-dark" style="display:none">\n    Dark\n  </div>\n</button> `;
    document.getElementById("field-body"  ).innerText=`<!-- end BulmaSkins -->\n<script src="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/js/cdn/last.js"></script>`;
    /*add random skin*/
    document.getElementById("bulmaskins-pick").addEventListener("click",function(){go_to_random();});
    /* config copy buttons*/
    document.getElementById("copy-light" ).addEventListener("click", function(){navigator.clipboard.writeText('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/XXX.light.css">'.replace("XXX",nameSkin));});
    document.getElementById("copy-dark"  ).addEventListener("click", function(){navigator.clipboard.writeText( '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/XXX.dark.css">'.replace("XXX",nameSkin));});
    document.getElementById("copy-head"  ).addEventListener("click", function(){navigator.clipboard.writeText( `<!-- begin BulmaSkins - XXX -->\n<link id="BulmaSkins-light" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/XXX.light.css">\n<link id="BulmaSkins-dark" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/XXX.dark.css">\n<script src="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/js/cdn/first.js"></script> `.replace("XXX",nameSkin).replace("XXX",nameSkin).replace("XXX",nameSkin));});
    document.getElementById("copy-button").addEventListener("click", function(){navigator.clipboard.writeText( `<!-- BulmaSkins-switch -->\n<button id="BulmaSkins-switch" class="button is-primary">\n  <div id="BulmaSkins-switch-light">\n    Light\n   </div>\n  <div id="BulmaSkins-switch-dark" style="display:none">\n    Dark\n  </div>\n</button> `);});
    document.getElementById("copy-body"  ).addEventListener("click", function(){navigator.clipboard.writeText( `<!-- end BulmaSkins -->\n<script src="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/js/cdn/last.js"></script>`);});
    /* config all button skins*/
    document.getElementById("BulmaSkins_all_skins").innerHTML=buttons; 
    run_sensor=false;	 
    };
  if (run_sensor) {setTimeout(function(){DOM_sensor();}, 50);}
}   
DOM_sensor();
