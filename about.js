const logo = document.querySelector(".logo");
const navbar = document.querySelector(".navbar");
const darkmode = document.querySelector(".darkmode");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const navActive = document.querySelector(".nav-active");

/* NAVBAR ON SCROLL */
window.onscroll = (e) => {
  e.preventDefault();
  if (window.scrollY > 300) {
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
  location.reload();
  window.scrollTo(0, 0, (behavior = "smooth"));
});

/* DARKMODE */
sun.style.display = "none";

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
  } else {
    sun.style.display = "none";
    moon.style.display = "block";
  }
});
