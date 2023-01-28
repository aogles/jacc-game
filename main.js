// This updates dropdown button

import { earth, air, fire, water } from "./player.js";

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
  } else if (category == "Air") {
    playerAttackButtons[0].innerHTML = air[0] + "!";
    playerAttackButtons[1].innerHTML = air[1] + "!";
    playerAttackButtons[2].innerHTML = air[2] + "!";
  } else if (category == "Fire") {
    playerAttackButtons[0].innerHTML = fire[0] + "!";
    playerAttackButtons[1].innerHTML = fire[1] + "!";
    playerAttackButtons[2].innerHTML = fire[2] + "!";
  } else if (category == "Water") {
    playerAttackButtons[0].innerHTML = water[0] + "!";
    playerAttackButtons[1].innerHTML = water[1] + "!";
    playerAttackButtons[2].innerHTML = water[2] + "!";
  }
}

playerAttackButtons[0].addEventListener("click", causeDamage);
playerAttackButtons[1].addEventListener("click", causeDamage);
playerAttackButtons[2].addEventListener("click", causeDamage);

// Add event listeners to the attack buttons.

// There are three cards. player-card info-card and enemy-card.

// player-card contains image. enemy-card contains image.

// player-card is waiting for a drop down to occur on info-card.

// Once info-card has selected a drop down choice, look at the array of constructors.

// Choose an earth/fire/wind/air. Return those values to the three buttons on player-card.

// Allow these to be updated until the start button is pressed.

// Press the start button.

let isDisabled = false;

const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", function () {
  isDisabled = !isDisabled;
  dropdownButton.disabled = isDisabled;
});

// If start button pressed, lock up dropdown.

// Now randomly choose a character type. Fill the enemy-card img with corresponding image, and fill attack options
// with the corresponding ones from the constructor.

// Allow player-card to choose an attack.

// Once an attack button is pressed.

// Press attack1, attack2, or attack3.

// Do not allow the player1 to choose more than one button.

// Once button is pressed, trigger the function runAttack(){};

// runAttack will need to determine the amount of damage.

// Update the info card div.attack-info with "Player1" attacked using ${button name} to inflict ${X} damage on ${enemy}.

// Subtract damage from enemy. Update the div.health of enemy.

// Now the enemy attacks. use runAttack(){}; and plug in the returned value to the info box.

// Restart loop.

// The runAttack() function will be the same for all attacks. Bit of a hack.

// should this be attached to the class for player type? Yes.

// Attack button is clicked. Trigger the character.runAttack()

// runAttack() will math.random a number from 1 to 3. multiply that by the attack constant.

// Who is attacking who? Add this.name to the info box. Add this.button name (attack name) to the info box.

// Add the attack damage to the info box.

// When do the health bars get added?

const heroHealth = document.getElementById("hero-health");
heroHealth.value -= 10;

const enemyHealth = document.getElementById("enemy-health");
enemyHealth.value -= 10;
