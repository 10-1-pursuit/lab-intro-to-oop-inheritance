// Create class below

// Create a tamagotchi class
// Attributes
// name: string
// energy: number, default value 9
// full: number, default value 8
// mood: number, default value 6
// sick: boolean, default false
// rehomed: boolean, default false
// Methods

// greet: Tamagotchi console logs Hello, I'm <name>!
// status: Tamogotchi console logs energy, full, mood, and sick values (see below for sample message)
// eat: increases fullness by two, decreases energy by 1,
// if eat method makes fullness more than 10, tamagotchi becomes sick (sick = true)
// medicate:

// if tamagotchi is sick - set full to 9 - decrease energy by 3
// if tamagotchi is not sick
// console log refusal to take medicine
// reduce energy by 1
// play: increases mood by 2, reduces energy and full by 1,

// will not play if tamagotchi is sick,
// if asked to play when sick, reduce mood and energy by 1
// will not play if mood is above 9, reduce energy by 2 and full by 1
// will not play if energy is less than or equal to 3
// console log "I am too tired to play" - reduce energy by 1
// sleep:

// increases energy by 4 and decreases full by 3
// timePasses:

// if tamagotchi is not sick - mood decreases by 2, fullness and energy decrease by 1 -if tamagotchi is sick - mood decreases by 3, fullness and energy decrease by 2
// badGuardian

// logs a message that the tamagotchi has been rehomed
// if energy is less than or equal to 0, set rehomed to true
// if mood is less than or equal to 0 set rehomed to true
// if full is less than or equal to true set rehomed to true
class Tamagotchi {
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false) {
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }
    greet() {
        console.log(`Hello, I'm ${this.name}!`);
    }
    // shoutout x for ternary
    stats() {
        console.log(`********************
My mood is: ${this.mood}
I am this full: ${this.full}
My energy is: ${this.energy}
${(this.sick)? "I am sick" : "I am not sick"}
********************
`)
    }
    eat() {
        if (this.full >= 10) {
            this.full += 2;
            this.energy -= 1;
            this.sick = true;
        } else {
            this.full += 2;
            this.energy -= 1;
        }
        console.log(`Fullness:${this.full}, Energy:${this.energy}, Is sick:${this.sick}`)
    }
}

const tom = new Tamagotchi("tom-tom");
tom.greet();
tom.stats();
tom.eat();
tom.eat();
// Do not edit below this line
module.exports = Tamagotchi;
