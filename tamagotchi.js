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
        if (daysToSpoil >= 3) {
            console.log(`There are 3 days left before ${this.name} spoils.`)
        } else if (!fresh) {
            console.log(`The ${this.name} is no longer fresh and will expire in ${this.daysToSpoil} days`)
        }
    }

    aDayPasses(foodItem) {
        this.daysToSpoil -= 1
        foodItem.isFresh()
    }
}

// Do not edit below this line
module.exports = Tamagotchi;
