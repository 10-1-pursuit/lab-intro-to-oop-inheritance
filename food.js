// Create class below

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

// const chicken = new Food("chicken", 100, false)
// const pizza = new Food("pizza", 30, true)
// chicken.aDayPasses()
// chicken.isFresh()
// chicken.prepare()
// pizza.aDayPasses()
// pizza.isFresh()
// pizza.prepare()


// Do not edit below this line
module.exports = Food;
