// Create class below

class Tamagotchi{
    constructor(name){
        this.name = name;
        this.energy = 9;
        this.full = 8;
        this.mood = 6;
        this.sick = false;
        this.rehomed = false;
    }
    greet(){
        console.log(`Hello, I'm ${this.name}!`)
    }
    status(){
        console.log(`My mood is : ${this.mood}\nI am this full: ${this.full}\nMy energy is: ${this.energy}`)
        if(this.sick){
            console.log("I am sick")
        } else {
            console.log("I am not sick")
        }
    }
    eat(){
        this.full += 2
        this.energy -= 1
        if(this.full > 10){
            this.sick = true
        }
    }
    medicate(){
        if(this.sick === false){
            console.log("Refusal to take medicine")
            this.energy -= 1
        } else if(this.sick === true){
            this.full = 9
            this.energy -=3
            this.sick = false
        }
    }
    play(){
        if(this.sick === true){
            this.mood -= 1 
            this.energy -= 1
        }
        else if(this.energy <= 3){
            console.log("I am too tired to play")
            this.energy -= 1
        } 
        else if(this.mood > 9){
            this.energy -= 2
            this.full -= 1
        }
        else {
            this.mood += 2
            this.energy -=1
            this.full -=1
        }
    }
    sleep(){
        this.energy += 4
        this.full -= 3
    }
    timePasses(){
        if(this.sick){
            this.mood -=3
            this.full -=2
            this.energy -=2
        } else {
            this.mood -= 2
            this.full -=1
            this.energy -= 1
        }
    }
    badGuardian(){
        if((this.energy <= 0) || (this.mood <= 0) ||(this.full <= 0)){
            this.rehomed = true
        }
    }
}
const bill = new Tamagotchi("bill")
// console.log(bill)
// bill.greet()
// bill.status()
// bill.eat()
// console.log(bill)
// bill.medicate()
// console.log(bill)
// bill.play()
// console.log(bill)
// bill.sleep()
// console.log(bill)
// bill.timePasses()
// console.log(bill)
// bill.badGuardian()

// Do not edit below this line
module.exports = Tamagotchi;
