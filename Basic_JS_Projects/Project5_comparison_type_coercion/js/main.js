
//there is one function for each button.

var Animal={
  species:"dog",
  sound:"bark",
  sound2:"bark2"
}

delete Animal.sound2;

function whatType(){
  var or = document.getElementById("Math").innerHTML;
  document.getElementById("Math").innerHTML= typeof or;


}


function squared(){
  var or = parseInt(document.getElementById("Math").innerHTML,10);
  document.getElementById("Math").innerHTML= or * or;
}
