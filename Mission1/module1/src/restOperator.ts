// const greetFriends = (frnd1:string, frnd2:string, frnd3:string) => {
//     console.log(`hi ${frnd1} ${frnd2} ${frnd3}`);
// }

// making rest operator
const greetFriends = (...friends:string[]) => {
    friends.forEach((friend: string)=> console.log(`hi ${friend}`))
}

greetFriends('abul', 'babul')


