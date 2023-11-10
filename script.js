const logo = document.querySelector(".logo");
const navbar = document.querySelector(".navbar");
const darkmode = document.querySelector(".darkmode");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const socialB = document.querySelector(".socials-black");
const socialW = document.querySelector(".socials-white");
const thermaB = document.querySelector(".therma-black");
const thermaW = document.querySelector(".therma-white");

window.onscroll = (e) => {
  e.preventDefault();
  if (window.scrollY > 500) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};

logo.addEventListener("click", (e) => {
  e.preventDefault();
  location.reload();
  window.scrollTo(0, 0, (behavior = "smooth"));
});

sun.style.display = "none";
thermaW.style.display = "none";

darkmode.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("dark");
  darkmode.classList.toggle("light");
  if (darkmode.classList.contains("light")) {
    sun.style.display = "block";
    moon.style.display = "none";
    socialB.style.display = "none";
    socialW.style.display = "flex";
    thermaB.style.display = "none";
    thermaW.style.display = "flex";
  } else {
    sun.style.display = "none";
    moon.style.display = "block";
    socialW.style.display = "none";
    socialB.style.display = "flex";
    thermaB.style.display = "flex";
    thermaW.style.display = "none";
  }
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
