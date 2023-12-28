// Create class below
class Food {
  constructor(name, daysToSpoil, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = true;
  }
  prepare() {
    console.log(`${this.name} is being prepared`);
  }
  isFresh() {
    if (this.daysToSpoil > 1) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else if (this.daysToSpoil === 1) {
      console.log(`There is 1 day left before ${this.name} spoils`);
    } else if (this.daysToSpoil <= 0) {
      console.log(`${this.name} has spoiled.`);
    }
  }
  aDayPasses() {
    this.daysToSpoil -= 1;
    this.isFresh();
  }
}

//create an instance
const pizza = new Food("pizza", "3");

// Do not edit below this line
module.exports = Food;
