const logo = document.querySelector(".logo");
const navbar = document.querySelector(".navbar");
const darkmode = document.querySelector(".darkmode");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
var underline = document.querySelector(".footer");

const socialB = document.querySelector(".socials-black");
const socialW = document.querySelector(".socials-white");
const thermaB = document.querySelector(".therma-black");
const thermaW = document.querySelector(".therma-white");

/* NAVBAR ON SCROLL */
window.onscroll = (e) => {
  e.preventDefault();
  if (window.scrollY > 700) {
    navbar.classList.add("nav-active");
    if (darkmode.classList.contains("light")) {
      navbar.classList.add("dark");
    }
  } else {
    navbar.classList.remove("nav-active");
    navbar.classList.remove("dark");
    navbar.style.color = "black";
  }
};

/* LOGO CLICK */
logo.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(0, 0, (behavior = "smooth"));
});

/* DARKMODE */
sun.style.display = "none";
thermaW.style.display = "none";

darkmode.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("dark");
  darkmode.classList.toggle("light");

  if (navbar.classList.contains("nav-active")) {
    navbar.classList.toggle("dark");
  }
  if (darkmode.classList.contains("light")) {
    sun.style.display = "block";
    moon.style.display = "none";
    thermaB.style.display = "none";
    thermaW.style.display = "flex";
  } else {
    sun.style.display = "none";
    moon.style.display = "block";
    thermaB.style.display = "flex";
    thermaW.style.display = "none";
  }

  if (document.body.classList.contains("dark")) {
    underline.style.setProperty("--check-primary", "#fff");
  }
});

var underline = document.querySelector(".footer");

const emailText = document.querySelector(".email-text");
const emailInput = document.querySelector(".email-input");
const emailBtn = document.querySelector(".email-btn");
const emailWelcome = document.querySelector(".email-welcome");

emailInput.style.display = "none";
emailBtn.style.display = "none";
emailWelcome.style.display = "none";

emailText.addEventListener("click", (e) => {
  e.preventDefault();
  emailText.style.display = "none";
  emailInput.style.display = "block";
  emailBtn.style.display = "block";
  emailInput.focus();
});

emailBtn.addEventListener("click", (e) => {
  e.preventDefault();
  emailInput.style.display = "none";
  emailBtn.style.display = "none";
  emailWelcome.style.display = "block";
});

/* TEST */

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
