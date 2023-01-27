import { Enemy, Character } from "./player.js";

class Game {
  constructor({} = {}) {
    this.player1 = player;
    this.enemyPlayer = enemy;
  }
  // reduceHealth() goes here?
}

// ********* damage randomizer *********
function damageAmount(min, max) {
  return Math.random() * (10 - 1) + min;

  console.log(damageAmount);
}
