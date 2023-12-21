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
  medicate(){
    if(this.sick === true){
        this.full = 9
        this.energy -= 3
    } else{
        console.log("refusal to take medicine")
        this.energy--
    }
  }
}

const digitalPet = new Tamagotchi("Rex");
console.log("Before Eating");
console.log(digitalPet);

// digitalPet.greet();

// digitalPet.status()

digitalPet.eat();
console.log("After Eating");
console.log(digitalPet);

// digitalPet.status();

digitalPet.medicate()
console.log(digitalPet);

// Do not edit below this line
module.exports = Tamagotchi;
