// Create class below
class Food {
    // Constructor method, initalize object properities when a new instance is created.
    constructor(name, daysToSpoil){
        //Assign the 'name' parameter to the 'name' property of the object.
        this.name = name;
        //Assign the 'daysToSpoil' parameter to the 'daysToSpoil" property of the object.
        this.daysToSpoil = daysToSpoil;
        // Set the 'fresh' property to true by default
        this.fresh = true;
    }
    // Method that logs a message indicating the food is being prepared.
    prepare(){
     console.log(`${this.name} is being prepared.`);
    }
    // Method that checks the freshness of the food and logs an appropriate message.
    isFresh(){
        // check if the 'fresh' property is true (food is fresh).
        if(this.fresh){
            // logs a message indicating the number of days left before the food is spoils/\.
            console.log (`There are ${this.daysToSpoil} days left before ${this.name} spoils.`);
        } else{
            // log a message indiciating that the food has spoiled
            console.log(`${this.name} has spoiled.`)
        }
    }
    //method that stimulates the passage of a day, decreasing 'daysToSpoil' and checking freshness.
    aDayPasses(){
        // Decrease the 'daysToSpoil' property by 1.
        this.daysToSpoil -= 1;
        // Check the freshness of the food after a day has passed
        this.isFresh();
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

// Testing BadFood Class
const pizza = new BadFood("Pizza");
const donut = new BadFood("Donut");
//Output for the pizza and donut
pizza.prepare(); // I am Pizza and you are just a passing trend!
donut.fight(pizza); // Pizza is down (new value), but I am still up (new value)

// Test the class food of course
const eggTart = new Food('Egg Tart', 3)
// output of the eggtarts
eggTart.prepare(); // Egg Tart is being prepared
eggTart.isFresh(); //  There are 3 days left  before Egg Tart spoils.

// Stimulate the passage of days
eggTart.aDayPasses(); // Output: There are 2 days left before Egg Tart is spoils.
eggTart.aDayPasses(); // Output: There are 1 days left before Egg Tart is spoils.
eggTart.aDayPasses(); // Output: Egg Tart is spoiled man.

// Do not edit below this line
module.exports = Food;
