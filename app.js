var btntranslate=document.querySelector("#btn-translate")
var txtinput=document.querySelector("#txt-input")
var outputdiv=document.querySelector("#output")
var serverurl="https://api.funtranslations.com/translate/minion.json"

 function getTranslationurl(text)
 {
    return serverurl + "?" + "text=" + text 
 }
 function errorhandeler(error)
 {
    console.log("error occured",error)
    alert("something wrong with server . try again after sometime ") 
 }
function clickHandler()
{
    var inputtext = txtinput.value;

    fetch(getTranslationurl(inputtext))
     .then(response=>response.json())
     .then(json=>{
        var translatedtext = json.contents.translated;
        outputdiv.innerText = translatedtext;
                  
        }

         )
    .catch(errorhandeler)
}
btntranslate.addEventListener("click",clickHandler )


  