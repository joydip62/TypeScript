{
    // generic type

    type TGenericArray<T> = Array<T>;

    const rollNumber: TGenericArray<number> = [1, 2, 3, 4, 5];
    const rollName: TGenericArray<string> = ["A", "B", "C", "D", "E"];
    const roll: TGenericArray<number | string> = [1, "A", 2, "B", 3, "C", 4, "D", 5, "E"];

    // generic tuple

    type TGenericTuple<X, Y> = [X, Y];
    
    const manush: TGenericTuple<string, string> = ['A', 'B']
    
    const userId: TGenericTuple<number, { name: string, email: string }> = [1234, { name: 'John', email: 'john@example.com' }]
    
}