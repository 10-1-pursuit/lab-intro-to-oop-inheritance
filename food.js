// Create class below
class Food {
    constructor(name, daysToSpoil, fresh = true ) {
      this.name = name;
      this.daysToSpoil = daysToSpoil;
      this.fresh = fresh;
    }
    prepare(){
        console.log(`${this.name} is being prepared`);
    }
    isFresh(){
        if(this.fresh){
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        } else {
            console.log(`eeewww what an old banana has spoiled.`);
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
// Do not edit below this line
module.exports = Food;
