var message;


function doSomething() {
 
  var hours = new Date().getHours();
  if (hours < 12) {
    message = "its morning";
// strange usage of == that i've never seen before.
  } else if (hours >= 12 == hours <18) {
    message = "its afternoon";
  } else if(hours >= 18 == hours < 23){
    message = "its night";
  } else {
    message = "no idea";
  }
  document.getElementById("displayer").innerHTML = message;

}

//this works exactly the same, but uses && instead of ==
function doSomething_v2() {
  var message;
  var hours = new Date().getHours();
  if (hours < 12) {
    message = "its morning";
  } else if (hours >= 12 && hours <18) {
    message = "its afternoon";
  } else if(hours >= 18 && hours < 23){
    message = "its night";
  } else {
    message = "no idea";
  }
  document.getElementById("displayer").innerHTML = message;

}