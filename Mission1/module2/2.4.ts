{
    // interface - generic

    interface Developer<T> {
        name: string;
        computer: {
            brands: string;
            models: string;
            releaseYear: number;
        };
        smartWatch: T;
    }

    type TSmartWatch = {
      brand: string;
      model: string;
      releaseYear: number;
      color: string;
      heartTracking: boolean;
    };

    const poorDev: Developer<TSmartWatch> = {
        name: "John",
        computer: {
            brands: "Apple",
            models: "MacBook Pro",
            releaseYear: 2020
        },
        smartWatch: {
            brand: "Apple",
            model: "Watch",
            releaseYear: 2020,
            color: "Black",
            heartTracking: true,
        }
    }
}