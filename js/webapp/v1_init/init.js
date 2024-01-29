console.log("v1: view 1 init");


function button_from_skin(nameSkin) {
  return `
<div class="" 
style="border:1px solid white;
       border-radius: 20px;
       margin:20px;
       padding: 20px; ">
  <div class="">
    <a class="title"
    href="https://saul11235.github.io/BulmaSkins/?&skin=XXX">
      XXX
    </a>
    <br/>
    <br/>

       <div class="field has-addons">
         <a class="button is-link is-small is-rounded"
	   href="https://saul11235.github.io/BulmaSkins/?&skin=XXX">
	   <span>preview</span>
	   <span class="icon"> <i class="bi bi-globe"></i> </span>
	 </a>
         <a class="button is-light is-small is-rounded" 
	   href="https://saul11235.github.io/BulmaSkins/?&skin=XXX">
	   <span>code</span>
	   <span class="icon"> <i class="bi bi-github"></i> </span>
	 </a>



       </div>
 
  </div>
</div>
  `.replace(new RegExp("XXX", 'g'), nameSkin);
};

var buttons="";
console.log(arrayNameSkins);

for (var i = 0; i < arrayNameSkins.length; i++) {
  buttons+=button_from_skin(arrayNameSkins[i]);
}

/*------------------------------------------------------*/


document.body.innerHTML=`
<div class="hero is-dark ">
  <div class="hero-body">
    <div class="content">
      <h1 class="title">
	  BulmaSkins
       </h1>
       <p>
         is an collection for themes based on
	 <a class="is-underline">
	     Bulma
	 </a>
       </p>
   </div>
  </div>
</div>    


<div class="hero is-dark is-halftheight">

  <div class="hero-body">
    <div class="content">
      <div class="columns">
        `+buttons+`
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

`

