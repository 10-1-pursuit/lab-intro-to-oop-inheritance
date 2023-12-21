// Create class below

class Food {
    constructor(name, daysToSpoil, fresh = true){
       this.name = name,
       this.daysToSpoil = daysToSpoil,
       this.fresh = fresh;
    }
    prepare() {
       console.log(`${this.name} is being prepared`)
    }
    isFresh() {
       if(this.daysToSpoil <= 0){
        console.log(`${this.name} has spoiled.`)
       } else {
        console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
       }
    }
 
   aDayPasses() {
       this.daysToSpoil -= 1;
       this.isFresh();
   }
}
  //  class BadFood extends Food {
  //      constructor(name, daysToSpoil, fresh = true){
  //       super(name, daysToSpoil, fresh)
  //         this.weapons = [
  //           {
  //             name: "Sprinkle Spray",
  //             hitPoints: 3,
  //           },
  //           {
  //             name: "Icing Deluge",
  //             hitPoints: 4,
  //           },
  //           {
  //             name: "Sugar Shock",
  //             hitPoints: 5,
  //           },
  //         ];
  //      }

  //      isFresh() {
  //       if(this.daysToSpoil <= 0){
  //           console.log(`${this.name} has spoiled.`)
  //          } else {
  //           console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
  //          }
  //       }

  //       prepare(){
  //           if()
  //           console.log(`I am ${this.name} and my calories are too high to count!
  //            or I am ${this.name} and you are just a passing trend! `)
  //       }
  //       fight(){
  //         const BadFood = new () 
  //       }
  //   }
    



 const foods = new Food("salmon", 1);
 foods.prepare();
 console.log(foods);
 console.log("------")
 foods.isFresh();
 console.log(foods);
 console.log("------")
 foods.aDayPasses();
 console.log(foods);
 console.log("-------")

// Do not edit below this line
module.exports = Food;
