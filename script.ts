const headerButton = document.getElementById("headerButton")!;
const navButton = document.getElementById("navButton")!;

function showNav() {
    document.querySelector("nav")?.classList.toggle("nav--active");
}

headerButton.addEventListener("click", showNav);
navButton.addEventListener("click", showNav);