/* 
- Create a tamagotchi class
- Attributes
  - name: string
  - energy: number, default value 9
  - full: number, default value 8
  - mood: number, default value 6
  - sick: boolean, default false
  - rehomed: boolean, default false

- Methods
  - greet: Tamagotchi console logs `Hello, I'm <name>!`
  - status: Tamogotchi console logs energy, full, mood, and sick values (see below for sample message)
  - eat: increases fullness by two, decreases energy by 1,
    - if eat method makes fullness more than 10, tamagotchi becomes sick (sick = true)

    - medicate:
  - if tamagotchi is sick - set full to 9 - decrease energy by 3
  - if tamagotchi is not sick
    - console log refusal to take medicine
      - reduce energy by 1

      - badGuardian
  - logs a message that the tamagotchi has been rehomed
  - if energy is less than or equal to 0, set rehomed to true
  - if mood is less than or equal to 0 set rehomed to true
  - if full is less than or equal to true set rehomed to true

 */

class Tamagotchi {
  constructor(
    name,
    energy = 9,
    full = 8,
    mood = 6,
    sick = false,
    rehomed = false
  ) {
    this.name = name;
    this.energy = energy;
    this.full = full;
    this.mood = mood;
    this.sick = sick
    this.rehomed = rehomed;
    
};
  //- greet: Tamagotchi console logs `Hello, I'm <name>!`
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  };
  //- status: Tamogotchi console logs energy, full, mood, and sick values (see below for sample message)
  status() {
    console.log(
      `${"*".repeat(18)} \n  My mood is: ${this.mood} \n I am this full: ${
        this.full
      } \n My energy is: ${this.energy} \n ${
        this.sick ? "I am sick" : "I am not sick"
      } \n${"*".repeat(18)}`
    );
  };
 
  eat() {
    this.full = this.full + 2  // - eat: increases fullness by two, 
    this.energy--; // - eat: increases fullness by two, decreases energy by 1,
    // if eat method makes fullness more than 10, tamagotchi becomes sick (sick = true)*/
    if(this.full > 10) {
      this.sick = true;
    }
  };
  //   - medicate:
  medicate() {
    //   - if tamagotchi is sick - set full to 9 - decrease energy by 3  
    if(this.sick === true) {
      //this.timePasses //FROM TEST If tamagotchi is not sick, timePasses...
      this.full = 9;
      console.log(this.full)
      this.energy = this.energy - 3;
      this.sick = false
    } else if (this.sick === false){
      //   - if tamagotchi is not sick
      //       - reduce energy by 1
      console.log("refusal to take medicine");
      this.energy--;
      //     - console log refusal to take medicine
    }
  };
  //- sleep:-
  sleep() {
    //increases energy by 4
    this.energy += 4;
    //decreases full by 3
    this.full -= 3;
  };
  badGuardian() {
    //   - logs a message that the tamagotchi has been rehomed
    //   - if energy is less than or equal to 0, set rehomed to true
    if (this.energy <= 0) {
      this.rehomed = true;
    }
    //   - if mood is less than or equal to 0 set rehomed to true
    if (this.mood <= 0) {
      this.rehomed = true;
    }
    //   - if full is less than or equal to true set rehomed to true
    if (this.full < 0) {
      this.rehomed = true;
    }
  };
  // timePasses:
  timePasses() {
    if (this.sick === false) {
      //   -if tamagotchi is sick - mood decreases by 3, fullness and energy decrease by 2
      this.mood -= 2;
      this.full --;
      this.energy --;
    } else {
      // - if tamagotchi is not sick - mood decreases by 2, fullness and energy decrease by 1
      this.mood -= 3;
      this.full -= 2;
      this.energy -= 2;
    }
  };
// play: //increases mood by 2, reduces energy and full by 1,
  play(){
  if(this.sick){
      //- will not play if tamagotchi is sick,
      this.mood--;
      this.energy--;
      //- if asked to play when sick, reduce mood and energy by 1
  }else if(this.mood > 9){ //   - will not play if mood is above 9,
      this.energy -= 2 ;// reduce energy by 2 and full by 1
      this.full--;
  }else if(this.energy <= 3){ //   - will not play if energy is less than or equal to 3
    console.log("I'm too tired to play")
    this.energy--; //- reduce energy by 1
    //    - console log "I am too tired to play" 
   }else{
    //increases mood by 2, reduces energy and full by 1,
    this.mood += 2;
    this.energy--
    this.full--
   }
  }
}


//   - will not play if energy is less than or equal to 3
//     - console log "I am too tired to play" - reduce energy by 1



// Create class below
const tommy = new Tamagotchi("xaver");
console.log(tommy)
tommy.eat()
console.log(tommy)
//console.log(tommy.eat(), tommy.eat(), tommy);
// Do not edit below this line

module.exports = Tamagotchi;
