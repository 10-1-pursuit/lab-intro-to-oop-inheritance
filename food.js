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
        } spoils.`
      );
    } else {
      console.log(`${this.name} has spoiled.`);
    }
  }
  aDayPasses() {
    this.daysToSpoil -= 1;
    this.isFresh();
  }
}

const pasta = new Food("Alfredo", 5);
console.log(pasta);
pasta.prepare()
// pasta.isFresh();
// pasta.aDayPasses();

// Bonus
class BadFood extends Food {
  constructor(name, daysToSpoil = 20, fresh = true) {
    super(name, daysToSpoil, fresh);
    this.weapons = [
      { name: "knife", hp: 5 },
      { name: "fork", hp: 4 },
      { name: "spoon", hp: 3 },
    ];
  }
  isFresh() {
    super.isFresh()
  }
  prepare(){
    console.log(`I am ${this.name}, and with each bite, you'll savor the flavor of your defeat. Bon appétit, fool!`)
  }
  fight(){}
}

const badFoods = new BadFood("Pickle");
badFoods.prepare()
// console.log(badFoods);

// Do not edit below this line
module.exports = Food;
