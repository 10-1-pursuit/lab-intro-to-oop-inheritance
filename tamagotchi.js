// Create class below
class Tamagotchi {
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
    console.log(`Hello my name is ${this.name}`);
  }
}

const digitalPet = new Tamagotchi("Rex");
// console.log(digitalPet)

digitalPet.greet();

// Do not edit below this line
module.exports = Tamagotchi;
