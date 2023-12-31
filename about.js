const logo = document.querySelector(".logo");
const navbar = document.querySelector(".navbar");
const darkmode = document.querySelector(".darkmode");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const footerWrapper = document.querySelector(".footer-wrapper-desktop");
var footer = document.querySelector(".footer-desktop");

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

/* NAVBAR ON SCROLL */
window.onscroll = (e) => {
  e.preventDefault();
  if (window.scrollY > 30) {
    navbar.classList.add("nav-active");
    if (darkmode.classList.contains("light")) {
      navbar.classList.add("dark");
    }
  } else {
    navbar.classList.remove("nav-active");
    navbar.classList.remove("dark");
  }
};

/* if (window.outerWidth > 740) {
  navbar.classList.add("nav-active");
}*/

/* SEARCHBAR */

/* DARKMODE */
sun.style.display = "none";

darkmode.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("dark");
  dropdownContent.classList.toggle("dark");

  darkmode.classList.toggle("light");

  if (navbar.classList.contains("nav-active")) {
    navbar.classList.toggle("dark");
  }
  if (darkmode.classList.contains("light")) {
    sun.style.display = "block";
    moon.style.display = "none";
    footerWrapper.classList.add("semidark");
    sessionStorage.setItem("dark", "true");
  } else {
    sun.style.display = "none";
    moon.style.display = "block";
    sessionStorage.setItem("dark", "false");
    footerWrapper.classList.remove("semidark");
  }

  if (darkmode.classList.contains("light")) {
    navbar.style.color = "white";
  } else {
    navbar.style.color = "black";
  }
  if (document.body.classList.contains("dark")) {
    footer.style.setProperty("--check-primary", "white");
    document.querySelector(".input-mobile").style.borderBottomColor = "white";
    document.querySelector(".input-desktop").style.textColor = "white";
  } else {
    footer.style.setProperty("--check-primary", "black");
    document.querySelector(".input-mobile").style.borderBottomColor = "black";
    document.querySelector(".input-desktop").style.borderBottomColor = "black";
  }
});

if (sessionStorage.getItem("dark") === "true") {
  document.body.classList.add("dark");
  dropdownContent.classList.toggle("dark");
  footerWrapper.classList.add("semidark");
  darkmode.classList.add("light");
  /*navbar.classList.add("dark");*/
  sun.style.display = "block";
  moon.style.display = "none";
  if (document.body.classList.contains("dark")) {
    footer.style.setProperty("--check-primary", "white");
    document.querySelector(".input-mobile").style.borderBottomColor = "white";
  } else {
    footer.style.setProperty("--check-primary", "black");
    document.querySelector(".input-mobile").style.borderBottomColor = "black";
  }
}

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

openMenuDesktop.addEventListener("click", function (e) {
  if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "flex";
    closeMenuDesktop.style.display = "block";
    openMenuDesktop.style.display = "none";
  }
});

closeMenuDesktop.addEventListener("click", (e) => {
  if (dropdownContent.style.display === "flex") {
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
  if (document.body.classList.contains("dark")) {
    footer.style.setProperty("--check-primary", "white");
  } else {
    footer.style.setProperty("--check-primary", "black");
  }
});

/* LANGUAGE */
const languageIcon = document.querySelector(".language-icon-mobile");

document.querySelector(".sv").style.display = "block";
document.querySelector(".no").style.display = "none";
document.querySelector(".en").style.display = "none";

languageIcon.addEventListener("click", (e) => {
  document.querySelector(".sv").style.display = "block";
  document.querySelector(".no").style.display = "block";
  document.querySelector(".en").style.display = "block";
});

document.querySelector(".sv").addEventListener("click", (e) => {
  document.querySelector(".sv").style.display = "block";
  document.querySelector(".no").style.display = "none";
  document.querySelector(".en").style.display = "none";
});

document.querySelector(".en").addEventListener("click", (e) => {
  document.querySelector(".sv").style.display = "none";
  document.querySelector(".no").style.display = "none";
  document.querySelector(".en").style.display = "block";
});
document.querySelector(".no").addEventListener("click", (e) => {
  document.querySelector(".sv").style.display = "none";
  document.querySelector(".no").style.display = "block";
  document.querySelector(".en").style.display = "none";
});

const languageIconDesktop = document.querySelector(".language-icon-desktop");

document.querySelector(".languages-desktop").style.display = "none";

languageIconDesktop.addEventListener("click", (e) => {
  if (document.querySelector(".languages-desktop").style.display === "none") {
    document.querySelector(".languages-desktop").style.display = "flex";
  } else {
    document.querySelector(".languages-desktop").style.display = "none";
  }
});

document.querySelector(".languages-desktop").addEventListener("click", (e) => {
  document.querySelector(".languages-desktop").style.display = "none";
});
