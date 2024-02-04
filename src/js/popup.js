"use strick";

const logoutBtn = document.querySelector("#logout");

function showPopup(hasFilter) {
  const popup = document.querySelector("#popup-wrap");

  if (hasFilter) {
    popup.classList.add("has-filter");
  } else {
    popup.classList.remove("has-filter");
  }
  popup.classList.remove("hide");
}

logoutBtn.addEventListener("click", showPopup);

const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");

function closePopup() {
  const popup = document.querySelector("#popup-wrap");
  popup.classList.add("hide");
}

function userLogout() {
  localStorage.clear();

  location.replace("https://onjwon.github.io/prolog/");
}

yesBtn.addEventListener("click", userLogout);
noBtn.addEventListener("click", closePopup);