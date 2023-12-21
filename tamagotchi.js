// Create class below
// Create a virtual pet that can play, eat, sleep and more! Try to keep your pet happy or else it will be rehomed!

class Tamagotchi {
    constructor(name, energy, full, mood, sick = false, rehomed = false) {
        this.name = name;
        this.energy = energy || 9;
        this.full = full || 8;
        this.mood = mood || 6;
        this.sick = sick;
        this.rehomed = rehomed;
    }
    greet() {
        return console.log(`Hello, I'm ${this.name}`)
    }
    status() {
        return console.log(`Energy: ${this.energy}, Hunger: ${this.full}, isSick: ${this.sick}, isRehomed:${this.rehomed}.`)
    }
    eat() {
        this.full += 2
        this.energy -= 1
        if (this.full > 10) {
            this.sick = true
        }

    }
    medicate() {
        if (this.sick) {
            this.full = 9
            this.energy -= 3
            this.sick = false
        } else if (!this.sick) {
            this.energy -= 1
            return console.log("Tamagotchi refuses medicine")
        }
    }
    play() {
        if (this.sick === true) {
            this.mood -= 1
            this.energy -= 1
        }
        else if (this.sick === false && this.mood > 9) {
            this.energy -= 2
            this.full -= 1
        } else if (this.energy <= 3) {
            this.energy -= 1
            return console.log("I am too tired to play")
        } else {
            this.mood += 2;
            this.energy -= 1;
            this.full -= 1;
        }

    }
    sleep() {
        this.energy += 4
        this.full -= 3
    }
    timePasses() {
        if (this.sick === false) {
            this.mood -= 2
            this.full -= 1
            this.energy -= 1
        }
        if (this.sick === true) {
            this.mood -= 3
            this.full -= 2
            this.energy -= 2
        }
    }
    badGuardian() {
        if (this.energy <= 0) {
            this.rehomed = true
        } else if (this.mood <= 0) {
            this.rehomed = true
        } else if (this.full <= 0) {
            this.rehomed = true
        }
        return (`Your ${this.name} 's mood, full, and energy have been neglected, your ${this.name} has been rehomed!`)
    }
}

const mittens = new Tamagotchi("mittens", 10, 10, false, false)
mittens.eat()
mittens.play()
mittens.sleep()
mittens.medicate()
mittens.timePasses()
console.log(mittens.greet())
console.log(mittens.status())


module.exports = Tamagotchi;
