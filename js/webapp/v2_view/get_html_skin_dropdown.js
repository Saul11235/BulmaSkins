// get_html_skin_dropdown
// arrayNameSkins
// nameSkin
//
function config_dropdown() {
var dropdown=document.getElementById("bulmaskins-dropdown");

//-----------------------
// for test only
// for (let i = 0; i < 4; i++) {
//   // Código a repetir
//   arrayNameSkins=arrayNameSkins.concat(arrayNameSkins);
// } 
//-----------------------

function get_element_skin(skin){
  return '<div class="grid-item"><a href="https://saul11235.github.io/BulmaSkins/?&skin=XXX" class="dropdown-item"> XXX </a></div>'.replace("XXX",skin).replace("XXX",skin);
};
var acumtext="";
for (var i = 0; i < arrayNameSkins.length; i++) {
  acumtext+=get_element_skin(arrayNameSkins[i]);
}

var fulltext=`
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  grid-gap:4px;
}
.grid-item {
  background-color:white;
  font-size:5rem;
  color:black;
  padding: 2px;
  margin: 2px;
}
</style>
<div class="button dropdown is-right is-hoverable is-primary">
  <div class="dropdown-trigger">
    <button class="button is-primary" aria-haspopup="true" aria-controls="dropdown-menu4">
    </button>
      <span>XXX</span>
      <span class="icon is-small">
        <i class="bi bi-chevron-down" aria-hidden="true"></i>
      </span>
  </div>
  <div class="dropdown-menu" id="dropdown-menu1" role="menu">
    <div class="dropdown-content">
      <div class="grid-container block">
        YYY
      </div>
    </div>
  </div>
</div>
`.replace("XXX",skin).replace("YYY",acumtext);

dropdown.innerHTML=fulltext;
}
