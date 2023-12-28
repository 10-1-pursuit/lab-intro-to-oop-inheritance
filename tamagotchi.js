// Create class below
class tamagotchi {
  constructor(
    name,
    energy = 9,
    full = 8,
    mood = 6,
    sick = false,
    rehomed = false
  ) {
    this.name = name;
    this.energy = energy;
    this.full = full;
    this.mood = mood;
    this.sick = sick;
    this.rehomed = rehomed;
  }

  greet() {
    console.log(`Hello I'm ${this.name}! `);
  }

  status() {
    let sicknessStatus = this.sick ? "I am sick" : " I am not sick";
    console.log(`My mood is: ${this.mood}, I am this full ${this.full}, 
       my energy is: ${this.energy} & ${sicknessStatus}`);
  }
  eat() {
    this.full += 2;
    this.energy -= 1;
    if (this.full > 10) {
      this.sick = true;
    }
    console.log(`i am ${this.full}, and my energy is: ${this.energy} `);
  }
  medicate() {
    if (this.sick) {
      this.full = 9;
      this.energy -= 3;
      this.sick = false;
    } else {
      this.energy -= 1;
      console.log(`refusal to take medicine`);
    }
  }
  play() {
    if (this.sick) {
      console.log("I am too sick to play.");
      this.energy -= 1;
      this.mood -= 1;
    } else if (this.mood > 9) {
      console.log("I am too happy to play.");
      this.energy -= 2;
      this.full -= 1;
    } else if (this.energy <= 3) {
      console.log("I am too tired to play.");
      this.energy -= 1;
    } else {
      console.log("Let's play!");
      this.mood += 2;
      this.energy -= 1;
      this.full -= 1;
    }
  }
  sleep() {
    this.energy += 4;
    this.full -= 3;
  }

  timePasses() {
    if (this.sick) {
      this.mood -= 3;
      this.full -= 2;
      this.energy -= 2;
    } else {
      this.mood -= 2;
      this.full -= 1;
      this.energy -= 1;
    }
  }

  badGuardian() {
    console.log(`Tamagotchi ${this.name} has been rehomed.`);
    if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
      this.rehomed = true;
    }
  }
}

const candy = new tamagotchi();
candy.status(); // Do not edit below this line
module.exports = tamagotchi;
