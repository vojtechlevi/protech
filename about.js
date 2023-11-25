const logo = document.querySelector(".logo");
const navbar = document.querySelector(".navbar");
const darkmode = document.querySelector(".darkmode");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const navActive = document.querySelector(".nav-active");

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

if (sessionStorage.getItem("dark") === "true") {
  document.body.classList.add("dark");
  darkmode.classList.add("light");
  navbar.classList.add("dark");
  sun.style.display = "block";
  moon.style.display = "none";
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
