const team1: string[] = ['a', 'b', 'c']
const team2: string[] = ['d', 'e', 'f']

team1.push(...team2)

const car ={
    best: 'BMW',
    moderate: 'Toyota' 
}

const bike = {
    new: 'SUV',
    old: 'Yamaha'
}

const allList = {
    ...car,
    ...bike
}