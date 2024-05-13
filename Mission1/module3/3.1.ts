{
  //
  // class
  class Animal {
    name: string;
    species: string;
    sounds: string;

    constructor(name: string, species: string, sounds: string) {
      this.name = name;
      this.species = species;
      this.sounds = sounds;
    }

    makeSounds() {
      console.log(`The ${this.name} says ${this.sounds}`);
    }
  }

    //   parameter properties
    class Animal2 {
      constructor(public name: string, public species: string, public sounds: string) {}
      makeSounds() {
        console.log(`The ${this.name} says ${this.sounds}`);
      }
    }
  const dog = new Animal("dog", "mammal", "ghew");
  dog.makeSounds();
  //
}
