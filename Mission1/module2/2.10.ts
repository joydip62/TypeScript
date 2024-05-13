{
  //
  // map
  const arrOfNumber: number[] = [1, 2, 3, 4, 5];

  const arrOfString: string[] = arrOfNumber.map((item) => {
    return item.toString();
  });
  console.log(arrOfString);

    // mapped type
    
    type AreaNumber = {
        width: number,
        height: number,
    }
    type Height = AreaNumber['height']; // look up type

    // type AreaString = {
    //     width: string,
    //     height: string,
    // }

    // generic type
    type AreaString<T> = {
        [key in keyof T]: T[key] //look up type
    }


    const area1: AreaString<{ height: string; width: boolean }> = {
        height: "100%",
        width: true,
    }

  //
}