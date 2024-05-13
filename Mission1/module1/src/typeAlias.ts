{
    // object type alias
    type TStudent = {
        name: string,
        age: number,
        contactNo?: number,
        gender: string,
        address: string
    }

    const student1: TStudent = {
        name: 'joy',
        age: 35,
        gender: 'male',
        address: 'ind'
    }


    // function type alias

    type TAdd = (num1: number, num2: number) => number;

    const add:TAdd = (num1, num2) => num1 + num2;

}