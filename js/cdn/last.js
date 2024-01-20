// BulmaSkins -js last script - By Edwin Saul

// STEP 2.1; config switch button
if (BulmaSkins_get() === true) {
  document.getElementById("BulmaSkins-switch-dark").style.display="none";
  document.getElementById("BulmaSkins-switch-light").style.display="block";
} else {
  document.getElementById("BulmaSkins-switch-light").style.display="none";
  document.getElementById("BulmaSkins-switch-dark").style.display="block";
};

// STEP 2.2: define functions to switch themes
function BulmaSkins_ligth(){
  document.getElementById("BulmaSkins-light").disabled=false;
  document.getElementById("BulmaSkins-dark").disabled=true;
  document.getElementById("BulmaSkins-switch-dark").style.display="none";
  document.getElementById("BulmaSkins-switch-light").style.display="block";
  BulmaSkins_set(true);
}
function BulmaSkins_dark(){
  document.getElementById("BulmaSkins-dark").disabled=false;
  document.getElementById("BulmaSkins-light").disabled=true;
  document.getElementById("BulmaSkins-switch-light").style.display="none";
  document.getElementById("BulmaSkins-switch-dark").style.display="block";
  BulmaSkins_set(false);
}

// STEP 2.3: create function to switch skins
function BulmaSkins_click() {
  if (BulmaSkins_get() === true) {BulmaSkins_dark();}  
  else  { BulmaSkins_ligth(); };
};

// STEP 2.4: add event listener in switch
var BulmaSkins_switch=document.getElementById("BulmaSkins-switch")
BulmaSkins_switch.addEventListener("click",BulmaSkins_click);
