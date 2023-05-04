uppercase.addEventListener("click", ()=> {
    Textinput.value = Textinput.value.toUpperCase()
})
lowercase.addEventListener("click", ()=> {
    Textinput.value = Textinput.value.toLowerCase()
})
Textinput.addEventListener("input", () =>{

    charcount.innerText = Textinput.value.length
    wordcount.innerText = Textinput.value.trim().split(" ").length

})
removeExtraSpaces.addEventListener("click" , () =>{
    Textinput.value = Textinput.value.replace(/\s+/g,' ').trim();

})
removeExtraLines.addEventListener("click" , () =>{
    Textinput.value = Textinput.value.replace(/\s+/g,'\n').trim();

})

document.addEventListener("DOMContentLoaded", () => {
    var capitalize = document.getElementById("capitalize");
    var Textinput = document.getElementById("Textinput");
  
    capitalize.addEventListener("click", () => {
      var splitStr = Textinput.value.toLowerCase().split(" ");
      var res;
      for (var i = 0; i < splitStr.length; i++) {
        if (splitStr[i].length > 0) {
          splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
        }
        res = splitStr.join(" ");
      }
      Textinput.value = res;
    });
});
  