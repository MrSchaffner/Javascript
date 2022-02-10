
//there is one function for each button.
function subtraction(){
  var or = parseInt(document.getElementById("Math").innerHTML,10);
  document.getElementById("Math").innerHTML= or - 1;
}

function division(){
  var or = parseInt(document.getElementById("Math").innerHTML,10);
  document.getElementById("Math").innerHTML= or / 2;
}

function multiplication(){
  var or = parseInt(document.getElementById("Math").innerHTML,10);
  document.getElementById("Math").innerHTML= or * 3;
}

function modulus(){
  var or = parseInt(document.getElementById("Math").innerHTML,10);
  document.getElementById("Math").innerHTML= or % 2;
}
function negation(){
  var or = parseInt(document.getElementById("Math").innerHTML,10);
  var nor = -or;
  document.getElementById("Math").innerHTML= nor;
}

function addOne1(){
  var or = parseInt(document.getElementById("Math").innerHTML,10);
 or++; //note increment returns the variable and THEN increments. You can also use ++or to prefix the variable
  document.getElementById("Math").innerHTML= or;
}

function decrement(){
  var or = parseInt(document.getElementById("Math").innerHTML,10);
 or--//
  document.getElementById("Math").innerHTML= or;
}

//used MATH objects
function Randomize(){
  document.getElementById("Math").innerHTML= Math.round(Math.random()*100);
}