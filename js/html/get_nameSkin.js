var url = window.location.href;
var urlParams = new URLSearchParams(url);

var nameSkin=urlParams.get("skin")
var isdark  =urlParams.get("dark")

/* ------------------------------------ */

console.log("skin");
console.log(nameSkin);
if (nameSkin===null) {
  nameSkin=arrayNameSkins[0];
}


