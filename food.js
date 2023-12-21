// Create class below
class food {
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
            console.log(`${this.name} is spoiled`)
        } else {
            console.log(`There are ${this.daysToSpoil} days left befor ${this.name} spoils`)
        }
    }
    aDayPasses(){
        this.daysToSpoil -=1
        this.isFresh()
    }
}

// Do not edit below this line
module.exports = Food;
