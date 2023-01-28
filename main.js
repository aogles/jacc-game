// This updates dropdown button

import { earth, air, fire, water } from "./player.js";

// **** target character images area ****

let heroImage = document.getElementById("hero-image");

let enemyImage = document.getElementById("enemy-image");
const gameInfoText = document.getElementById("game-text-update");
const playerClassInfo = document.getElementById("player-class-description");

const dropdownButton = document.querySelector(".dropdown-toggle");
const dropdownEarth = document.querySelector(".btn1");
const dropdownWind = document.querySelector(".btn2");
const dropdownFire = document.querySelector(".btn3");
const dropdownAir = document.querySelector(".btn4");

dropdownButton.innerHTML = "Player class:";

dropdownEarth.addEventListener("click", updateDropdownButton);
dropdownWind.addEventListener("click", updateDropdownButton);
dropdownFire.addEventListener("click", updateDropdownButton);
dropdownAir.addEventListener("click", updateDropdownButton);

const playerAttackButtons = document.querySelectorAll(".btn-primary");

// TODO: Have drop down update the Characters type. Then pull from his type.

function updateDropdownButton() {
  dropdownButton.innerHTML = this.innerHTML;

  let category = this.innerHTML;

  if (category == "Earth") {
    playerAttackButtons[0].innerHTML = earth[0] + "!";
    playerAttackButtons[1].innerHTML = earth[1] + "!";
    playerAttackButtons[2].innerHTML = earth[2] + "!";
    heroImage.src = "./images/earth.png";
    playerClassInfo.innerHTML =
      "You control the mighty element of earth. It's weakness is fire";
    gameInfoText.innerHTML = "Choose your element wisely brave hero";
  } else if (category == "Air") {
    playerAttackButtons[0].innerHTML = air[0] + "!";
    playerAttackButtons[1].innerHTML = air[1] + "!";
    playerAttackButtons[2].innerHTML = air[2] + "!";
    heroImage.src = "./images/wind.png";
    playerClassInfo.innerHTML =
      "You control the fierce element of wind. It's weakness is earth";
    gameInfoText.innerHTML = "Choose your element wisely brave hero";
  } else if (category == "Fire") {
    playerAttackButtons[0].innerHTML = fire[0] + "!";
    playerAttackButtons[1].innerHTML = fire[1] + "!";
    playerAttackButtons[2].innerHTML = fire[2] + "!";
    heroImage.src = "./images/fire.png";
    playerClassInfo.innerHTML =
      "You control the destructive element of fire. It's weakness is water.";
    gameInfoText.innerHTML = "Choose your element wisely brave hero";
  } else if (category == "Water") {
    playerAttackButtons[0].innerHTML = water[0] + "!";
    playerAttackButtons[1].innerHTML = water[1] + "!";
    playerAttackButtons[2].innerHTML = water[2] + "!";
    heroImage.src = "./images/water.png";
    playerClassInfo.innerHTML =
      "You control the graceful element of water. It's weakness is wind";
    gameInfoText.innerHTML = "Choose your element wisely brave hero";
  }
}

playerAttackButtons[0].addEventListener("click", causeDamage);
playerAttackButtons[1].addEventListener("click", causeDamage);
playerAttackButtons[2].addEventListener("click", causeDamage);

function causeDamage() {
  enemyHealth.value = parseInt(enemyHealth.value) - damage(0, 20);

  enemyTurn();
}

function enemyTurn() {
  playerAttackButtons[0].disabled = true;
  playerAttackButtons[1].disabled = true;
  playerAttackButtons[2].disabled = true;
  console.log(playerAttackButtons);
  setTimeout(damageHeroHealth, 1000);
}

const damage = function randomDamage(min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

function damageHeroHealth() {
  heroHealth.value = parseInt(heroHealth.value) - damage(0, 20);

  playerAttackButtons[0].disabled = false;
  playerAttackButtons[1].disabled = false;
  playerAttackButtons[2].disabled = false;
}

//let isDisabled = false;

const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", randomEnemy);
//
// info card text update section

function randomEnemy() {
  dropdownButton.disabled = true;
  updateInfoText();
  // Create random class for the enemy.
  // Rounds to 0 to 4: Math.floor(Math.random() * 10);

  let randomEnemy = Math.floor(Math.random() * 4);

  if (randomEnemy == 1) {
    playerAttackButtons[4].innerHTML = air[0] + "!";
    playerAttackButtons[5].innerHTML = air[1] + "!";
    playerAttackButtons[6].innerHTML = air[2] + "!";
    enemyImage.src = "./images/wind.png";
  } else if (randomEnemy == 2) {
    playerAttackButtons[4].innerHTML = fire[0] + "!";
    playerAttackButtons[5].innerHTML = fire[1] + "!";
    playerAttackButtons[6].innerHTML = fire[2] + "!";
    enemyImage.src = "./images/fire.png";
  } else if (randomEnemy == 3) {
    playerAttackButtons[4].innerHTML = water[0] + "!";
    playerAttackButtons[5].innerHTML = water[1] + "!";
    playerAttackButtons[6].innerHTML = water[2] + "!";
    enemyImage.src = "./images/water.png";
  } else if (randomEnemy == 0) {
    playerAttackButtons[4].innerHTML = earth[0] + "!";
    playerAttackButtons[5].innerHTML = earth[1] + "!";
    playerAttackButtons[6].innerHTML = earth[2] + "!";
    enemyImage.src = "./images/earth.png";
  }
}

function updateInfoText() {
  gameInfoText.innerHTML =
    "Good luck hero. I hope you are victorious. Our kindgdom, no... the entire realm is depending on you. ";
}

const heroHealth = document.getElementById("hero-health");
heroHealth.value = 100;

const enemyHealth = document.getElementById("enemy-health");
enemyHealth.value = 100;
