// Create class below

// - Create a food class

// - Attributes
//   - name: string
//   - daysToSpoil: number
//   - fresh: boolean, default true
// - Methods
//   - prepare: console logs the `food name is being prepared`
//   - isFresh: console logs a message if the food is fresh with the number of days left: `There are 3 days left before ice cream spoils`.
//     - Else console logs a different message if the food is no longer fresh (0 or less days left)
//     - `ice cream has spoiled.`
//   - aDayPasses: decreases the `daysToSpoil` attribute by 1, calls the `isFresh` method to check freshness

// Test your class by

// - creating an instance
// - running each method at least once

// at the bottom of your file

class Food {
    constructor(name, daysToSpoil, fresh = true){
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh 
    }
    prepare(){
        console.log(`${this.name} is being prepared`)
    }
    isFresh(){
        if((this.daysToSpoil <= 0) || (this.fresh === false)){
            console.log(`${this.name} has spoiled.`)
        } else {
            (this.fresh)
                console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        }
    }
    aDayPasses(){
       this.daysToSpoil -=1
       this.isFresh()
       
    }
}

const chicken = new Food("chicken", 100, false)
const pizza = new Food("pizza", 30, true)
chicken.aDayPasses()
chicken.isFresh()
chicken.prepare()
pizza.aDayPasses()
pizza.isFresh()
pizza.prepare()


// Do not edit below this line
module.exports = Food;
