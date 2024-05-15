// sidenav bar function

var menuicon =document.getElementById("menuicon");
var sidenav =document.getElementById("side-nav");
var closenav =document.getElementById("close-nav");

menuicon.addEventListener("click",function(){
    sidenav.style.left=0
})

closenav.addEventListener("click",function(){
    sidenav.style.left="-50%";
})

// --offer bar function---

var offerbar =document.getElementById("offer-bar");
var offerclose =document.getElementById("offer-close")

offerclose.addEventListener("click",function(){
    offerbar.style.display="none";
})


// ----blackhear to redheart function ---/

var blackheart = document.querySelectorAll(".like-button");

blackheart.forEach(function(bh){

 bh.addEventListener("click",function(event)
 {
     if(event.target.src.indexOf("blackheart")>0)
     {
       event.target.src="./icon/redheart.png"
     }
     else
     {
      event.target.src="./icon/blackheart.png"
     }
 })
   
})


// ----scroll on animate-----

window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll(".animate-all");
  var windowHeight = window.innerHeight;

  elements.forEach(function(el){
      var position =el.getBoundingClientRect();
  if(position.top<windowHeight){
         el.classList.add("opacity-100");

  }
})
})

// ----image slide function-------

document.addEventListener("DOMContentLoaded", function() {
  const sliderImages = document.querySelectorAll('.slider-image');
  const leftButton = document.getElementById('slider-left-button');
  const rightButton = document.getElementById('slider-right-button');
  let currentIndex = 0;

  leftButton.addEventListener('click', function() {
      goToSlide(currentIndex - 1);
  });

  rightButton.addEventListener('click', function() {
      goToSlide(currentIndex + 1);
  });

  function goToSlide(index) {
      const totalSlides = sliderImages.length;
      if (index < 0) {
          index = totalSlides - 1;
      } else if (index >= totalSlides) {
          index = 0;
      }
      
      sliderImages[currentIndex].classList.add('hidden');
      sliderImages[index].classList.remove('hidden');
      currentIndex = index;
  }
});