{
  //type alias

  type User = {
    name: string;
    age: number;
    address?: string;
    phone?: number;
  };

  const user: User = {
    name: "John",
    age: 30,
    address: "Nigeria",
  };

  const user2: User = {
    name: "Jane",
    age: 25,
    phone: 123456789,
  };

  type UserName = string
  type isAdmin = boolean
  const userName: UserName = "John Doe";
  const isAdmin: isAdmin = true;

  type Add = (x: number, y: number) => number;
  
  const add : Add = (num1, num2) => num1 + num2;
}
