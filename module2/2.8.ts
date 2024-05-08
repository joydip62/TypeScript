{
  //

    type Something = { something: string };
    
  // simulate promise
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("some error");
      }
    });
  };

  // calling promise
  const showData = async (): Promise<Something> => {
      const data: Something = await createPromise();
      return data;
    // console.log(data);
  };
  showData();

  type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

  const getTodo = async (): Promise<Todo> => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const todo = await data.json();
    return todo;
    // console.log(todo);
  };
  getTodo();

  //
}
