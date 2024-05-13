{
// generic constraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship"; // manually defined

    type Owner2 = keyof Vehicle;

    // dynamic constraint
    const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }
    const user = {
        name: "John",
        age: 20,
        gender: "male"
    }

    const result1 = getProperty(user, 'name');


}