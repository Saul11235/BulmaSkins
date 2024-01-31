console.log("v1: view 1 init");
var random_skin=arrayNameSkins[ Math.floor(Math.random()*arrayNameSkins.length)];


function button_from_skin(nameSkin) {
  return `
<div class="grid-item">
  <div class="container has-text-centered is-centered">
    <a class="subtitle"
    href="https://saul11235.github.io/BulmaSkins/?&skin=XXX">
      XXX
    </a>
    <div class="container">
       <div class="buttons has-addons is-centered">
         <a class="button is-link is-small is-rounded"
	   href="https://saul11235.github.io/BulmaSkins/?&skin=XXX">
	   <span>preview</span>
	   <span class="icon"> <i class="bi bi-globe"></i> </span>
	 </a>
         <a class="button is-light is-small is-rounded" 
	   href="https://github.com/Saul11235/BulmaSkins/tree/main/skins/XXX">
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

buttons='<div class="grid-container">'+buttons+'</div>'

/*------------------------------------------------------*/


document.body.innerHTML=`
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 0px;
}
.grid-item {
  padding: 5px;
  margin: 4px;
  border: 1px solid gray;
  border-radius: 5px;
}
.notification {
  font-size:0.7rem;
  font-family:monospace;
  padding:8px;
  overflow-x:auto;
  white-space:nowrap;
  color:white;
  background-color:black;
}
</style>

<div class="hero is-dark">

  <div class="hero-body">
    <div class="container">
      <div class="content">
        <div class="title has-text-centered">
          BulmaSkins
        </div>
        <p class="has-text-centered">
          BulmaSkins is an collection for themes maded for 
	  Bulma
        </p>
      </div>


      `+buttons+`

      <div class="content">
          <p class="has-text-centered"> in this example will be use the skin XXX </p>
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

        <h1 class="subtitle is-5">How to use whit an light/dark switch theme:</h1>
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
          <div>
            <span>in end of body element</span>
	    <button id="b" class="button icon is-dark"><i class="bi bi-copy"></i></button>
	  </div>
          <div id="field-light" class="notification">
            &lt;!-- end BulmaSkins --&gt;
            <br>&lt;script src="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/js/cdn/last.js"&gt;&lt;/script&gt; 
	  </div>

       </div>
      </div>
    </div>

  <div class="hero-foot">
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
      </div>
      <p clas="is-small">
      <p>
    </div>
  </div>
  </div>


</div> 

`.replace(new RegExp("XXX", 'g'), random_skin);
