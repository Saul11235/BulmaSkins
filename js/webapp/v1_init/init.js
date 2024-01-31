console.log("v1: view 1 init");
var random_skin=arrayNameSkins[ Math.floor(Math.random()*arrayNameSkins.length)];


function button_from_skin(nameSkin) {
  return `
<div class="block grid-item">
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
console.log(arrayNameSkins);

for (var i = 0; i < arrayNameSkins.length; i++) {
  buttons+=button_from_skin(arrayNameSkins[i]);
}

buttons='<div class="grid-container">'+buttons+'<div></div></div>'

/*------------------------------------------------------*/


document.body.innerHTML=`
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 2fr));
  gap: 0px;
}
.grid-item {
  padding: 20px;
  margin: 4px;
  border: 1px solid gray;
  border-radius: 5px;
}
.notification {
  font-size:0.7rem;
  font-family:monospace;
  overflow-x:auto;
  white-space:nowrap;
  color:white;
  background-color:black;
  padding:8px;
}
</style>

<div class="hero is-dark is-fullheight">
 <div class="hero-body">
  <div class="container">
   <div class="content">
    <div class="title has-text-centered"> BulmaSkins </div>
    <p class="has-text-centered">
     BulmaSkins is a collection of themes created for Bulma, available via CDN, with light and dark options.
     for example if we use the XXX skin
    </p> 
   </div>
   <div class="content">
    <div class="field has-text-centered">
      <a class="button is-link is-rounded" href="https://saul11235.github.io/BulmaSkins/?&skin=XXX">
      <span>preview XXX</span>
      <span class="icon"><i class="bi bi-globe"></i></span>
      </a>
      <br/><br/>
    </div>

    <!-- ---------------------------------------------------- -->
<div class="container">
<div class="columns">
 <div class="column is-4">
    <h1 class="subtitle is-5">How to use:</h1>
    <p>to config and use BulmaSkins you can use this from CDN, pick and view</p>
    <div>
     <span>XXX light theme via CDN</span>
     <button id="b" class="button icon is-dark"><i class="bi bi-copy"></i></button>
    </div>
    <div id="field-light" class="notification">
     &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/XXX.light.css"&gt;
    </div>
    <div>
     <span>XXX dark theme via CDN</span>
     <button id="b" class="button icon is-dark"><i class="bi bi-copy"></i></button>
    </div>
    <div id="field-light" class="notification">
     &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/XXX.dark.css"&gt;
    </div>
</div>    
<div class="column is-8">
    <h1 class="subtitle is-5">How to use whit an light/dark switch theme:</h1>
 <div class="columns">    
   <div class="column is-6">
    <div>
     <span>in head element:</span>
     <button id="b" class="button icon is-dark"><i class="bi bi-copy"></i></button>
    </div>
    <div id="field-light" class="notification">
     &lt;!-- begin BulmaSkins - XXX --&gt;
     <br>&lt;link id="BulmaSkins-light" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/XXX.light.css"&gt;
     <br>&lt;link id="BulmaSkins-dark" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/css/XXX.dark.css"&gt;
     <br>&lt;script src="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/js/cdn/first.js"&gt;&lt;/script&gt; 
    </div>
    <div>
     <span>in end of body element</span>
     <button id="b" class="button icon is-dark"><i class="bi bi-copy"></i></button>
    </div>
    <div id="field-light" class="notification">
     &lt;!-- end BulmaSkins --&gt;
     <br>&lt;script src="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/js/cdn/last.js"&gt;&lt;/script&gt; 
    </div>
   </div>
   <div class="column is-6">
   <div>
     <span>creating a button to manage the switch themes, in body:</span>
     <button id="b" class="button icon is-dark"><i class="bi bi-copy"></i></button>
    </div>
    <div id="field-light" class="notification">
     &lt;!-- BulmaSkins-switch --&gt;
     <br>&lt;button id="BulmaSkins-switch" class="button is-primary"&gt;
     <br>&lt;div id="BulmaSkins-switch-light"&gt;
     <br>Light
     <br>&lt;/div&gt;
     <br>&lt;div id="BulmaSkins-switch-dark" style="display:none"&gt;
     <br>Dark
     <br>&lt;/div&gt;
     <br>&lt;/button&gt; 
    </div>
  </div> 
  </div>
 </div>
</div> <!-- end columns -->
</div>
    <!-- ---------------------------------------------------- -->

   </div>
   <h1 class="title">all skins:</h1>
   <div class="block"><div class="block" id="BulmaSkins_all_skins"></div></div>
   <div class="block">
     <div class="content">

       <h1 class="subtitle">About BulmaSkins</h1>
       <p>BulmaSkins is a collection of skins based on Bulma, accompanied by minified CSS compiled and readily available via CDN. These skins offer a convenient and stylish way to enhance the visual appearance of your web projects.</p>
       <h1 class="subtitle">Using saas</h1>
       <p>BulmaSkins leverages the power of Sass (Syntactically Awesome Stylesheets) to provide a more organized and modular structure for styling. With Sass, developers can enjoy features like variables, nesting, and mixins, making the styling process more efficient and maintainable.</p>
       <h1 class="subtitle">why use BulmaSkins</h1>
        <ul>
	 <li><strong> Effortless Integration: </strong> BulmaSkins seamlessly integrates with Bulma, a modern CSS framework, ensuring compatibility and ease of use in your web development projects. </li>
	 <li><strong> Time-Saving: </strong> By utilizing pre-designed and well-crafted skins, developers can save valuable time on styling, allowing them to focus on other aspects of their projects. </li>
	 <li><strong> Customization: </strong> BulmaSkins offers a starting point for customization, enabling developers to tailor the appearance of their websites according to specific branding or design requirements. </li>
	 <li><strong> Responsive Design: </strong> Built on the foundation of Bulma, BulmaSkins inherits its responsive design principles, ensuring that your web applications look great on various devices and screen sizes. </li>
	 <li><strong> CDN Convenience: </strong> The availability of minified CSS files via CDN ensures fast and reliable delivery, enhancing the performance of your web pages. </li>
        </ul>

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

</div> 
`.replace(new RegExp("XXX", 'g'), random_skin);

//----------------------------------
//
var run_sensor=true;
function DOM_sensor() {
  if (document.getElementById("footer-webapp")!=null){
    document.getElementById("BulmaSkins_all_skins").innerHTML=buttons; 
    run_sensor=false;	 
    };
  if (run_sensor) {setTimeout(function(){DOM_sensor();}, 50);}
}   
    DOM_sensor();
 

