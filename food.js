// Create class below
class Food {
  constructor(name, daysToSpoil = 0, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }
  prepare() {
    console.log(`${this.name} is being prepared`);
  }
  isFresh() {
    if (this.fresh === true && this.daysToSpoil > 0) {
      console.log(
        `There ${this.daysToSpoil === 1 ? "is" : "are"} ${
          this.daysToSpoil
        } day${this.daysToSpoil === 1 ? "" : "s"} left before ${
          this.name
        } spoils`
      );
    } else {
      console.log(`The ${this.name} has spoiled`);
    }
  }
  aDayPasses() {
    this.daysToSpoil -= 1;
    this.isFresh();
  }
}

const pasta = new Food("Alfredo", 5);
// console.log(pasta)
// pasta.prepare()
// pasta.isFresh();
pasta.aDayPasses();

// Do not edit below this line
module.exports = Food;
