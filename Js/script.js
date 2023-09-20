'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
let navLinks = document.querySelectorAll("[data-nav-link]");
let overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);

let logOutButton = document.getElementById('logOut');
let signOutModal = document.getElementById('signOutModal');
let signOutCancelButton = document.getElementById('signOutCancelButton');

logOutButton.addEventListener("click", () => {
  console.log("Log Out Button clicked!");
  signOutModal.style.display = 'flex';
  navbar.classList.remove("active");
  overlay.classList.remove("active");
})
signOutCancelButton.addEventListener("click", () => {
  console.log("Cancel Button clicked!");
  signOutModal.style.display = 'none';
})

/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);


const glide = new Glide('.glide', {
  type: 'carousel', // Set the type to 'carousel' for a basic slider
  autoplay: 5000, // Set autoplay duration in milliseconds (or false to disable)
  hoverpause: true, // Pause autoplay when hovering over the slider
  perView: 1, // Number of slides visible per view
  breakpoints: {
    768: {
      perView: 1 // Adjust the number of slides visible at different screen sizes
    },
    480: {
      perView: 1
    }
  }
});

glide.mount(); // Mount the slider
const input = document.getElementById('name');
const label = document.querySelector('label[for="name"]');

input.addEventListener('focus', function() {
  label.style.transform = 'translateY(-20px)';
});

input.addEventListener('blur', function() {
  if (input.value === '') {
    label.style.transform = 'none';
  }
});




