
function switcher() {
  colors = document.getElementById("colorizer").value;
  switch (colors) {
    case "red":
      break;
    case "green":
      break;
    case "blue":
      break;
    default:
      colors = "pink";
  }

  document.getElementById("switchDiv").style = "background-color:" + colors;
  changeClasses();
}

function validateForm(){
  let x=document.forms["nameForm"]["fname"].value;
  let y=document.forms["nameForm"]["lname"].value;
  if(x=="" || x=="First Name" || y=="" || y=="Last Name"){
    alert("Name must be filled out")
    return false;
  }
}

function clearOnFocus(){

}

function changeClasses() {
  document.getElementsByClassName("paragraphs")[1].innerHTML = "second element";
}

//necessary regardless
var c=document.getElementById("canvas");
var ctx=c.getContext("2d");

//gradient
var grd = ctx.createLinearGradient(150,-150,350,350);
grd.addColorStop(0, "black");
grd.addColorStop(.5,"white");
grd.addColorStop(1, "black");
//rectangle
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 200);
//line
ctx.beginPath(); //may be superfluous
ctx.moveTo(0,0);
ctx.lineTo(200,100);
//circle
ctx.arc(100,0,40,0,2*Math.PI,false);
//draw strokes
ctx.stroke();