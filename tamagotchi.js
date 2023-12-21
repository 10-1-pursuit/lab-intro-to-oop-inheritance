// Create class below
class Tamagotchi{
    constructor( name) {
        // constructor method, intializes Tamagotchi object properties.
        this.name = name ;
        this.energy = 9;
        this.full = 8;
        this.mood = 6;
        this.sick = false;
        this.rehomed = false;
    }

    greet (){
        // method that logs with a greeting message with the Tamagotchi's name.
        console.log (`Hello, I'm ${this.name}!`);
    }
    status(){
        // method that logs the current status of the Tamagotchi (energy, fullness , mood , sick).
        console.log (` Energy: ${this.energy}, Fullness: ${this.full}, Mood: ${this.mood}, Sick: ${this.sick}`);
    }
    eat(){
        // method that increase fullness, decreases energy, and sets sicks if fullness is more than 10.
        this.full += 2;
        this.energy -= 1;
        if (this.full > 10){
            this.sick = true;
        }
    }
    medicate(){
        // method that medicates the Tamagotchi, reducing the fullness and energy if sick.
        // refuses to take medicine if not sick, reducing the energy only.
        if (this.sick){
            this.full -= 9;
            this.energy -= 3;
        } else{
            console.log("Refusal to take medicine");
            this.energy -= 1;
        }
    }
    play (){
        //method that stimulates playing, affecting mood, energy, and fullness based on various conditions. 
        if (this.sick) {
            this.mood -= 1;
            this.energy -= 1;
        } else if (this.mood > 9) {
            this.energy -= 2;
            this.full -= 1;
        } else if (this.energy <= 3) {
            console.log("I am too tired to play.");
            this.energy -= 1;
        } else {
            this.mood += 2;
            this.energy -= 1;
            this.full -= 1;
        }
    }

    sleep() {
        // Method simulating sleep, increasing energy and decreasing fullness.
        this.energy += 4;
        this.full -= 3;
    }

    timePasses() {
        // Method simulating the passage of time, affecting mood, energy, and fullness.
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

    badGuardian() {
        // Method checking if the Tamagotchi should be rehomed based on energy, mood, and fullness.
        if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
            this.rehomed = true;
            console.log("The Tamagotchi has been rehomed.");
        }
    }
}
class BadFood extends Food {
    constructor(name) {
        // Constructor method for BadFood, inheriting from the Food class.
        super(name, 20); // Calls the constructor of the parent class (Food) with specific parameters.
        this.weapons = [
            { hitPoints: 3 },
            { hitPoints: 4 },
            { hitPoints: 5 }
        ];
    }

    prepare() {
        // Method that prepares for a fight, taunting the opponent.
        console.log(`I am ${this.name} and you are just a passing trend!`);
    }

    fight(otherFood) {
        // Method simulating a fight between BadFood instances.
        const randomWeapon = this.weapons[Math.floor(Math.random() * this.weapons.length)];
        const damage = randomWeapon.hitPoints;
        
        // Decrease the daysToSpoil property of the opponent BadFood.
        otherFood.daysToSpoil -= damage;
        // Log a message indicating the outcome of the fight.
        console.log(`${this.name} is down ${otherFood.daysToSpoil}, but I am still up ${this.daysToSpoil}!`);
    }
}


// Do not edit below this line
module.exports = Tamagotchi;
