{
  const obj = {
    name: "John",
  };

  //spread operator
  //destructuring
  //rest operator

  //spread operator

  const bros1: string[] = ["John", "Doe"];
  const bros2: string[] = ["Jane", "Mary"];

  bros1.push(...bros2);

  const mentors = {
    typescript: "John",
    javascript: "Jane",
    python: "Mary",
  }

  const mentors2 = {
    nextjs: "John",
    react: "Jane",
    nodejs: "Mary",
  }

  const mentor ={...mentors, ...mentors2};


  //rest operator
    const greetFriends = (...friends: string[]) =>{
        friends.forEach((friend:string) => console.log(`Hello, ${friend}`));
    }

    greetFriends('John', 'Jane', 'Mary');

}
