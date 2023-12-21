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
        
    }
}
// Do not edit below this line
module.exports = Tamagotchi;
