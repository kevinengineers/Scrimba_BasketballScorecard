let homeEl = document.getElementById('home-container')
let guestEl = document.getElementById('guest-container')
let homeScore = 0
let guestScore = 0

function setupGame() {
  homeEl.textContent = homeScore
  guestEl.textContent = guestScore
}

setupGame()
