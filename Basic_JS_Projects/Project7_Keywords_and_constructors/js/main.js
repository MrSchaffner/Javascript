
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


function check_age() {
  var age, can_ride;
  age = document.getElementById("Age").value;
  can_ride = (age >= 18) ? "You can vote" : "You're still a child";
  document.getElementById("voter text").innerHTML = can_ride;
}