var url = window.location.href;
var urlParams = new URLSearchParams(url);

var nameSkin=urlParams.get("skin")
var isdark  =urlParams.get("dark")


if (nameSkin==undefined) {
  nameSkin=arrayNameSkins[0];
}


