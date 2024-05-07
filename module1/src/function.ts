function sum(num1:number, num2:number) {
    return num1 + num2;
}

sum(2, 4)


const user1 = {
    name: 'hello',
    balance: 0,
    addBalance(balance:number):string {
        return `My balance ${this.balance+balance}`
    }
}

const arr:number[] = [1, 2, 20]

const newArr: number[] = arr.map((elem:number):number => elem * elem)

