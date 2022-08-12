let activePlayer = 'X';
let selectedSquares = [];
var difficulty = "easy";
function place(squareNumber) {
    console.log('placing');
    //checks if Selectedsquare array contains square just clicked. Alternatively, I could just make them unclickable.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let selected = document.getElementById(squareNumber);
        if (activePlayer === 'X') { selected.style.backgroundImage = 'url("res/egg2.png")' }
        else { selected.style.backgroundImage = 'url("res/bacon2.png")' }

        //concatenate info and add to array --- seems like it would have been better to just create a 9 length array and add info to index.
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();

        if (activePlayer === 'X') {
            activePlayer = 'O';
            //sounds
            audio('./res/crack.wav');
        } else {
            activePlayer = 'X'
            //sounds
            audio('./res/sizzle.m4a');
        }


        if (activePlayer === 'O') {
            //disables clicking for AI turn
            enableClicking(false); //should be brief
            setTimeout(function () { computersTurn(); }, 1000);//wait 1 
            enableClicking(true);
        }
        return true; //if an X was placed.
    }
}

function computersTurn() {
    if (difficulty == "easy") {
        let placed = false;
        let pickASquare;
        while (!placed) {
            //picks number 0-8
            pickASquare = String(Math.floor(Math.random() * 9));
            if (place(pickASquare)) {
                place(pickASquare); //seems redundant. Maybe you can remove this entirely.
                placed = true;
            }
        }

    }
}

function checkWinConditions() {
    console.log("checking for win");
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }

    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }

    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }

    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }

    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }

    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }

    else if (selectedSquares.length >= 9) {
        audio('./media/wood.wav');
        //set timer before reset game
        setTimeout(function () { resetGame(); }, 1000);
    }

}

function arrayIncludes(a, b, c) {

    console.log("array includes function");
    if (selectedSquares.includes(a) && selectedSquares.includes(b) && selectedSquares.includes(c)) { return true; }
}

function audio(myURL) {
    console.log("audio function");
    let audio = new Audio(myURL);
    audio.play();
}

//i modified this so it only disable while computer is playing.
function enableClicking(tf) {
    console.log("click disabler function");
    if (!tf) {
        body.style.pointerEvents = 'none';
    }
    else { body.style.pointerEvents = 'auto' }
}



function drawWinLine(startX, startY, endX, endY) {
    console.log('drawWInLine()');
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    //let x1 = startX;
    // y1 = startY;
    let currentX = startX; //updateable coords
    let currentY = startY;
    //x2 = endX;
    // y2 = endY;

    //inside of drawWinLine still
    function animateLineDrawing() {
        const animLoop = requestAnimationFrame(animateLineDrawing);

        c.clearRect(0, 0, 608, 608)
        c.beginPath();
        c.moveTo(startX, startY) //redraws lines from initial point TO:
        c.lineTo(currentX, currentY); //initially same as x1, y1
        c.lineWidth = 10;

        c.strokeStyle = 'rgba(70,70,70,.5)'; //just a color
        c.stroke();

        if (startX <= endX || startY <= endY) { //if not at endpoint - 
            if (currentX < endX) { currentX += 10; }
            // adding line for the ONE winLine that has an endY less than startY - diagonal from bottom left:
            if (startY > endY) {
                if (currentY > endY) { currentY -= 10; }
            } else {
                if (currentY < endY) { currentY += 10; }
            }
            if (currentX >= endX && currentY >= endY) { cancelAnimationFrame(animLoop); }
        }


    }


    //inside of drawWinLine still
    function clear() {
        const animLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animLoop);
    }

    enableClicking(false)
    audio('res/mmm.wav');
    animateLineDrawing(); // THis actually starts the above function to run in background
    setTimeout(function () { clear(); resetGame(); }, 1000); //This clears animations whether it is done or not.
    enableClicking(true);

}

function resetGame() {
    console.log('resetGame()');
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i)) //goes through and gets squares and clears them
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
    //activePlayer='X'; //should allow active player to be loser.
}


//EXAMPLE FUNCTIONS
//arrow function example
var funky;
funky = (value) => "This is the funky value: " + value;




//---------------------------------------------------
function clicko() { //click() is reserved!
    document.getElementById("sideProject").innerHTML += funky("yo momma") + "<BR>";
    document.getElementById("sideProject").innerHTML += numArray.some(checkage) + "<BR>";

}

var numArray = [1, 2, 3, 5, 6];
checkage = (age) => (age >= 3); //should return true when age is 3
