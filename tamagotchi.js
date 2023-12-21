// Create class below
// Create a virtual pet that can play, eat, sleep and more! Try to keep your pet happy or else it will be rehomed!

class Pet {
    constructor(name, energy, full, mood, sick, rehomed) {
        this.name = name;
        this.energy = energy || 9;
        this.full = full || 8;
        this.mood = mood || 6;
        this.sick = sick || false;
        this.rehomed = rehomed || false;
    }
    greet() {
        console.log(`Hello, I'm ${this.name}`)
    }
    status() {
        console.log(`Energy: ${this.energy}, Hunger: ${this.full}, isSick: ${this.sick}, isRehomed:${this.rehomed}.`)
    }
    eat(pet) {
        this.full += 2
        this.energy -= 1
        if (this.full >= 10) {
            return pet.sick = true
        }

    }
}


medicate() {
    if (this.sick) {

    }
}

const mittens = new Pet("mittens", 10, 10, false, false)
console.log(mittens.greet())
console.log(mittens.status())
// - Methods

//   - greet: Tamagotchi console logs `Hello, I'm <name>!`
//   - status: Tamogotchi console logs energy, full, mood, and sick values (see below for sample message)
//   - eat: increases fullness by two, decreases energy by 1,
//     - if eat method makes fullness more than 10, tamagotchi becomes sick (sick = true)

// - medicate:
//   - if tamagotchi is sick - set full to 9 - decrease energy by 3
//   - if tamagotchi is not sick
//     - console log refusal to take medicine
//       - reduce energy by 1
// - play: increases mood by 2, reduces energy and full by 1,
//   - will not play if tamagotchi is sick,
//   - if asked to play when sick, reduce mood and energy by 1
//   - will not play if mood is above 9, reduce energy by 2 and full by 1
//   - will not play if energy is less than or equal to 3
//     - console log "I am too tired to play" - reduce energy by 1
// - sleep:
//   - increases energy by 4 and decreases full by 3
// - timePasses:
//   - if tamagotchi is not sick - mood decreases by 2, fullness and energy decrease by 1
//     -if tamagotchi is sick - mood decreases by 3, fullness and energy decrease by 2
// - badGuardian
//   - logs a message that the tamagotchi has been rehomed
//   - if energy is less than or equal to 0, set rehomed to true
//   - if mood is less than or equal to 0 set rehomed to true
//   - if full is less than or equal to true set rehomed to true

// Do not edit below this line
module.exports = Tamagotchi;
