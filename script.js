"use strict";
const headerButton = document.getElementById("headerButton");
const navButton = document.getElementById("navButton");
function showNav() {
    var _a;
    (_a = document.querySelector("nav")) === null || _a === void 0 ? void 0 : _a.classList.toggle("nav--active");
}
headerButton.addEventListener("click", showNav);
navButton.addEventListener("click", showNav);
