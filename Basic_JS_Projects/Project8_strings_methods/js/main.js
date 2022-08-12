
function concatenate() {
  var part1 = "The start leads to ";
  var part2 = "the end of all.";
  var combined = part1.concat(part2.toUpperCase());
  document.getElementById("displayer").innerHTML = combined;
}

function search(){
  var pText = document.getElementById("displayer").innerHTML;
  var position = pText.search("lead");
  var searchResults;
  if (position >0){
    searchResults = "term found at " + position;
  } else {
    searchResults = "not found";
  }
  document.getElementById("displayer3").innerHTML = searchResults
}

//uses toString() - totally unnecessarily
function splices() {
  var num = 0123456789
  var fullPhrase =num.toString();
  var a = fullPhrase.slice(2, 8);
  var b = fullPhrase.slice(-7, -2);
  var c = fullPhrase.slice(2);

  var d =
    a + " " +
    b + " " +
    c + " ";
  document.getElementById("displayer2").innerHTML = d;
}

//used valueOf()
function precision(){
  var x = 1234.56789;
  document.getElementById("displayer2").innerHTML = x.valueOf().toPrecision(4);
 }
 
 function fixed(){
  var x = 1234.56789;
  document.getElementById("displayer2").innerHTML = x.toFixed(4);
 }
 
  