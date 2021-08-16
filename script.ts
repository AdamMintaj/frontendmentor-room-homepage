// show & hide navbar in mobile version
const headerButton = document.getElementById("headerButton")!;
const navButton = document.getElementById("navButton")!;

function showNav() {
    document.querySelector("nav")!.classList.toggle("nav--active");
}

headerButton.addEventListener("click", showNav);
navButton.addEventListener("click", showNav);

// make the slides move

    // buttons
const prevBtn = document.getElementById("prev")!;
const nextBtn = document.getElementById("next")!;

    // the width of the viewbox, the container holding all the slides, and variables holding number of slides displayed in mobile and desktop version
let viewboxSize: number = document.getElementById("viewbox")!.clientWidth;
const slides: HTMLElement = document.querySelector(".slideshow__slides")!;
const carouselImagesMobile = document.querySelectorAll(".slideshow__slide--mobile");
const carouselImagesDesktop = document.querySelectorAll(".slideshow__slide--desktop");
    
    //counter
let counter: number = 1; 


slides.style.transform = "translateX("+ -viewboxSize * counter +"px)";

    // display the next/prev slide
function nextSlide () {
    if (counter >= 4) {
        return;
    }
    counter++;
    slides.style.transition = "0.7s";
    slides.style.transform = "translateX(" + -viewboxSize * counter + "px)";
}

function prevSlide () {
    if (counter <= 0) {
        return;
    }
    counter--;
    slides.style.transition = "0.7s";
    slides.style.transform ="translateX(" + -viewboxSize * counter + "px";
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

    // reset the slider when the first/last slide is displayed
slides.addEventListener("transitionend", ()=> {
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

// reload the page when the orientation changes
window.addEventListener("orientationchange", ()=> {
    window.location.reload();
});