// This updates dropdown button

import { earth, air, fire, water } from "./player.js";
import { Game } from "./game.js";

const heroHealth = document.getElementById("hero-health");
heroHealth.value = 100;

const enemyHealth = document.getElementById("enemy-health");
enemyHealth.value = 100;

var laugh = new Audio("./audio/evil-laugh.mp3");
var click = new Audio("./audio/wooden-click.wav");
var drip = new Audio("./audio/water.mp3");
var crackle = new Audio("./audio/fire.mp3");
var rocks = new Audio("./audio/rock_drop.wav");
var breeze = new Audio("./audio/swoosh.wav");

console.log("check");
// **** target character images area ****

let currentlyOccurringGame = new Game();

// let name = prompt('Welcome! What's your name?');

currentlyOccurringGame.player.name = "Jacc"; // set to name

let heroImage = document.getElementById("hero-image");

let enemyImage = document.getElementById("enemy-image");
const gameInfoText = document.getElementById("game-text-update");
const playerClassInfo = document.getElementById("player-class-description");
const enemyClassInfo = document.getElementById("enemy-class-description");
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

   let category = this.innerText;

   gameInfoText.innerHTML = "Choose your element wisely brave hero!";

   if (category == "Earth") {
      currentlyOccurringGame.player.type = earth;
      heroImage.src = "./images/earth.png";
      playerClassInfo.innerHTML =
         "You control the mighty element of earth. Its weakness is fire.";
   } else if (category == "Air") {
      currentlyOccurringGame.player.type = air;
      heroImage.src = "./images/wind.png";
      playerClassInfo.innerHTML =
         "You control the fierce element of wind. Its weakness is earth.";
   } else if (category == "Fire") {
      currentlyOccurringGame.player.type = fire;
      heroImage.src = "./images/fire.png";
      playerClassInfo.innerHTML =
         "You control the savage element of fire. Its weakness is water.";
   } else if (category == "Water") {
      currentlyOccurringGame.player.type = water;
      heroImage.src = "./images/water.png";
      playerClassInfo.innerHTML =
         "You control the graceful element of water. Its weakness is wind.";
   }

   playerAttackButtons[0].innerText =
      currentlyOccurringGame.player.type[0] + "!";
   playerAttackButtons[1].innerText =
      currentlyOccurringGame.player.type[1] + "!";
   playerAttackButtons[2].innerText =
      currentlyOccurringGame.player.type[2] + "!";
}

//Allows player attack buttons to be clickable:
playerAttackButtons[0].addEventListener("click", causeDamage);
playerAttackButtons[1].addEventListener("click", causeDamage);
playerAttackButtons[2].addEventListener("click", causeDamage);

function causeDamage() {
   let inflictedDamage = damage(0, 20);
   enemyHealth.value = parseInt(enemyHealth.value) - inflictedDamage;
   currentlyOccurringGame.enemyPlayer.health = enemyHealth.value;
   //  gameInfoText.innerHTML =
   //     currentlyOccurringGame.player.name +
   //     " has damaged " +
   //     inflictedDamage +
   //     ".";

   if (inflictedDamage === 0) {
      gameInfoText.innerHTML = "The sorcerer narrowly dodged your attack!";
   } else if (inflictedDamage === 20) {
      gameInfoText.innerHTML =
         "Critical attack!" +
         "<br>" +
         currentlyOccurringGame.player.name +
         "has dealt " +
         inflictedDamage +
         "damage.";
   } else {
      gameInfoText.innerHTML =
         currentlyOccurringGame.player.name +
         " has dealt " +
         inflictedDamage +
         "damage.";
   }
   gameOver();
   click.play();
   if (currentlyOccurringGame.player.type === water) {
      drip.play();
   } else if (currentlyOccurringGame.player.type === earth) {
      rocks.play();
   } else if (currentlyOccurringGame.player.type === fire) {
      crackle.play();
   } else if (currentlyOccurringGame.player.type === air) {
      breeze.play();
   }
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
   let inflictedDamage = damage(1, 20);
   heroHealth.value = parseInt(heroHealth.value) - inflictedDamage;
   currentlyOccurringGame.player.health = heroHealth.value;

   playerAttackButtons[0].disabled = false;
   playerAttackButtons[1].disabled = false;
   playerAttackButtons[2].disabled = false;

   if (inflictedDamage == 0) {
      gameInfoText.innerHTML = "Jacc dodged the sorcerer's attack! ";
   } else if (inflictedDamage === 20) {
      gameInfoText.innerHTML =
         "Critical attack! <br>The enemy has damaged " +
         currentlyOccurringGame.player.name +
         " " +
         inflictedDamage +
         ".";
   } else {
      gameInfoText.innerHTML =
         gameInfoText.innerHTML +
         "<br>The enemy has damaged " +
         currentlyOccurringGame.player.name +
         " for" +
         inflictedDamage +
         ".";
      laugh.play();
   }
   gameOver();
   // report what attack was used and add to info box;
}

const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", randomEnemy);
//
// info card text update section

function randomEnemy() {
   dropdownButton.disabled = true;
   startButton.disabled = true;

   updateInfoText();
   // Create random class for the enemy.
   // Rounds to 0 to 4: Math.floor(Math.random() * 10);

   let randomEnemy = Math.floor(Math.random() * 4);

   if (randomEnemy == 1) {
      currentlyOccurringGame.enemyPlayer.type = air;
      enemyImage.src = "./images/evilwind.png";
      enemyClassInfo.innerHTML =
         "The sorcerer is wind type. Its weakness is earth.";
   } else if (randomEnemy == 2) {
      currentlyOccurringGame.enemyPlayer.type = fire;
      enemyImage.src = "./images/evilfire.png";
      enemyClassInfo.innerHTML =
         "The sorcerer is fire type. Its weakness is water.";
   } else if (randomEnemy == 3) {
      currentlyOccurringGame.enemyPlayer.type = water;
      enemyImage.src = "./images/evilwater.png";
      enemyClassInfo.innerHTML =
         "The sorcerer is water type. Its weakness is wind.";
   } else if (randomEnemy == 0) {
      currentlyOccurringGame.enemyPlayer.type = earth;
      enemyImage.src = "./images/evilearth.png";
      enemyClassInfo.innerHTML =
         "The sorcerer is earth type. Its weakness is fire.";
   }

   playerAttackButtons[4].innerText =
      currentlyOccurringGame.enemyPlayer.type[0] + "!";
   playerAttackButtons[5].innerText =
      currentlyOccurringGame.enemyPlayer.type[1] + "!";
   playerAttackButtons[6].innerText =
      currentlyOccurringGame.enemyPlayer.type[2] + "!";
}

function updateInfoText() {
   gameInfoText.innerHTML =
      "Good luck hero. I hope you are victorious... Our people are depending on you. ";
}

function gameOver() {
   if (heroHealth.value === 0) {
      alert("Game Over! Enemy won. Refresh to start a new game.");
   } else if (enemyHealth.value === 0) {
      alert("Game over! Hero won. Refresh to start a new game.");
   }
}
