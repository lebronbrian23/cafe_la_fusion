function toggleMenu(){
    //variable declaration
    let menu = document.querySelector("#header-nav .menu-links");

    //toggle on and off show-mobile-menu
    // if show-mobile-menu exists remove it , if it doesn't exist add it
    menu.classList.toggle("show-mobile-menu");
}

// variable declaration
let navbar = document.getElementById('header');
let book_table_btn = document.getElementById('book-table');
let slideIndex = 1;
let slides = document.getElementsByClassName("slides");

showSlides(slideIndex);

//function to show next slide
function nextSlide(n) {
    showNextSlides(slideIndex += n);
}

function currentSlide(number) {
    showSlides(slideIndex = number);
}

//function that changes the hero banner automatically
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

    setTimeout(showSlides, 20000);

    styleBackground(slideIndex);
}

//function that changes the hero banner on click
function showNextSlides(number) {
    let i;
    if (number > slides.length) {
        slideIndex = 1
    }
    if (number < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

    styleBackground(slideIndex);

}

//fucntion to style the backgroud color and font color
function styleBackground(slideIndex){

    if(slideIndex === 1) {
        navbar.style.background = '#FF674E'
        book_table_btn.classList.remove("book-table-styles-2");
        book_table_btn.classList.remove("book-table-styles-3");
    }
    if(slideIndex === 2) {
        navbar.style.background = '#FDBA2A'
        book_table_btn.classList.add("book-table-styles-2");
        book_table_btn.classList.remove("book-table-styles-3");
    }
    if(slideIndex === 3) {
        navbar.style.background = '#C373A3'
        book_table_btn.classList.add("book-table-styles-3");
        book_table_btn.classList.remove("book-table-styles-2");

    }

}


