
//there is one function for each button.

var Animal={
  species:"dog",
  sound:"bark",
  sound2:"bark2"
}

delete Animal.sound2;

function dictionaryTime(){
  var or = document.getElementById("Math").innerHTML;
  document.getElementById("Math").innerHTML= or + Animal.sound;
}
