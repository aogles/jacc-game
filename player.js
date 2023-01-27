const earth = ["Rock Throw", "Earthquake", "Mudsling"];

const air = ["Windblade", "Tornado", "Super Gust"];

const fire = ["Fire Ball", "Firestorm", "Heat Wave"];

const water = ["Water Jet", "Splash", "Geyser"];

class Character {
  constructor({ name } = {}) {
    this.name = name;
    this.type = earth; // Defaults character to Earth
    this.health = 100;
    this.firstAttack = this.type.firstAttack;
    this.secondAttack = this.type.secondAttack;
    this.thirdAttack = this.type.thirdAttack;
  }
  // Method would be added here
  // reduceHealth();
}

class Enemy extends Character {
  constructor(name) {
    super(name); // MUST CALL SUPER FIRST. Super calls the constructor method of the class that weve inherited from. Calls the constructor method of animal.
    this.isEvil = true;
  }
}

export { Enemy, Character };
