const logo = document.querySelector(".logo");
const navbar = document.querySelector(".navbar");
const darkmode = document.querySelector(".darkmode");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
var underline = document.querySelector(".footer");

const socialB = document.querySelector(".socials-black");
const socialW = document.querySelector(".socials-white");

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

const brown = document.querySelector(".brown");
const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const profile = document.querySelector(".profile");
const front = document.querySelector(".front");

if (sessionStorage.getItem("dark") === "true") {
  document.body.classList.add("dark");
  darkmode.classList.add("light");
  navbar.classList.add("dark");
  sun.style.display = "block";
  moon.style.display = "none";
}

brown.addEventListener("click", (e) => {
  brown.style.border = "2px solid";
  red.style.border = "none";
  blue.style.border = "none";
  profile.src = "assets/images/hästtäcke/Brown_Profile_720x512.png";
  front.src = "assets/images/hästtäcke/Brown_Front_720x512.png";
});

blue.addEventListener("click", (e) => {
  blue.style.border = "2px solid ";
  brown.style.border = "none";
  red.style.border = "none";
  profile.src = "assets/images/hästtäcke/Blue_Profile_720x512.png";
  front.src = "assets/images/hästtäcke/blue_Front_720x512.png";
});

red.addEventListener("click", (e) => {
  red.style.border = "2px solid ";
  blue.style.border = "none";
  brown.style.border = "none";
  profile.src = "assets/images/hästtäcke/Red_Profile_720x512.png";
  front.src = "assets/images/hästtäcke/Red_Front_720x512.png";
});

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
  window.location = "index.html";
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
    sessionStorage.setItem("dark", "true");
  } else {
    sun.style.display = "none";
    moon.style.display = "block";
    sessionStorage.setItem("dark", "false");
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

const openMenuMobile = document.querySelector(".menu-mobile");
const closeMenuMobile = document.querySelector(".down-menu-mobile");
const openMenuDesktop = document.querySelector(".menu-desktop");
const closeMenuDesktop = document.querySelector(".down-menu-desktop");
const menuIconsMobile = document.querySelector(".menu-icons-mobile");
const menuIconsDesktop = document.querySelector(".menu-icons-desktop");
const dropdownContent = document.querySelector(".dropdown-menu");

const expand = document.querySelector(".expand");
const hide = document.querySelector(".hide");
const menuItem = document.querySelector(".menu-item");
const products = document.querySelector(".menu-products");

const expandtwo = document.querySelector(".expand-two");
const hidetwo = document.querySelector(".hide-two");
const menuItemtwo = document.querySelector(".menu-item-two");
const productstwo = document.querySelector(".menu-products-two");

const expandthree = document.querySelector(".expand-three");
const hidethree = document.querySelector(".hide-three");
const menuItemthree = document.querySelector(".menu-item-three");
const productsthree = document.querySelector(".menu-products-three");

const expandfour = document.querySelector(".expand-four");
const hidefour = document.querySelector(".hide-four");
const menuItemfour = document.querySelector(".menu-item-four");
const productsfour = document.querySelector(".menu-products-four");

/* DROPDOWN MENU */
dropdownContent.style.display = "none";
closeMenuMobile.style.display = "none";
closeMenuDesktop.style.display = "none";

menuIconsMobile.addEventListener("click", function (e) {
  if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "flex";
    closeMenuMobile.style.display = "block";
    openMenuMobile.style.display = "none";
  } else {
    dropdownContent.style.display = "none";
    closeMenuMobile.style.display = "none";
    openMenuMobile.style.display = "block";
  }
});

menuIconsDesktop.addEventListener("click", function (e) {
  if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "flex";
    closeMenuDesktop.style.display = "block";
    openMenuDesktop.style.display = "none";
  } else {
    dropdownContent.style.display = "none";
    closeMenuDesktop.style.display = "none";
    openMenuDesktop.style.display = "block";
  }
});

/*DROPDOWN MENU ITEMS */
expand.style.display = "block";
hide.style.display = "none";

menuItem.addEventListener("click", (e) => {
  if (expand.style.display === "block") {
    expand.style.display = "none";
    hide.style.display = "block";
    products.style.display = "block";
  } else {
    expand.style.display = "block";
    hide.style.display = "none";
    products.style.display = "none";
  }
});

expandtwo.style.display = "block";
hidetwo.style.display = "none";

menuItemtwo.addEventListener("click", (e) => {
  if (expandtwo.style.display === "block") {
    expandtwo.style.display = "none";
    hidetwo.style.display = "block";
    productstwo.style.display = "block";
  } else {
    expandtwo.style.display = "block";
    hidetwo.style.display = "none";
    productstwo.style.display = "none";
  }
});

expandthree.style.display = "block";
hidethree.style.display = "none";

menuItemthree.addEventListener("click", (e) => {
  if (expandthree.style.display === "block") {
    expandthree.style.display = "none";
    hidethree.style.display = "block";
    productsthree.style.display = "block";
  } else {
    expandthree.style.display = "block";
    hidethree.style.display = "none";
    productsthree.style.display = "none";
  }
});

expandfour.style.display = "block";
hidefour.style.display = "none";

menuItemfour.addEventListener("click", (e) => {
  if (expandfour.style.display === "block") {
    expandfour.style.display = "none";
    hidefour.style.display = "block";
    productsfour.style.display = "block";
  } else {
    expandfour.style.display = "block";
    hidefour.style.display = "none";
    productsfour.style.display = "none";
  }
});
