console.log("js started");

var yourOrder = "<h3>You Ordered:</h3>";
var runningTotal = 0;
var sizeTotal = 0;
var sizeIsSelected = false;

function getReceipt() {
    console.log('get receipt called');



    getSize();
    if (!sizeIsSelected) {
        alert('please select a size');
        return;
    }
   getTopping();
   getVeggie();
    
    document.getElementById("showText").innerHTML += yourOrder + "<hr>";
    document.getElementById("totalPrice").innerHTML = "<h3>Total Price: $" + runningTotal + ".00" + "</h3>";
    yourOrder = ""; //to add another item if desired.
};

function getSize() {
    var selectedSize = "";
    console.log("getting size");
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            selectedSize = sizeArray[i].value;
            sizeIsSelected = true;
        }
    }

    if (!sizeIsSelected) {
        return;
    }

    console.log('size was sleected');

    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal += sizeTotal; //add to total bill
    yourOrder += "<i> Size: </i>" + selectedSize + " $" + sizeTotal;
    console.log(yourOrder + " so far");
}

function getTopping() {
    alert("get Topping");
    var ToppingTotal = 0;
    var selectedTopping = [];
    var hasTopping = false;
    //checks which are selected
    var ToppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < ToppingArray.length; j++) {
        alert('checking toppings ' + j);
        if (ToppingArray[j].checked) {
            hasTopping = true;
            selectedTopping.push(ToppingArray[j].value);
            yourOrder += "<br>" + ToppingArray[j].value;
        }
    }
    ToppingTotal = hasTopping ? (selectedTopping.length - 1) : 0; //should set cost to length of topping-1 or 0
    alert("TOPPING TOTAL " + ToppingTotal);
    // var ToppingCount = selectedTopping.length;
    // if (ToppingCount > 1) {
    //     ToppingTotal = (ToppingCount - 1);
    // } else {
    //     ToppingTotal = 0;
    // }
    runningTotal += ToppingTotal;
    yourOrder += " <br>" + "<i> Toppings: </i>" + "$" + ToppingTotal + "<br>";
    
    console.log(yourOrder + " so far");
}//END getTOpping()----------------------------


function getVeggie() {
    console.log('getting veggie');
    var veggieTotal = 0;
    var selectedVeggie = [];
    var veggieArray = document.getElementsByClassName("veggies");
    for (var p = 0; p < veggieArray.length; p++) {
        if (veggieArray[p].checked) {
            selectedVeggie.push(veggieArray[p].value);
            yourOrder += "<br>" + veggieArray[p].value;
        }
    }
    
    console.log(yourOrder + " so far");
    var veggieCount = selectedVeggie.length;
    if (veggieCount > 1) {
        veggieTotal = (veggieCount - 1);
    } else {
        veggieTotal = 0;
    }
    runningTotal += veggieTotal;
    yourOrder += " <br>" + "<i> Vegetables: </i>" + "$" + veggieTotal + "<br>";
};

// function cancelOrder() {
// var unCheck= document.getElementsByTagName("input");
// for (var i = 0; i < unCheck.length; i++) {
//     unCheck[i].checked = false 
// }
// document.getElementById("showText").innerHTML = " "; 
// document.getElementById("totalPrice").innerHTML = " ";
// };

