const Tamagotchi = require("../tamagotchi.js");
const { Food, BadFood } = require("../food.js");


let banana, fizz;
let pear, orange;

beforeAll(() => {
  banana = new Food("Banana", 3);
  fizz = new Tamagotchi("Fizz");
  pear = new BadFood("Pear", 10, true);
  orange = new BadFood("orange");

});

describe("Food class", () => {
  test("Can call new on Food", () => {
    const bananaCreamPie = new Food("BananaCreamPie", 4);
    expect(bananaCreamPie).toBeTruthy();
  });

  test("Food has name that is a string", () => {
    expect(banana.name).toBe("Banana");
    expect(typeof banana.name).toBe("string");
  });

  test("Food has daysToSpoil that is a number", () => {
    expect(banana.daysToSpoil).toBe(3);
    expect(typeof banana.daysToSpoil).toBe("number");
  });

  test("Food has fresh property, set to be default to true", () => {
    expect(banana.fresh).toBe(true);
    expect(banana.fresh).toBe(true);
  });

  test("Food has prepare method", () => {
    expect(typeof banana.prepare).toBe("function");
    expect(banana.prepare).toBeTruthy();
  });

  test("Food prepare function calls console log", () => {
    console.log = jest.fn();
    banana.prepare();
    expect(console.log).toHaveBeenCalledWith("Banana is being prepared");
  });

  test("Food has isFresh method", () => {
    expect(typeof banana.isFresh).toBe("function");
    expect(banana.isFresh).toBeTruthy();
  });

  test("isFresh logs days left when food is fresh", () => {
    console.log = jest.fn();
    banana.isFresh();
    expect(console.log).toHaveBeenCalledWith(
      "There are 3 days left before Banana spoils."
    );
  });

  test("isFresh logs days left when food is fresh", () => {
    const grossBanana = new Food("eeewww what an old banana", -1);
    console.log = jest.fn();
    grossBanana.isFresh();
    expect(console.log).toHaveBeenCalledWith(
      "eeewww what an old banana has spoiled."
    );
  });

  test("Food has aDayPasses method", () => {
    expect(typeof banana.aDayPasses).toBe("function");
    expect(banana.aDayPasses).toBeTruthy();
  });

  test("aDayPasses decreases number of days to spoil", () => {
    banana.aDayPasses();
    expect(banana.daysToSpoil).toBe(2);
  });

  test("aDayPasses method calls isFresh method", () => {
    banana.isFresh = jest.fn();
    banana.aDayPasses();
    expect(banana.isFresh).toHaveBeenCalled();
  });
});

describe("Tamagotchi Class", () => {
  test("Can call new on Tamagotchi", () => {
    const buzz = new Tamagotchi("Buzz");
    expect(buzz).toBeTruthy();
  });

  test("Tamagotchi has name property that is a string", () => {
    expect(fizz.name).toBe("Fizz");
    expect(typeof fizz.name).toBe("string");
  });

  test("Tamagotchi has energy property that is a number, default value is 9", () => {
    expect(fizz.energy).toBe(9);
    expect(typeof fizz.energy).toBe("number");
  });

  test("Tamagotchi has full property that is a number, default value is 8", () => {
    expect(fizz.full).toBe(8);
    expect(typeof fizz.full).toBe("number");
  });

  test("Tamagotchi has mood property that a number, default value is 6", () => {
    expect(fizz.mood).toBe(6);
    expect(typeof fizz.mood).toBe("number");
  });

  test("Tamagotchi has sick property that is default false", () => {
    expect(fizz.sick).toBe(false);
    expect(typeof fizz.sick).toBe("boolean");
  });

  test("Tamagotchi has rehomed property that is default false", () => {
    expect(fizz.rehomed).toBe(false);
    expect(typeof fizz.rehomed).toBe("boolean");
  });

  test("Tamagotchi has greet method", () => {
    expect(typeof fizz.greet).toBe("function");
    expect(fizz.greet).toBeTruthy();
  });

  test("Tamagotchi has status method", () => {
    expect(typeof fizz.status).toBe("function");
    expect(fizz.status).toBeTruthy();
  });

  test("Tamagotchi has eat method", () => {
    expect(typeof fizz.eat).toBe("function");
    expect(fizz.eat).toBeTruthy();
  });

  test("eat method increases fullness by 2", () => {
    fizz.eat();
    expect(fizz.full).toBe(10);
    expect(fizz.sick).toBe(false);
  });

  test("eat method decreases energy by 1", () => {
    fizz.full = 6;
    fizz.energy = 4;
    fizz.eat();
    expect(fizz.energy).toBe(3);
    expect(fizz.sick).toBe(false);
  });

  test("if eat method makes fullness more than 10, tamagotchi becomes sick", () => {
    fizz.full = 10;
    fizz.energy = 4;
    fizz.eat();
    expect(fizz.full).toBe(12);
    expect(fizz.sick).toBe(true);
  });

  test("Tamagotchi has medicate method", () => {
    expect(typeof fizz.medicate).toBe("function");
    expect(fizz.medicate).toBeTruthy();
  });

  test("Tamagotchi medicate heals sick tamagotchi", () => {
    fizz.full = 12;
    fizz.energy = 4;
    fizz.sick = true;
    fizz.medicate();
    expect(fizz.sick).toBe(false);
  });

  test("Tamagotchi medicate for sick tamagotchi sets full to 9 and decreases energy by 3", () => {
    fizz.sick = true;
    fizz.full = 12;
    fizz.energy = 4;
    fizz.medicate();
    expect(fizz.full).toBe(9);
    expect(fizz.energy).toBe(1);
  });

  test("Tamagotchi medicate for not sick tamagotchi reduces energy by 1", () => {
    fizz.sick = false;
    fizz.energy = 4;
    fizz.medicate();
    expect(fizz.energy).toBe(3);
  });

  test("Tamagotchi has play method", () => {
    expect(typeof fizz.play).toBe("function");
    expect(fizz.play).toBeTruthy();
  });

  test("Tamagotchi play increases mood by 2, reduces energy & full by 1", () => {
    fizz.mood = 5;
    fizz.energy = 6;
    fizz.full = 8;
    fizz.play();
    expect(fizz.mood).toBe(7);
    expect(fizz.energy).toBe(5);
    expect(fizz.full).toBe(7);
  });

  test("Tamagotchi won't play if it is sick", () => {
    fizz.mood = 10;
    fizz.energy = 6;
    fizz.full = 8;
    fizz.sick = true;
    fizz.play();
    expect(fizz.mood).toBe(9);
    expect(fizz.energy).toBe(5);
    expect(fizz.full).toBe(8);
  });

  test("Tamagotchi won't play if mood is above 9", () => {
    fizz.mood = 10;
    fizz.energy = 6;
    fizz.full = 8;
    fizz.sick = false;
    fizz.play();
    expect(fizz.mood).toBe(10);
    expect(fizz.energy).toBe(4);
    expect(fizz.full).toBe(7);
  });

  test("Tamagotchi won't play if energy is less than or equal to 3", () => {
    fizz.mood = 4;
    fizz.energy = 3;
    fizz.full = 3;
    fizz.play();
    expect(fizz.mood).toBe(4);
    expect(fizz.energy).toBe(2);
    expect(fizz.full).toBe(3);
  });

  test("Tamagotchi has sleep method", () => {
    expect(typeof fizz.sleep).toBe("function");
    expect(fizz.sleep).toBeTruthy();
  });

  test("Sleep method increases energy by 4 and decreases full by 3", () => {
    fizz.mood = 4;
    fizz.energy = 1;
    fizz.full = 4;
    fizz.sleep();
    expect(fizz.mood).toBe(4);
    expect(fizz.energy).toBe(5);
    expect(fizz.full).toBe(1);
  });

  test("Tamagotchi has timePasses method", () => {
    expect(typeof fizz.timePasses).toBe("function");
    expect(fizz.timePasses).toBeTruthy();
  });

  test("If tamagotchi is not sick, timePasses, mood decreases by 2, fullness and energy decrease by 1", () => {
    fizz.mood = 9;
    fizz.energy = 9;
    fizz.full = 9;
    fizz.timePasses();
    expect(fizz.mood).toBe(7);
    expect(fizz.energy).toBe(8);
    expect(fizz.full).toBe(8);
  });

  test("If tamagotchi is sick, timePasses, mood decreases by 3, fullness and energy decrease by 2", () => {
    fizz.sick = true;
    fizz.mood = 9;
    fizz.energy = 9;
    fizz.full = 9;
    fizz.timePasses();
    expect(fizz.mood).toBe(6);
    expect(fizz.energy).toBe(7);
    expect(fizz.full).toBe(7);
  });

  test("Tamagotchi has badGuardian method", () => {
    expect(typeof fizz.badGuardian).toBe("function");
    expect(fizz.badGuardian).toBeTruthy();
  });

  test("If energy is less than or equal to 0, rehomed is true", () => {
    fizz.energy = 0;
    fizz.mood = 9;
    fizz.full = 9;
    fizz.badGuardian();
    expect(fizz.rehomed).toBe(true);
  });

  test("If mood is less than or equal to 0, rehomed is true", () => {
    fizz.mood = 0;
    fizz.energy = 9;
    fizz.full = 9;
    fizz.badGuardian();
    expect(fizz.rehomed).toBe(true);
  });

  test("If full is less than or equal to 0, rehomed is true", () => {
    fizz.mood = 9;
    fizz.energy = 9;
    fizz.full = 0;
    fizz.badGuardian();
    expect(fizz.rehomed).toBe(true);
  });
});

describe("BadFood class", () => {
  test("Can call new on BadFood", () => {
    const badApple = new BadFood("BadApple", 5);
    expect(badApple).toBeTruthy();
  });

  test("BadFood extends Food", () => {
    expect(pear instanceof BadFood).toBe(true);
    expect(pear instanceof Food).toBe(true);
  });

  test("BadFood has weapons property", () => {
    expect(pear.weapons).toBeTruthy();
    expect(pear.weapons).toBeInstanceOf(Array);
  });

  test("BadFood prepare method overrides Food's prepare method", () => {
    console.log = jest.fn();
    pear.prepare();
    expect(console.log).toHaveBeenCalledWith("I am Pear and my wins outweigh my losses!");
  });

  test("BadFood has fight method", () => {
    expect(typeof pear.fight).toBe("function");
    expect(pear.fight).toBeTruthy();
  });

  test("fight method reduces target's daysToSpoil based on weapon's hp", () => {
    const target = new Food("Target", 5);
    pear.fight(target);
    expect(target.daysToSpoil).toBeLessThan(5); // Assuming some damage is done
  });

  test("fight method logs the result of the fight", () => {
    const target = new Food("Target", 5);
    console.log = jest.fn();
    pear.fight(target);
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining("is down"));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining("but I am still up"));
  });

  test("BadFood has heal method", () => {
    expect(typeof pear.heal).toBe("function");
    expect(pear.heal).toBeTruthy();
  });

  test("Heal Method increases daysToSpoil by num", () => {
    const initialDaysToSpoil = pear.daysToSpoil;
    const amountToHeal = 7
    pear.heal(amountToHeal)
    expect(pear.daysToSpoil).toBe(initialDaysToSpoil + amountToHeal);
  });

  test("Heal methosd logs a message about healing", () => {
    console.log = jest.fn()
    pear.heal()
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining("has healed"));

  });
})