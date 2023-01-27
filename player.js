const earth = ["Rock Throw", "Earthquake", "Mudsling"];

const air = ["Windblade", "Tornado", "Super Gust"];

const fire = ["Fire Ball", "Firestorm", "Heat Wave"];

const water = ["Water Jet", "Splash", "Geyser"];

class Character {
  constructor({ name } = {}) {
    this.name = name;
    this.type = [];
    this.health = 100;
    this.firstAttack = this.type.firstAttack;
    this.secondAttack = this.type.secondAttack;
    this.thirdAttack = this.type.thirdAttack;
  }
  // Method would be added here
  // reduceHealth();
}
