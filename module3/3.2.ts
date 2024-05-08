{
  //

  // oop inheritance
  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getStudy(numOfHours: number) {
      console.log(`${this.name} will study ${numOfHours}`);
    }
  }

  // inherit from parent
    class Student extends Parent {
        year: number;
        
    constructor(name: string, age: number, address: string, year: number) {
        super(name, age, address);
        this.year = year;
    }
  }

  const student1 = new Student("Student", 20, "india", 2024);

    console.log(student1.year);
    
  //
}
