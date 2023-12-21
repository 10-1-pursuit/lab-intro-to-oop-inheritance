// Create class below
class Food {
    constructor(name, daysToSpoil, fresh = true) {
        this.name = name;
        this.daysToSpoil = daysToSpoil || 3;
        this.fresh = fresh;
    }
    prepare() {
        console.log(`${this.name} is being prepared `)
    }
    isFresh() {
        if (!fresh || daysToSpoil >= 3) {
            console.log(`There are 3 days left before ${this.name} spoils.`)
        } else {
            console.log(`${this.name} has spoiled.`)
        }
    }

    aDayPasses(foodItem) {
        this.daysToSpoil -= 1
        foodItem.isFresh()
    }
}

const foodItem1 = new Food("yogurt", 5, true)




// Do not edit below this line
module.exports = Food;
