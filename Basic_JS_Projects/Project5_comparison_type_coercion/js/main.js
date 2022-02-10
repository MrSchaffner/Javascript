
//there is one function for each button.

document.write("The type of 'number' is: " + typeof "number" + "<br><br>")

function whatType(){
  var or = 1;
  document.getElementById("typer").innerHTML= typeof or;


}

function stringType(){
  var or = "hello";
  document.getElementById("typer").innerHTML= typeof or;
}


//squares the number, but it never displays infinity
function squared(){
  var or = parseInt(document.getElementById("Number").innerHTML,10);
  document.getElementById("Number").innerHTML= or * or;
}

function results(){
var por = isNaN(5);
var message =  

"<br>" //NaN operators
+"<br>5+'5': " + (5+"5") 
+"<br>is 5 Nan? " + isNaN(5) 
+ "<br>is red Nan? " + isNaN("red")
+ "<br>0/0 is" +0/0
+ "<br>1E310 is displayed as: " + (1E310)
+ "<br>-1E310 is displayed as: " + (-1E310)
+ "<br>" //boolean type operators
+ "<br>3 is greater than 1,000: " + (3>1000)
+ "<br>3 is exactly equal(===) to 3: " + (3===3)
+ "<br>3 is exactly equal to '4': " + (3==="4")
+ "<br>3 is exactly equal to '3': " + (3==='3')
+ "<br>3 is equal to(==) '3': also " + (3==='3')
+ "<br>3 is exactly equal to 4: " + (3===4)
+ "<br>" //boolean
+ "<br>3>1 && 2>1 " + (3>1 && 2>1)
+ "<br>3>1 && 2<1 " + (3>1 && 2<1)
+ "<br>3>1 || 2>2 " + (3>1 || 2>2)
+ "<br>3<1 || 2<1 " + (3<1 || 2<1)
+ "<br>!3>1 " + (!3>1)
+ "<br>!3<1 " + (!3<1);

document.getElementById("results").innerHTML=message;
console.log(message); //all things displayed also appear in console
console.log(1000000/1000000);
console.log(3>1000);
console.log(3==1000);
console.log(3==3);
}
