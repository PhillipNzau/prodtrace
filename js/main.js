"use strict";
let isActive = false;

function myFunc() {
  isActive = !isActive;
  let el = document.getElementById("toggle");

  return (
    isActive
      ? (el.classList.remove("header__menu-inactive"),
        el.classList.add("header__menu-active"))
      : el.classList.add("header__menu-inactive"),
    el.classList.remove("header__menu-active")
  );
}
