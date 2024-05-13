{
    //
    // constraints 

    // without constraints
     const addCoursesForStudent = <T>(student: T) => {
       const course = "next to courses";
       return {
         ...student,
         course,
       };
     };

    const students = addCoursesForStudent({ hello: 'world' });
    


    // with constraints
    const addCoursesForStudent1 = <T extends { id: number; name: string }>(student: T) => {
        const course = "next to courses";
        return {
         ...student,
          course,
        };
    };
    const students1 = addCoursesForStudent1({ id: 23123, name: 'world' });
    



    //
}