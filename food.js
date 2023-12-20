// Create class below
class Food {
    constructor(name, daysToSpoil, fresh = true) {
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh;
    }
    prepare() {
        console.log(`${this.name} is being prepared`)
    }
    isFresh() {
        if (this.fresh) {
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils`)
        } else {
            console.log(`${this.name} has spoiled`);
        }
    }
        aDayPasses() {
            this.daysToSpoil--;
            if (this.daysToSpoil === 0) {
                this.fresh = false;
            }
            this.isFresh();
        }
}

const pizzaBagel = new Food("pizza bagel", 3);
pizzaBagel.prepare();
pizzaBagel.isFresh();
pizzaBagel.aDayPasses();
pizzaBagel.aDayPasses();
pizzaBagel.aDayPasses();
// Do not edit below this line
module.exports = Food;
