// Create class below
class Tamagotchi{
    constructor(name,energy = 9,full = 8,mood = 6,sick = false, rehomed = false){
        this.name=name;
        this.energy=energy;
        this.full=full;
        this.mood= mood;
        this.sick=sick;
        this.rehomed = rehomed;
    }
    greet(){
        console.log(`Hello, I'm ${this.name}!`)
    }
    status(){
        let sickly = ""
        if(this.sick){
           sickly = "I am sick"
        }else{
            sickly = "I am not sick"
        }

        console.log(`My mood is ${this.mood}\nI am this full: ${this.full}\n My energy is ${this.energy}\n${sickly}`)
    }
    eat(){
        this.full += 2;
        this.energy -= 1;
        if(this.full > 10){
            this.sick = !this.sick
        }
    }
    medicate(){
        if(!this.sick){
            this.full = 9;
            this.energy -=3
        }else{
            console.log("Refusal to take medicine")
            this.energy -=1
        }
    }
    play(){
        
        if(this.sick){
            console.log("UGH! I am sick Master! Can't play right now!")
            this.mood -=1;
            this.energy -=1;
        }
        if(this.mood > 9){
            this.energy -= 2;
            this.full -= 1
        }
        if(this.energy <= 3){
            console.log("I am too tired to play");
            this.energy =1
        }else{
            
            this.mood +=2;
            this.energy -=1;
            this.full -=1;
        }
    }

    sleep(){
        this.energy += 4;
        this.full -=3;
    }
    timePasses(){
        if(!this.sick){
            this.mood -=2;
            this.full -=1;
            this.energy -=1;
        }
            this.mood -= 3;
            this.full -= 2;
            this.energy -= 2;
        }
        badGuardian(){
        if(this.energy <= 0 || this.mood <= 0 || this.full <= 0){
            this.rehomed = !this.rehomed
        }
        if(rehomed){
            console.log(`${this.name} has been rehomed!`)
        }
        }
    }


const gio = new Tamagotchi("Gio")

console.log(gio)
// Do not edit below this line
module.exports = Tamagotchi;
