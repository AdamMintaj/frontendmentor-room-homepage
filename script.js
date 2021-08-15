// show & hide navbar in mobile version
var headerButton = document.getElementById("headerButton");
var navButton = document.getElementById("navButton");
function showNav() {
    document.querySelector("nav").classList.toggle("nav--active");
}
headerButton.addEventListener("click", showNav);
navButton.addEventListener("click", showNav);
// make the slides move
// buttons
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
// the width of the viewbox, the container holding all the slides, and variables holding number of slides displayed in mobile and desktop version
var viewboxSize = document.getElementById("viewbox").clientWidth;
var slides = document.querySelector(".slideshow__slides");
var carouselImagesMobile = document.querySelectorAll(".slideshow__slide--mobile");
var carouselImagesDesktop = document.querySelectorAll(".slideshow__slide--desktop");
//counter
var counter = 1;
slides.style.transform = "translateX(" + -viewboxSize * counter + "px)";
// display the next/prev slide
function nextSlide() {
    if (counter >= 4) {
        return;
    }
    counter++;
    slides.style.transition = "0.7s";
    slides.style.transform = "translateX(" + -viewboxSize * counter + "px)";
}
function prevSlide() {
    if (counter <= 0) {
        return;
    }
    counter--;
    slides.style.transition = "0.7s";
    slides.style.transform = "translateX(" + -viewboxSize * counter + "px";
}
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
// reset the slider when the first/last slide is displayed
slides.addEventListener("transitionend", function () {
    if (carouselImagesMobile[counter].id === "lastCopy--mobile" || carouselImagesDesktop[counter].id === "lastCopy--desktop") {
        slides.style.transition = "0s";
        counter = counter + 3;
        slides.style.transform = "translateX(" + -viewboxSize * counter + "px";
    }
    if (carouselImagesMobile[counter].id === "firstCopy--mobile" || carouselImagesDesktop[counter].id === "firstCopy--desktop") {
        slides.style.transition = "0s";
        counter = counter - 3;
        slides.style.transform = "translateX(" + -viewboxSize * counter + "px";
    }
});
window.addEventListener("orientationchange", function () {
    alert(window.location.reload());
});
