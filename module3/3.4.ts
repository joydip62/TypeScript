{
  //
  // instanceOf guard

  class Animal {
    name: string;
    species: string;

    constructor(species: string, name: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("i am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(species, name);
      }
      makeBark() {
          console.log('i am making barking');
      }
    }
    
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(species, name);
      }
      makeMew() {
          console.log('i am making mew');
      }
    }

    // making function call for smart way
    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }
    
    const isCat = (animal: Animal) : animal is Cat => {
        return animal instanceof Cat;
    }


    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        } else if (isCat(animal)) {
            animal.makeMew();
        } else {
            animal.makeSound();
        }
    }
    const dog = new Dog("dog", "dog mammal");
    const cat = new Cat("cat", "cat mammal");
    
getAnimal(cat);
    
  //
}
