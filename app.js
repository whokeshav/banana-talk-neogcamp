var btntranslate=document.querySelector("#btn-translate")
var txtinput=document.querySelector("#txt-input")
console.log(txtinput)
function clickHandler()
{console.log("clicked")}
if (btntranslate) {
    btntranslate.addEventListener("click",clickHandler())
}


 