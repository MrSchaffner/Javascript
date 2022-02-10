
//there is one function for each button.

var Animal={
  species:"dog",
  sound:"bark",
  sound2:"bark2"
}

delete Animal.sound2;

function whatType(){
  var or = 1;
  document.getElementById("typer").innerHTML= typeof or;


}

function stringType(){
  var or = "hello";
  document.getElementById("typer").innerHTML= typeof or;
}



function squared(){
  var or = parseInt(document.getElementById("Number").innerHTML,10);
  document.getElementById("Number").innerHTML= or * or;
}

function results(){
var por = isNaN(5);
document.getElementById("results").innerHTML
+= "<br>is 5 Nan? " + isNaN(5) 
+ "<br>is red Nan? " + isNaN("red")
+ "<br>0/0 is" +0/0;
}
