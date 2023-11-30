const logo = document.querySelector(".logo");
const navbar = document.querySelector(".navbar");
const darkmode = document.querySelector(".darkmode");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
var footer = document.querySelector(".footer-desktop");

//NAVBAR DROPDOWN
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

//FOOTER
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

//CONTACT
const contact = document.querySelector(".contact-wrapper");

/* NAVBAR ON SCROLL */
window.onscroll = (e) => {
  e.preventDefault();
  if (window.scrollY > 400) {
    navbar.classList.add("nav-active");
    if (darkmode.classList.contains("light")) {
      navbar.classList.add("dark");
    }
  } else {
    navbar.classList.remove("nav-active");
    navbar.classList.remove("dark");
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
  dropdownContent.classList.toggle("dark");
  contact.style.background = "#171A16";
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
    contact.style.background = "#fefefe";
    sessionStorage.setItem("dark", "false");
  }
  if (document.body.classList.contains("dark")) {
    console.log("dark");
    footer.style.setProperty("--check-primary", "white");
    document.querySelector(".input-mobile").style.borderBottomColor = "white";
  } else {
    footer.style.setProperty("--check-primary", "black");
    document.querySelector(".input-mobile").style.borderBottomColor = "black";
  }
});

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

// EMAIL SIGNUP

var underline = document.querySelector(".footer");
const emailText = document.querySelector(".email-text");
const emailInput = document.querySelector(".email-input");
const emailBtn = document.querySelector(".email-btn");
const emailWelcome = document.querySelector(".email-welcome");
const check = document.querySelector(".checkbox");

emailInput.style.display = "none";
emailBtn.style.display = "none";
emailWelcome.style.display = "none";
check.style.display = "none";

emailText.addEventListener("click", (e) => {
  e.preventDefault();
  emailText.style.display = "none";
  emailInput.style.display = "block";
  emailBtn.style.display = "block";
  check.style.display = "block";
  emailInput.focus();
});

emailBtn.addEventListener("click", (e) => {
  e.preventDefault();
  emailInput.style.display = "none";
  emailBtn.style.display = "none";
  check.style.display = "none";
  emailWelcome.style.display = "block";
});

//PRODUCTS
const items = document.querySelectorAll(".item");

items.forEach((item) => {
  const itemId = item.getAttribute("data-item-id");
  const colors = item.querySelectorAll(".colors div");
  const profileImg = item.querySelector(".profile");
  const frontImg = item.querySelector(".front");
  let selectedNode = null;

  colors.forEach((color, index) => {
    if (index === 0) {
      color.style.scale = "1.3";
      color.style.border = "2px solid";
      selectedNode = color;
    }
    color.addEventListener("click", function (e) {
      e.preventDefault();

      if (selectedNode) {
        selectedNode.style.border = "none";
        selectedNode.style.scale = "1";
      }

      e.target.style.border = "2px solid";
      e.target.style.scale = "1.3";

      selectedNode = e.target;

      if (e.target.classList.contains("brown")) {
        if (itemId === "1") {
          profileImg.src = "assets/images/hasttacke/Brown_Profile_720x512.png";
          frontImg.src = "assets/images/hasttacke/Brown_Front_720x512.png";
        } else if (itemId === "2") {
          profileImg.src =
            "assets/images/vast/Protech_Vast_Brown_V1_1440x1024.png";
          frontImg.src =
            "assets/images/vast/Protech_Vast_Brown_V2_1440x1024.png";
        } else if (itemId === "3") {
          profileImg.src = "assets/images/benskydd/Brown_band_1440x1024_PS.png";
          frontImg.src =
            "assets/images/benskydd/Brown_band_V2_1440x1024_PS.png";
        } else if (itemId === "4") {
          profileImg.src = "assets/images/hjalm/Brun_Hjalm_1440x1024.png";
          frontImg.src = "assets/images/hjalm/Brun_Hjalm_V2_1440x1024.png";
        }
      } else if (e.target.classList.contains("red")) {
        if (itemId === "1") {
          profileImg.src = "assets/images/hasttacke/Red_Profile_720x512.png";
          frontImg.src = "assets/images/hasttacke/Red_Front_720x512.png";
        } else if (itemId === "2") {
          profileImg.src =
            "assets/images/vast/Protech_Vast_Red_V1_1440x1024.png";
          frontImg.src = "assets/images/vast/Protech_Vast_Red_V2_1440x1024.png";
        } else if (itemId === "3") {
          profileImg.src = "assets/images/benskydd/Red_band_1440x1024_PS.png";
          frontImg.src = "assets/images/benskydd/Red_band_V2_1440x1024_PS.png";
        }
      } else if (e.target.classList.contains("blue")) {
        if (itemId === "1") {
          profileImg.src = "assets/images/hasttacke/Blue_Profile_720x512.png";
          frontImg.src = "assets/images/hasttacke/Blue_Front_720x512.png";
        } else if (itemId === "2") {
          profileImg.src =
            "assets/images/vast/Protech_Vast_Blue_V1_1440x1024.png";
          frontImg.src =
            "assets/images/vast/Protech_Vast_Blue_V2_1440x1024.png";
        } else if (itemId === "3") {
          profileImg.src = "assets/images/benskydd/Blue_band_1440x1024_PS.png";
          frontImg.src = "assets/images/benskydd/Blue_band_V2_1440x1024_PS.png";
        } else if (itemId === "4") {
          profileImg.src = "assets/images/hjalm/DarkBlue_Hjalm_1440x1024.png";
          frontImg.src = "assets/images/hjalm/DarkBlue_Hjalm_V2_1440x1024.png";
        }
      } else if (e.target.classList.contains("black")) {
        if (itemId === "2") {
          profileImg.src = "assets/images/vast/Protech_Vast_V1_1440x1024.png";
          frontImg.src = "assets/images/vast/Protech_Vast_V2_1440x1024.png";
        } else if (itemId === "3") {
          profileImg.src = "assets/images/benskydd/Black_band_1440x1024_PS.png";
          frontImg.src =
            "assets/images/benskydd/Black_band_V2_1440x1024_PS.png";
        } else if (itemId === "4") {
          profileImg.src = "assets/images/hjalm/Svart_Hjalm_1440x1024.png";
          frontImg.src = "assets/images/hjalm/Svart_Hjalm_V2_1440x1024.png";
        }
      } else if (e.target.classList.contains("green")) {
        if (itemId === "2") {
          profileImg.src =
            "assets/images/vast/Protech_Vast_Green_V1_1440x1024.png";
          frontImg.src =
            "assets/images/vast/Protech_Vast_Green_V2_1440x1024.png";
        }
      }
    });
  });
});

const mobileItems = document.querySelectorAll(".glide__slide");
mobileItems.forEach((item) => {
  const itemId = item.getAttribute("data-index");
  const colors = item.querySelectorAll(".colors div");
  const frontImg = item.querySelector("img");
  let selectedNode = null;
  console.log(colors);

  colors.forEach((color, index) => {
    if (index === 0) {
      color.style.scale = "1.3";
      color.style.border = "2px solid";
      color.style.cursor = "pointer";
      selectedNode = color;
    }
    color.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("clicked");

      // Remove border from the previously selected node
      if (selectedNode) {
        selectedNode.style.border = "none";
        selectedNode.style.scale = "1";
      }

      // Add border to the clicked element
      e.target.style.border = "2px solid";
      e.target.style.scale = "1.3";

      // Update the selected node to the current clicked element
      selectedNode = e.target;

      // Update images based on the selected color
      if (e.target.classList.contains("brown")) {
        if (itemId === "1") {
          frontImg.src = "assets/images/hasttacke/Brown_Front_720x512.png";
        } else if (itemId === "2") {
          frontImg.src =
            "assets/images/vast/Protech_Vast_Brown_V2_1440x1024.png";
        } else if (itemId === "3") {
          frontImg.src = "assets/images/benskydd/Brown_band_1440x1024_PS.png";
        } else if (itemId === "4") {
          frontImg.src = "assets/images/hjalm/Brun_Hjalm_1440x1024.png";
        }
      } else if (e.target.classList.contains("red")) {
        if (itemId === "1") {
          frontImg.src = "assets/images/hasttacke/Red_Front_720x512.png";
        } else if (itemId === "2") {
          ("assets/images/vast/Protech_Vast_Red_V1_1440x1024.png");
          frontImg.src = "assets/images/vast/Protech_Vast_Red_V2_1440x1024.png";
        } else if (itemId === "3") {
          frontImg.src = "assets/images/benskydd/Red_band_1440x1024_PS.png";
        }
      } else if (e.target.classList.contains("blue")) {
        if (itemId === "1") {
          frontImg.src = "assets/images/hasttacke/Blue_Front_720x512.png";
        } else if (itemId === "2") {
          frontImg.src =
            "assets/images/vast/Protech_Vast_Blue_V2_1440x1024.png";
        } else if (itemId === "3") {
          frontImg.src = "assets/images/benskydd/Blue_band_1440x1024_PS.png";
        } else if (itemId === "4") {
          frontImg.src = "assets/images/hjalm/DarkBlue_Hjalm_1440x1024.png";
        }
      } else if (e.target.classList.contains("black")) {
        if (itemId === "2") {
          frontImg.src = "assets/images/vast/Protech_Vast_V2_1440x1024.png";
        } else if (itemId === "3") {
          frontImg.src = "assets/images/benskydd/Black_band_1440x1024_PS.png";
        } else if (itemId === "4") {
          frontImg.src = "assets/images/hjalm/Svart_Hjalm_1440x1024.png";
        }
      } else if (e.target.classList.contains("green")) {
        if (itemId === "2") {
          frontImg.src =
            "assets/images/vast/Protech_Vast_Green_V2_1440x1024.png";
        }
      }
    });
  });
});

var o = {
  type: "carousel",
  startAt: 0,
  perView: 1,
};
var inst = new Glide(".glide", o).mount();

document
  .querySelector(".glide__slides")
  .addEventListener("click", function (e) {
    var ind = parseInt(e.target.getAttribute("data-index"));
    if (ind === 0 || ind > 0) {
      console.log(e.target.getAttribute("data-index"));
      inst.go("=" + ind);
    }
  });

//FOOTER

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

if (sessionStorage.getItem("dark") === "true") {
  document.body.classList.add("dark");
  dropdownContent.classList.toggle("dark");
  darkmode.classList.add("light");
  /* navbar.classList.add("dark"); */
  sun.style.display = "block";
  moon.style.display = "none";
  contact.style.background = "#171A16";

  if (document.body.classList.contains("dark")) {
    footer.style.setProperty("--check-primary", "white");
    document.querySelector(".input-mobile").style.borderBottomColor = "white";
  } else {
    footer.style.setProperty("--check-primary", "black");
    document.querySelector(".input-mobile").style.borderBottomColor = "black";
  }
}

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
