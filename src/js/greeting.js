"use strick";

history.pushState(null, null, location.href);
window.onpopstate = function () {
  history.go(1);
};

const greeting = document.querySelector(".greeting-text span");
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");

function onLoginSubmit() {
  const usernameInput = loginInput.value;
  localStorage.setItem("username", usernameInput);
  paintGreeting(usernameInput);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}, Happy day`;
}

savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
