// Create class below
class Food {
  constructor(name, daysToSpoil, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  } 
}

const pasta = new Food("Alfredo", 5, true)
console.log(pasta)




// Do not edit below this line
module.exports = Food;
