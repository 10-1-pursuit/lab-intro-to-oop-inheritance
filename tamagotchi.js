// Create class below
class Tamagotchi{
    constructor(name, energy, full, mood, sick, rehomed){
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed
    }

    greet(){
        console.log(`Hello, I'm ${this.name}.`)
    }

    status(){
        console.log(`My mood is: ${this.mood}
                     I am thuis full: ${this.full}
                     My energy is: ${this.energy}
                     I am not sick `)
    }
}
// Do not edit below this line
module.exports = Tamagotchi;
