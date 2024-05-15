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


// ---product search function----


var productsearch =document.getElementById("product-search")
var container =document.getElementById("product-container");
var products =container.querySelectorAll("div")


productsearch.addEventListener("keyup",function(){
    var entervalue =event.target.value.toUpperCase();
    for(i=0;i<products.length;i++){
       var productname=products[i].querySelector("h2").textContent
       if(productname.toUpperCase().indexOf(entervalue)<0){
                products[i].style.display="none"
       }
       else{
        products[i].style.display="block"
       }
    }
})


// ----product filtering-----

document.addEventListener("DOMContentLoaded", function() {
const checkboxes =document.querySelectorAll('input[type="checkbox"]');
const products =document.querySelectorAll(".product");


checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
            filteringProducts();
        });
});

function filteringProducts(){
  var checkedCheckbox =document.querySelectorAll('input[type="checkbox"]:checked');
  var tags =Array.from(checkedCheckbox).map(function (checkbox) {
      return checkbox.value;
  })
    products.forEach(function(product){
        var productTags =product.getAttribute('data-tags').split(' ');
        // console.log(productTags) 

        if(tags.some(tag=>productTags.includes(tag))  || tags.length ===0){
            product.style.display ='block';
        }else{
            product.style.display ='none';
        }
    })

}
})