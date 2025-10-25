let homeEl = document.getElementById("home-container");
let guestEl = document.getElementById("guest-container");
let homeScore = 0;
let guestScore = 0;

function setupGame() {
  homeEl.textContent = Number(homeScore);
  guestEl.textContent = Number(guestScore);
}

function addOne(state) {
  if (state == "home") {
    homeEl.textContent = Number(homeEl.textContent) + 1;
  } else {
    guestEl.textContent = Number(guestEl.textContent) + 1;
  }
}

function addTwo(state) {
  if (state == "home") {
    homeEl.textContent = Number(homeEl.textContent) + 2;
  } else {
    guestEl.textContent = Number(guestEl.textContent) + 2;
  }
}

function addThree(state) {
  if (state == "home") {
    homeEl.textContent = Number(homeEl.textContent) + 3;
  } else {
    guestEl.textContent =  Number(guestEl.textContent) + 3;
  }
}

setupGame();
