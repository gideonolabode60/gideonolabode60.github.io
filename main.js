// Animated Hero Text

const words = [
    "We Build Brands",
    "We Create Experiences",
    "We Inspire Growth",
    "We Help Businesses Evolve"
];

let index = 0;

function changeText() {
    const element = document.getElementById("hero-text");

    if (!element) return;

    element.style.opacity = 0;

    setTimeout(() => {
        element.textContent = words[index];
        element.style.opacity = 1;

        index++;

        if (index >= words.length) {
            index = 0;
        }

    }, 300);
}

setInterval(changeText, 3000);
// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
