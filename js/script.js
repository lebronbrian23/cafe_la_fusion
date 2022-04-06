function toggleMenu(){
    //variable declaration
    let menu = document.querySelector("#header-nav .menu-links");

    //toggle on and off show-mobile-menu
    // if show-mobile-menu exists remove it , if it doesn't exist add it
    menu.classList.toggle("show-mobile-menu");
}

// variable declaration
let navbar = document.getElementById('header');
let slideIndex = 1;
let slides = document.getElementsByClassName("slides");

showSlides(slideIndex);

//function to show next slide
function nextSlide(n) {
    showNextSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 10000);

    if(slideIndex === 1)
        navbar.style.background = '#FF674E'
    if(slideIndex === 2)
        navbar.style.background = '#FDBA2A'
    if(slideIndex === 3)
        navbar.style.background = '#C373A3'
}

function showNextSlides(n) {
    let i;
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";

    if(slideIndex === 1)
        navbar.style.background = '#FF674E'
    if(slideIndex === 2)
        navbar.style.background = '#FDBA2A'
    if(slideIndex === 3)
        navbar.style.background = '#C373A3'

}
