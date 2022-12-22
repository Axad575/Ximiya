var input = document.getElementById("navdivinput");
var inv = input.value
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    if(input.value !== ""){
        open("https://axad575.github.io/Ximiya/"+input.value+".html")
      
    }
    document.getElementById("myBtn").click();
  }
});
//bodydivinput
var input2 = document.getElementById("bodydivinput");
var inv2 = input2.value
input2.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    if(input2.value !== ""){
        open("https://axad575.github.io/Ximiya/"+input2.value+".html")
      
    }
    document.getElementById("myBtn").click();
  }
});




// bodydiveinput
// var pizda = document.getElementById("bodyd");
// // Выполнение функции, когда пользователь отпускает клавишу на клавиатуре
// pizda.addEventListener("keyup", function(event) {
//   // Число 13 в "Enter" и клавиши на клавиатуре
//   if (event.keyCode === 13) {
//     // При необходимости отмените действие по умолчанию
//     event.preventDefault();
//     if(pizda.value !== ""){
//       open("file:///E:/Ammajon/medicine/"+pizda.value+".html")
//     }
//     // Вызов элемента button одним щелчком мыши
//     document.getElementById("myBtn").click();
//   }
// });

function checkKey(e) {
var inp = document.getElementById('bodyd');
if(e.keyCode == "13") {  
    if(inp.value != ""){
      open("https://axad575.github.io/Ximiya/"+inp.value+".html"")
    }
document.getElementById('form1').submit();
}   
}

  

var naztext = document.getElementById("naztext")
var divelement = document.getElementById("#elementtext")
var naztext2 = document.getElementById("naztext2")
var naznumber = document.getElementById("naznumber");
var groupnumber = document.getElementById("groupnumber");
var periodnumber = document.getElementById("periodnumber")
var valentnumber = document.getElementById("valentnumber");
var atomnumber = document.getElementById("atomnumber1");
var atomnumber2 = document.getElementById("atomnumber2");
var econfig = document.getElementById("econfig");
var qwe = 0;


// var h4 = document.getElementsByClassName("author_name")[0],
//     target = h4.childNodes[0];
// target.innerHTML = "About the author";


//how to change url
