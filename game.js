import { Enemy, Character } from "./player.js";

class Game {
  constructor({} = {}) {
    this.player = new Character();
    this.enemyPlayer = new Enemy();
  }
  // reduceHealth() goes here?
}

// ********* damage randomizer *********
// function damageAmount(min, max) {
//   return Math.random() * (10 - 1) + min;
//   console.log(damageAmount);
// }

export { Game };
