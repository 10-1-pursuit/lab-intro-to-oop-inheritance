// Create class below
class Food {
    constructor(name, daysToSpoil, fresh = true) {
        this.name = name;
        this.daysToSpoil = daysToSpoil || 3;
        this.fresh = fresh;
    }
    prepare() {
        console.log(`${this.name} is being prepared`)
    }
    isFresh() {
        if (!this.fresh || this.daysToSpoil >= 3) {
            console.log(`There are 3 days left before ${this.name} spoils.`)
        } else {
            console.log(`${this.name} has spoiled.`)
        }
    }

    aDayPasses() {
        this.daysToSpoil -= 1
        this.isFresh()
    }
}

const foodItem1 = new Food("yogurt", 5, true)
console.log(foodItem1.prepare())
console.log(foodItem1.aDayPasses())
console.log(foodItem1.isFresh())



// Do not edit below this line
module.exports = Food;
