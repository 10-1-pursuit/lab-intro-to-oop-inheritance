// Create class below
class Tamagotchi{
    constructor(name, energy, full, mood, sick, rehomed){
        this.name = name;
        this.energy = 9;
        this.full = 8;
        this.mood = 6;
        this.sick = false;
        this.rehomed = false
    }

    greet(){
        console.log(`Hello, I'm ${this.name}.`)
    }

    status(){
        console.log(`My mood is: ${this.mood}
                     I am this full: ${this.full}
                     My energy is: ${this.energy}
                     I am not sick `)
    }

    eat(){
        this.full += 2
        this.energy -= 1
        if (this.full > 10) {
            this.sick = true;
            console.log(`${this.name} is sick!`)
        }
    }

    medicate(){
        if (this.sick) {
            this.full = 9;
            this.energy -= 3;
            this.sick = false;
          } else {
            console.log(`${this.name} refuses to take medicine!`);
            this.energy -= 1;
          }
    }

    play(){
        if (this.sick) {
            console.log(`${this.name} is too sick to play.`);
            this.mood -= 1;
            this.energy -= 1;
          } else if (this.mood > 9) {
            console.log(`${this.name} is too happy to play.`);
            this.energy -= 2;
            this.full -= 1;
          } else if (this.energy <= 3) {
            console.log(`${this.name} is too tired to play.`);
            this.energy -= 1;
          } else {
            this.mood += 2;
            this.energy -= 1;
            this.full -= 1;
          }
    }

    sleep(){
        this.energy += 4;
        this.full -= 3
    }

    timePasses(){
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

    badGuardian(){
        if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
            this.rehomed = true;
            console.log(`${this.name} has been rehomed.`);
          }

        }

}

const myPet = new Tamagotchi("Mochi");
myPet.greet();
myPet.status();
myPet.eat();
myPet.status();
myPet.mood += 10;
myPet.play();
myPet.status();
myPet.sleep();
myPet.status();
myPet.timePasses();
myPet.status();
myPet.badGuardian(); 
// Do not edit below this line
module.exports = Tamagotchi;
