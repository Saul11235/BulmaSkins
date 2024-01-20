// BulmaSkins -js first script - By Edwin Saul

// STEP 1.1: define BulmaSkins_get,BulmaSkins_set, to manage the BulmaSkins_cookie
// null if the cookie not exists; true light; false dark
function BulmaSkins_get()        {var cookies = document.cookie.split(';');for (var i = 0; i < cookies.length; i++) {var cookie = cookies[i].trim();if (cookie.indexOf('BulmaSkins_cookie=') === 0) {if (cookie.replace("BulmaSkins_cookie","").replace("=","").trim()==="true") {return true;} else { return false}; } } return null; };
function BulmaSkins_set(state)   {var expiration= new Date();expiration.setDate(expiration.getDate()+7);var cookie = 'BulmaSkins_cookie=' + state+ '; expires=' + expiration.toUTCString() + '; path=/; sameSite=None; Secure';document.cookie = cookie;};  
function BulmaSkins_isdarkmode() {return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;}

// STEP 1.2 : create cookie if not exists
if ( BulmaSkins_get() === null){
  if (BulmaSkins_isdarkmode()) { BulmaSkins_set(false);}
  else { BulmaSkins_set(true); }
}

// STEP 1.3 :first theme config
if (BulmaSkins_get() === true) {
  document.getElementById("BulmaSkins-light").disabled=false;
  document.getElementById("BulmaSkins-dark").disabled=true;
} else {
  document.getElementById("BulmaSkins-dark").disabled=false;
  document.getElementById("BulmaSkins-light").disabled=true;
};
