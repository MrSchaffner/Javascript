var message;

message = "hello";
strLength = message.length;

function whileLoop() {
  var i = 0;
  var messageSplit = "";
  while (i < strLength) {
    if (message.charAt(i) == "o") {
      messageSplit += "--- breaking cause I don't like Os"
      break
    };
    messageSplit += message.charAt(i) + "<br>";

    i++;

  }
  document.getElementById("displayer").innerHTML = messageSplit;
}



function forLoop() {
  var messageSplit = "";
  for (let i = 0; i < strLength; i++) {
    if (message.charAt(i) == "l") {
      messageSplit += "--- continuing cause I don't like Ls<br>";
      continue;
    };
    messageSplit += message.charAt(i) + "<br>";
  }
  document.getElementById("displayer2").innerHTML = messageSplit;
}

function array() {
  var myArray = ["h<br>", "e", "l", "l", "o"];
  document.getElementById("displayer3").innerHTML = myArray;
}

function constant() {
  const fish = {
    fins: true,
    color: "blue",
    size: 2,
  }

  {
    let fAge = 20;
    var fAge2 = 15;
  }
  fish.age = fAge2;

  fish.color = "red"; //changed attribute
  //fish = "pink"; you can change a value but not the data type.
  // fish.age=10; //added attribute

  document.getElementById("displayer4").innerHTML = fish.age;
  document.getElementById("constantDiv").style = "background-color:" + myColor();
}

function myColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function let() {
  let monk = {
    bald: true,
    weight: 100,
    vowOfSilence: false,
    describeSelfs: describeSelf()
  };

  document.getElementById("displayer5").innerHTML = monk.describeSelfs;

}

// could not get this function to work when contained in object code
// as shown here: https://www.dofactory.com/javascript/function-objects#:~:text=In%20JavaScript%2C%20functions%20are%20called,as%20arguments%20to%20other%20functions.
function describeSelf() {
  if (!this.vowOfSilence) {
    return "I am " + ((this.bald == true) ? "bald" : "not bald");
  } else { return "silence"; }
}
