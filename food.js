// Create class below

class Food {
  constructor(name, daysToSpoil, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }

  prepare() {
    console.log(`${this.name} is being prepared`);
  };

  isFresh() {
    if (this.daysToSpoil > 0) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      this.fresh = false;
      console.log(`${this.name} has spoiled.`);
    }
  };

  aDayPasses() {
    this.daysToSpoil--;
    if (this.daysToSpoil <= 0) {
      this.fresh = !this.fresh;
    }
    return this.isFresh();
  };
}

const tomato = new Food("tomato", 3, true);

//Create a new class `BadFood` that inherits from the `Food` class
// class BadFood extends Food {
//   constructor(name, daysToSpoil = 20, fresh = true) {
//     super(name, daysToSpoil);
//     //name: (inherited), daysToSpoil:(inherited), fresh:(inherited)
//     this.fresh = daysToSpoil <= 0 ? false : true;
//     this.weapons = [
//       {
//         name: "Mouth Burn",
//         hitPoints: 3,
//       },
//       {
//         name: "Hot Pepper Storm",
//         hitPoints: 4,
//       },
//       {
//         name: "Cheese Grease",
//         hitPoints: 5,
//       },
//     ];
//   }
//   prepare() {
//     ///prepare: overwrite this method so that instead it console logs a fight preparation method by taunting the other food `I am <name> and my calories are too high to count!` or `I am <name> and you are just a passing trend!`
//     console.log(`I am ${this.name} and my calories are to high to count!`);
//   }
//   fight(target) {
//     console.log("This is my obj this:", this);
//     //select a random fight method
//     let selectedIndex = Math.floor(Math.random() * 3);
//     //- fight: takes in an instance of a `BadFood`, decreases the hit points by the number from the selected fight method.

//     target.daysToSpoil =
//       target.daysToSpoil - this.weapons[selectedIndex].hitPoints;

//     //Finally, console logs a message with both `daysToSpoil` properties
//     console.log(
//       `${target.name} is down to ${target.daysToSpoil}, but I am stil up to ${this.daysToSpoil}`
//     );
//   }
//   //added a funtion to add my weapons
//   weaponsAdder(array) {
//     array.forEach((weapon) => this.weapons.push(weapon));
//   }
//   // - Add a heal method that allows the food to increase daysToSpoil
//   heal() {
//     this.daysToSpoil += 1;
//   }
//   // - Add block method that allows the food to take 0 damage, no matter what
//   block() {
//     console.log(`This is my block this:,`, this);
//     console.log(`you have been blocked by a ${this.name}!`);
//   }
//   // - Add an action selector method that randomly chooses between fight, heal and block
//   selector(target) {
//     if (target.daysToSpoil <= 0) {
//       return `${target.name} hath been defeated`;
//     } else if (this.daysToSpoil <= 0) {
//       return `${this.name} hath been defeated by ${target.name}`;
//     }
// ;

//     let randomSelection = Math.floor(Math.random() * 3);
    
//     switch(randomSelection){
//         case 0: 
//         this.block();
//         break;
//         case 1: 
//         this.fight(target);
//         break;
//         case 2: 
//         this.heal();
//         break
//     }
  
//    return this.selector(target);
//   };


// }

// - Add a victory method that announces the victor
// - Create a simple web app that allows you to play as a single or two player by using buttons and seeing status updates
// const weaponArr = [
//   {
//     name: "Sprinkle Spray",
//     hitPoints: 3,
//   },
//   {
//     name: "Icing Deluge",
//     hitPoints: 4,
//   },
//   {
//     name: "Sugar Shock",
//     hitPoints: 5,
//   },
// ];

// const weaponArrB = [
//   {
//     name: "Mouth Burn",
//     hitPoints: 3,
//   },
//   {
//     name: "Hot Pepper Storm",
//     hitPoints: 4,
//   },
//   {
//     name: "Cheese Grease",
//     hitPoints: 5,
//   },
// ];
// const badBann = new BadFood("bananna", 30, true);
// const badApple = new BadFood('sour apple')
// badBann.selector(badApple)
// const badGrape = new BadFood("grape");

// console.log(badBann.fight(badGrape), badBann.selector(badGrape) );

// Do not edit below this line
module.exports = Food;
