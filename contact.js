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