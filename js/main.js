"use strict";
let isActive = false;
let el = document.getElementById("toggle");

function myFunc() {
  isActive = !isActive;

  return isActive
    ? (el.classList.remove("header__menu-inactive"),
      el.classList.add("header__menu-active"))
    : (el.classList.add("header__menu-inactive"),
      el.classList.remove("header__menu-active"));
}

/// Get the anchor tag and close the menu
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.p;
    isActive = false;
    el.classList.remove("header__menu-active");
    el.classList.add("header__menu-inactive");
  });
});
