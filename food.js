// Create class below
class Food {
  constructor(name, daysToSpoil, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }
  prepare() {
    console.log(`${this.name} is being prepared`);
  }
  isFresh() {
    console.log(
      this.daysToSpoil > 0
        ? `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
        : `${this.name} has spoiled.`
    );
  }
  aDayPasses() {
    this.daysToSpoil -= 1;
    this.isFresh();
  }
}

const apple = new Food("apple", 3);
// apple.isFresh()
// There are 3 days left before apple spoils.
// apple.aDayPasses()
// There are 2 days left before apple spoils.
// apple.prepare()
// apple is being prepared

class BadFood extends Food {
  constructor(name, daysToSpoil = 20, fresh=true) {
    super(name, daysToSpoil, fresh);
    this.weapons = [
        {name:'pebble', hp:3},
        {name: 'saber', hp:4},
        {name: 'ray', hp:5}]
  }
  isFresh(){
    super.isFresh()
  }
  prepare(){
    console.log(`I am ${this.name} and my wins outweigh my losses!`)
  }
  fight(target) {
    const fightMethod = Math.floor(Math.random() * 3)
    target.daysToSpoil = target.daysToSpoil - this.weapons[fightMethod].hp
   console.log( `${target.name} is down ${target.daysToSpoil} , but I am still up ${this.daysToSpoil} !`)
  }
}


const pear = new BadFood('pear')
const orange = new BadFood('orange')
// pear.isFresh()
// pear.prepare()
orange.fight(pear)
orange.prepare()
pear.fight(orange)

// Do not edit below this line
module.exports = Food;
