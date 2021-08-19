// slider

    // buttons
const prevBtn = document.getElementById("prev")!;
const nextBtn = document.getElementById("next")!;

    //width of the viewboxes, containers holding the slides and articles, and variables holding number of slides and articles
let slidesViewboxSize: number = document.getElementById("slidesViewbox")!.clientWidth;
let articlesViewboxSize: number = document.getElementById("articlesViewbox")!.clientWidth;

const slides: HTMLElement = document.querySelector(".slideshow__slides")!;
const articles: HTMLElement = document.querySelector(".slideshow__articles")!;

const carouselImagesMobile = document.querySelectorAll(".slideshow__slide--mobile");
const carouselImagesDesktop = document.querySelectorAll(".slideshow__slide--desktop");
const carouselArticles = document.querySelectorAll(".slideshow__article");
    
    //counter
let counter: number = 1; 

    //set the first image and article as an actual first (not the copy of the last)
slides.style.transform = "translateX("+ -slidesViewboxSize * counter +"px)";
articles.style.transform = "translateX("+ -articlesViewboxSize * counter +"px)";

    // display the next/prev slide and article
function nextSlide () {
    if (counter >= 4) {
        return;
    }
    counter++;
    slides.style.transition = "0.7s";
    articles.style.transition = "0.7s";
    slides.style.transform = "translateX(" + -slidesViewboxSize * counter + "px)";
    articles.style.transform = "translateX(" + -articlesViewboxSize * counter + "px)";
}

function prevSlide () {
    if (counter <= 0) {
        return;
    }
    counter--;
    slides.style.transition = "0.7s";
    articles.style.transition = "0.7s";
    slides.style.transform ="translateX(" + -slidesViewboxSize * counter + "px";
    articles.style.transform ="translateX(" + -articlesViewboxSize * counter + "px";
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

    // reset the slider when the first/last slide or article is displayed
slides.addEventListener("transitionend", ()=> {
    if (carouselImagesMobile[counter].id === "slideLastCopy--mobile" || carouselImagesDesktop[counter].id === "slideLastCopy--desktop") {
        slides.style.transition = "0s";
        articles.style.transition = "0s";
        counter = counter + 3;
        slides.style.transform = "translateX(" + -slidesViewboxSize * counter + "px";
        articles.style.transform = "translateX(" + -articlesViewboxSize * counter + "px";
    }
    
    if (carouselImagesMobile[counter].id === "slideFirstCopy--mobile" || carouselImagesDesktop[counter].id === "slideFirstCopy--desktop") {
        slides.style.transition = "0s";
        articles.style.transition = "0s";
        counter = counter - 3;
        slides.style.transform = "translateX(" + -slidesViewboxSize * counter + "px";
        articles.style.transform = "translateX(" + -articlesViewboxSize * counter + "px";
    }
});

// show & hide navbar in mobile version
const headerButton = document.getElementById("headerButton")!;
const navButton = document.getElementById("navButton")!;
const nav = document.querySelector("nav")!;

function showNav() {
    nav.classList.toggle("nav--active");
    
    // disable slider buttons when the navbar is visible
    if (nav.classList.contains("nav--active")) {
        prevBtn.style.pointerEvents = "none";
        nextBtn.style.pointerEvents = "none";
    }
    else {
        prevBtn.style.pointerEvents = "auto";
        nextBtn.style.pointerEvents = "auto";
    }
}

headerButton.addEventListener("click", showNav);
navButton.addEventListener("click", showNav);

// reload the page when the orientation changes
// window.addEventListener("orientationchange", ()=> {
//     window.location.reload();
// });

// window.addEventListener("resize", ()=> {
//     window.location.reload();
//     console.log("resize");
// });