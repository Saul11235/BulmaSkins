console.log("v1: view 1 init");


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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0px;
}
.grid-item {
  padding: 5px;
  margin: 4px;
  border: 1px solid gray;
  border-radius: 5px;
}
</style>

<div class="hero is-dark is-halftheight">

  <div class="hero-body">
    <div class="content">
      <div class="title">
      BulmaSkins
      </div>
    </div>

  <span><br/></span>
    <div class="content">
      `+buttons+`
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

`

