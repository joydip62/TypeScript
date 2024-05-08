{
    //conditional type

    type a1 = number
    type a2 = string

    type a3 = a1 extends null ? true : false
    type a4 = a1 extends null ? true : a2 extends string ? true : false


    // keyof condition

    type Joy = {
        bikes: number;
        cards: string;
        cars: string;
    }
    type CheckCondition<T> = T extends keyof Joy ? true : false 

    type HasBikes = CheckCondition<"bikes">



    // 
}