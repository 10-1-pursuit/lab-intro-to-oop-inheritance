// Create class below
class Tamagotchi {
  constructor(
    name,
    sick = false,
    energy = 9,
    full = 8,
    mood = 6,
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
    console.log(`Hello my name is ${this.name}`);
  }
  status() {
    console.log(`
    *******************
    My mood is: ${this.mood}
    I am this full: ${this.full}
    My energy is at: ${this.energy}
    ${this.sick === false ? "I am not sick" : "I am sick :("}
    *******************`);
  }
  eat() {
    this.full += 2;
    this.energy--;
    if (this.full > 10) {
      this.sick = true;
    }
  }
  medicate() {
    if (this.sick === true) {
      this.full = 9;
      this.energy -= 3;
      this.sick = false;
    } else {
      console.log("refusal to take medicine");
      this.energy--;
    }
  }
  play() {
    if (this.sick === true) {
      this.mood--;
      this.energy--;
    } else if (this.mood > 9) {
      this.energy -= 2;
      this.full--;
    } else if (this.energy <= 3) {
      console.log("I'm too tired to play");
      this.energy--;
    } else {
      this.mood += 2;
      this.energy--;
      this.full--;
    }
  }
  sleep() {
    this.energy += 4;
    this.full -= 3;
  }
  timePasses() {
    if (this.sick === false) {
      this.mood -= 2;
      this.full--;
      this.energy--;
    } else {
      this.mood -= 3;
      this.full -= 2;
      this.energy -= 2;
    }
  }
  badGuardian() {
    if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
      this.rehomed = true;
      console.log(
        `Looks like you were a bad guardian, so ${this.name} has been rehomed`
      );
    }
  }
}

// const digitalPet = new Tamagotchi("Rex");
// console.log("Before Any Methods");
// console.log(digitalPet);

// digitalPet.greet();

// digitalPet.status()

// digitalPet.eat();
// console.log("After Eat Method");
// console.log(digitalPet);

// digitalPet.status();

// digitalPet.medicate();
// console.log("After Medicate Method");
// console.log(digitalPet);

// digitalPet.status();

// digitalPet.play();
// console.log("After Play Method");
// console.log(digitalPet);

// digitalPet.sleep();
// console.log("After Sleep Method");
// console.log(digitalPet);

// digitalPet.timePasses();
// console.log("After timePasses Method");
// console.log(digitalPet);

// digitalPet.badGuardian();
// console.log("After badGuardian Method");
// console.log(digitalPet);

// Do not edit below this line
module.exports = Tamagotchi;
