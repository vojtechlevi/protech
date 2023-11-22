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

const iconbox = document.querySelector(".iconbox");
const plus = document.querySelector(".plus");
const down = document.querySelector(".down");
const iconboxtwo = document.querySelector(".iconboxtwo");
const plustwo = document.querySelector(".plustwo");
const downtwo = document.querySelector(".downtwo");
const iconboxthree = document.querySelector(".iconboxthree");
const plusthree = document.querySelector(".plusthree");
const downthree = document.querySelector(".downthree");

const about = document.querySelector(".more-about");
const abouttwo = document.querySelector(".more-about-two");
const aboutthree = document.querySelector(".more-about-three");

down.style.display = "none";
about.style.display = "none";
iconbox.addEventListener("click", (e) => {
  if (about.style.display === "none") {
    down.style.display = "flex";
    about.style.display = "flex";
    plus.style.display = "none";
  } else {
    about.style.display = "none";
    down.style.display = "none";
    plus.style.display = "flex";
  }
});

downtwo.style.display = "none";
abouttwo.style.display = "none";
iconboxtwo.addEventListener("click", (e) => {
  if (abouttwo.style.display === "none") {
    abouttwo.style.display = "flex";
    downtwo.style.display = "flex";
    plustwo.style.display = "none";
  } else {
    abouttwo.style.display = "none";
    downtwo.style.display = "none";
    plustwo.style.display = "flex";
  }
});

downthree.style.display = "none";
aboutthree.style.display = "none";
iconboxthree.addEventListener("click", (e) => {
  if (aboutthree.style.display === "none") {
    aboutthree.style.display = "flex";
    downthree.style.display = "flex";
    plusthree.style.display = "none";
  } else {
    aboutthree.style.display = "none";
    downthree.style.display = "none";
    plusthree.style.display = "flex";
  }
});

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
