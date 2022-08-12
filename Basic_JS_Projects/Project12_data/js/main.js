function displayType(char){
var charType=char.getAttribute("data-character-type");
var charHTML = char.innerHTML;
alert(charType+" of the "+charHTML+" element");
}