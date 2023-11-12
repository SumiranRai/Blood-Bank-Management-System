// jQuery(function($) {
//     console.log("start")
//     $.get("extras\slogans.txt", function(wholeTextFile) {
//        console.log(wholeTextFile)
//     //   var lines = wholeTextFile.split(/\n/),
//     //     randomIndex = Math.floor(Math.random() * lines.length),
//     //     randomLine = lines[randomIndex];
//     //   console.log(randomIndex, randomLine)
//     //   $("#ajax").html(randomLine.replace(/#/g,"<br>"))
//     })
//   })


// ************************************* Functions  *************************************

document.getElementById ("groupA").addEventListener ("click", groupA, false);
document.getElementById ("groupB").addEventListener ("click", groupB, false);
document.getElementById ("groupAB").addEventListener ("click", groupAB, false);
document.getElementById ("groupO").addEventListener ("click", groupO, false);

function groupA() {
   
  document.querySelector(".some").classList.remove("img","gB", "gAB", "gO");
  document.querySelector(".some").classList.add("gA");
}

function groupB(){

  document.querySelector(".some").classList.remove("img","gA", "gAB", "gO");
  document.querySelector(".some").classList.add("gB");
}

function groupAB(){

  document.querySelector(".some").classList.remove("img","gB", "gA", "gO");
  document.querySelector(".some").classList.add("gAB");
}

function groupO(){

  document.querySelector(".some").classList.remove("img","gB", "gAB", "gA");
  document.querySelector(".some").classList.add("gO");
}
