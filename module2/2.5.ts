{
  //
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const resGeneric = createArrayWithGeneric<string>("India");

  type User = { name: string; age: number; gender: string };

  const resGenericObj = createArrayWithGeneric<User>({
    name: "India",
    age: 20,
    gender: "male",
  });

  // tuples
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res1 = createArrayWithTuple<string, number>("India", 1212);

  const res2 = createArrayWithTuple<string, { id: number; name: string }>(
    "asd",
    {
      id: 123,
      name: "India",
    }
    );
    

    // ================
    const addCourses = <T>(student: T) => {
        const course = 'next to courses';
        return {
           ...student,
            course
        }
    }

    const student1 = addCourses({ name: "Student", id: 213, course: 'web course' })
    const student2 = addCourses({ name: "Student", id: 213, isEmp: true })
  //
}
