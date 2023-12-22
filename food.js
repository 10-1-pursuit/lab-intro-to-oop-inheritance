// Create class below
class Food {
    constructor(name, daysToSpoil, fresh){
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = true
    }
    prepare(){
        console.log(`${this.name} is being prepared`)
    }

    isFresh() {
        if (this.daysToSpoil > 0) {
          console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`);
        } else {
          console.log(`${this.name} has spoiled.`);
        }
      }

      aDayPasses() {
        this.daysToSpoil -= 1;
        this.isFresh();
      }

}

const chicken = new Food("chicken", 5, fresh=true)
console.log(chicken.prepare())
console.log(chicken.isFresh())
console.log(chicken.aDayPasses())
// Do not edit below this line
module.exports = Food;
