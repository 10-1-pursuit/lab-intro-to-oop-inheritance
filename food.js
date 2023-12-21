// Create class below
class Food {
    constructor(name, daysToSpoil, fresh=true) {
        this.name = name
        this.daysToSpoil=daysToSpoil
        this.fresh = fresh
    }
    prepare(){
        console.log(`${this.name} is being prepared`    )
    }
    isFresh(){
        console.log(this.daysToSpoil > 0
            ? `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
            : `${this.name} has spoiled.`)
    }
    aDayPasses(){
        this.daysToSpoil -=1
        this.isFresh()
    }
}


const apple = new Food('apple', 3)
// apple.isFresh()
// There are 3 days left before apple spoils.
// apple.aDayPasses()
// There are 2 days left before apple spoils.
// apple.prepare()
// apple is being prepared

// Do not edit below this line
module.exports = Food;
