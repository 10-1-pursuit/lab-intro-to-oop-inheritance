// Create class below
class Food {
    constructor(name, daysToSpoil, IsFresh = true ) {
      this.name = name;
      this.daysToSpoil = daysToSpoil;
      this.IsFresh = IsFresh;
    }
    prepare(){
        console.log(`${this.name} is being prepared`);
    }
    isFresh(){
        if(this.fresh){
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        } else {
            console.log(`${this.name} has spoiled.`);
        }
    }
    aDayPasses(){
        if(this.daysToSpoil >0){
            this.daysToSpoil--;
            this.isFresh();
            }else{
                console.log(`${this.name} has already spoiled.`);   
        }
    }
}
const iceCream = new Food('Ice Cream', 3);
iceCream.prepare();
iceCream.aDayPasses();
// Do not edit below this line
module.exports = Food;
