{
    // polymorphism 
    class Person{
        getSleep() {
            console.log("i am sleeping");
        }
    }

    class Student extends Person{
        getSleep() {
            console.log("student is sleeping for 7 hour");
        }
    }

    class Developer extends Person {
        getSleep() {
            console.log("developer is sleeping for 10 hour");
        }
    }

    const getSleepings = (param: Person) => {
        param.getSleep();
    }
    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();


    getSleepings(person3);

    // 
}