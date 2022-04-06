function toggleMenu(){
    //variable declaration
    let menu = document.querySelector("#header-nav .menu-links");

    //toggle on and off show-mobile-menu
    // if show-mobile-menu exists remove it , if it doesn't exist add it
    menu.classList.toggle("show-mobile-menu");
}

// variable declarartion
let slideIndex = 1;
showSlides(slideIndex);

//fucntion to show next slide
function nextSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    //setTimeout(showSlides, 4000);
}
