// Create class below
class Food {
    constructor(name, daysToSpoil, fresh = true) {
        this.name = name
        this.daysToSpoil = daysToSpoil
        this.fresh = fresh
    }
    prepare(){
        console.log(`${this.name} is being prepared`)
    }
    isFresh(){
        if(this.daysToSpoil <= 0){
            console.log(`${this.name} has spoiled.`)
        } else {
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        }
    }
    aDayPasses(){
        this.daysToSpoil -=1
        this.isFresh()
    }
}
const food1 = new Food("bananas", 5)
const food2 = new Food('salmon', 2)
food1.prepare()
console.log(' ')
food2.prepare()
console.log(' ')
food1.isFresh()
console.log(' ')
food2.isFresh()
console.log(' ')
food1.aDayPasses()
console.log(' ')
food2.aDayPasses()

// Do not edit below this line
module.exports = Food;
