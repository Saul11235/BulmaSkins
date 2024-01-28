// get_html_skin_dropdown
// arrayNameSkins
// nameSkin
var dropdown=document.getElementById("bulmaskins-dropdown");

var text1=`
<div class="dropdown is-hoverable">
  <div class="dropdown-trigger">
    <button class="button is-primary" aria-haspopup="true" aria-controls="dropdown-menu4">
      <span>XXX</span>
      <span class="icon is-small">
        <i class="bi bi-chevron-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu4" role="menu">
    <div class="dropdown-content">
`.replace("XXX",nameSkin);
var text2='';
var text3=`
    </div>
  </div>
</div>
`;

function get_element_skin(skin){
  return '<a href="https://saul11235.github.io/BulmaSkins/?&skin=XXX" class="dropdown-item"> XXX </a>'.replace("XXX",skin).replace("XXX",skin);
};

for (var i = 0; i < arrayNameSkins.length; i++) {
  text2+=get_element_skin(arrayNameSkins[i]);
}

fulltext=text1+text2+text3;
dropdown.innerHTML=fulltext;
