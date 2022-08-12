
function Ride_or_no() {
  var height, can_ride;
  height = document.getElementById("Height").value;
  can_ride = (height < 52) ? "You are short" : "You can ride";
  document.getElementById("ride_text").innerHTML = can_ride;
}


function check_age() {
  var age, can_ride;
  age = document.getElementById("Age").value;
  can_ride = (age >= 18) ? "You can vote" : "You're still a child";
  document.getElementById("voter text").innerHTML = can_ride;
}

var instance = new SoundMaker("bark bark ");
function make_sound(){

  document.getElementById("new_this").innerHTML += instance.sound;

}

function SoundMaker(sound){
this.sound=sound;
}

//doesnt work, new is a reserved word
// var new="red <br><br>";
// document.write(new);

function nested(){
  // document.write("nested activated");
  function eat(){
    return "and I eat ";
  }
document.getElementById("nest").innerHTML+=eat();

}

// class Vehicle {

// var make,model,year,color;

function Vehicle(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;

}

//}

var jack = new Vehicle("doge","viper",2022,"green");

function funky(){
  document.getElementById("driver").innerHTML=
  "jack drives a " + jack.year +" "+ jack.color +" "+ jack.make +" "+ jack.model;
}

// END code related to vehicle class demo