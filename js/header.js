let navIcon = document.getElementById("nav-icon");
let close = document.querySelector(".close");
let nav = document.getElementById("nav")

navIcon.addEventListener("click",function(){
    nav.style.display = "block";
})
close.addEventListener("click",function(){
    nav.style.display = "none";
})