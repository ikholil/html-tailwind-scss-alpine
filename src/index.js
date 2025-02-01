import './scss/index.scss'

import './scss/index.scss'

const searchBtn = document.querySelector(".search-btn");
const searchBar = document.querySelector(".search-bar");
const closeBtn = document.querySelector(".search-bar-close");
const headerTwo = document.querySelector(".header-two");
searchBtn.addEventListener("click", () => {
  searchBar.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  searchBar.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (!searchBar.contains(e.target) && !searchBtn.contains(e.target)) {
    searchBar.classList.remove("active");
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    searchBar.classList.remove("active");
  }
});

// add active class on hover
window.addEventListener("scroll", (e) => {
  if(headerTwo){
    if (window.scrollY >= 150) {
      headerTwo.classList.add("active");
    } else {
      headerTwo.classList.remove("active");
    }
  }
})
document.querySelectorAll(".dropdown-btn").forEach(button => {
  button.addEventListener("click", function () {
    const parent = this.closest(".dropdown-item");
    const isActive = parent.classList.contains("active");

    // Close all dropdowns
    document.querySelectorAll(".dropdown-item").forEach(item => item.classList.remove("active"));

    // Toggle the clicked dropdown
    if (!isActive) parent.classList.add("active");
  });
});

// menu btn
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// close menu on click outside
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
    menu.classList.remove("active");
  }
});