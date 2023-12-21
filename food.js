// Create class below
class Food {
    constructor(name, daysToSpoil, fresh = true) {
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh;
    }

    prepare() {
        console.log(`${this.name} is being prepared`)
    }

    isFresh() {
        if (this.daysToSpoil > 0) {
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        } else {
            this.fresh = false;
            console.log(`${this.name} has spoiled.`);
        }
    }

        aDayPasses() {
            this.daysToSpoil -= 1;
            if (this.daysToSpoil <= 0) {
                this.fresh = false;
            }
            this.isFresh();
        }
}

class BadFood extends Food {
    constructor(name, daysToSpoil = 20, fresh = true, weapons) {
        super(name, daysToSpoil, fresh = true, weapons)
        this.weapons = weapons;
    }

    prepare() {
        console.log(`I am ${this.name} and my calories are too high to count!`);
    }
    
    fight(opponent) {
        const myWeapon = randomArrayItem(this.weapons);
        opponent.daysToSpoil -= myWeapon.hitPoints;
        console.log(`${opponent.name} is down to ${opponent.daysToSpoil} days, but I still have ${this.daysToSpoil} days left!`);
        opponent.isFresh();
        this.isFresh();
      }
    }
    
    function randomArrayItem(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
    
    const donutWeapons = [
      { name: "The Storm of 1000 Sprinkles!", hitPoints: 3 },
      { name: "Hot Glaze Explosion!", hitPoints: 4}, 
      { name: "Chocolate Ocean Tsunami!", hitPoints: 5}
    ];
    
    const pizzaWeapons = [
      { name: "Mouth Burn!", hitPoints: 3 },
      { name: "Scorching Grease Blast!", hitPoints: 4 },
      { name: "Jalapeno Tomato Sauce Rain!", hitPoints: 5 }  
    ];
    
    const donut = new BadFood("Donut", 20, true, donutWeapons);
    const pizza = new BadFood("Pizza", 20, true, pizzaWeapons);
    
    donut.prepare();
    pizza.prepare();
    
    donut.fight(pizza);
    pizza.fight(donut);

    donut.fight(pizza);
    pizza.fight(donut);

    donut.fight(pizza);
    pizza.fight(donut);

    donut.fight(pizza);
    pizza.fight(donut);

    donut.fight(pizza);
    pizza.fight(donut);

    donut.fight(pizza);
    pizza.fight(donut);

    donut.fight(pizza);
    pizza.fight(donut);

// const pizzaBagel = new Food("pizza bagel", 3);
// pizzaBagel.prepare();
// pizzaBagel.isFresh();
// pizzaBagel.aDayPasses();
// pizzaBagel.aDayPasses();
// pizzaBagel.aDayPasses();
// Do not edit below this line
module.exports = Food;
