var global_delay_time = 1000;


function countdown() {
  var seconds =
    document.getElementById("seconds").value;

  function tick() {
    displayer.innerHTML = seconds;
    seconds--;
    var delay = setTimeout(tick, global_delay_time);

    if (seconds < 0) {
      alert("timeup");
      clearTimeout(delay);
      displayer.innerHTML = "Timer Done"
    }
  }

  tick();
}

//slideshow functions
var slideIndex = 1;
//supposed to start first slide
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  debugger;
  debug("SHow slides. slideIndex=" + slideIndex);
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

 // alert("showslides pt2 slides.length = " + slides.length);
  //I condensed the code a bit here -sjs
  for (i = 0; i < slides.length; i++) {
   debug("runninmg for loop. i= " + i.toString());
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }

  //slideIndex must be reduced by 1 because they are zero indexed.
  //these lines dont execute the first time - images are not loaded yet?:-------------------------
  dots[slideIndex - 1].className += " active";
  slides[slideIndex - 1].style.display = "block";


}

function debug(message){

console.log(message);
//alert(message);
}