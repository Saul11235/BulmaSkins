console.log("v1: view 1 init");


function button_from_skin(nameSkin) {
  return `
<a class="button is-dark"
href ="https://saul11235.github.io/BulmaSkins/?&skin=XXX">
  <span>
  XXX
  </span>
</a>

  `.replace(new RegExp("XXX", 'g'), nameSkin);
};

var buttons="";
console.log(arrayNameSkins);

for (var i = 0; i < arrayNameSkins.length; i++) {
  buttons+=button_from_skin(arrayNameSkins[i]);
}

/*------------------------------------------------------*/


document.body.innerHTML=`
<div class="hero is-dark is-fullheight">

  <div class="hero-head">
     <div class="content">
     <div class="block">
        <h1 class="title">
	  BulmaSkins
	</h1>
	</div>
     </div>
  </div>


  <div class="hero-body">
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

