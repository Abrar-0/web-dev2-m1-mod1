{//learning function
//Normal function
//Arrow function

function add(a:number, b:number) : number {
    return a + b;
}

add(1,2);

//Arrow function
const add2 = (a:number, b:number) : number => a + b;

// If we write a function inside an object --> method

const obj = {
    name: 'John',
    age: 30,
    balance: 1000,
    addAge (age:number):number {
        age += 5;
        return age;
    },
    addBalance (balance:number):string {
        return `Your balance is ${balance}`;
    }
};

const arr: number []= [1,2,3,4,5];

const newArray = arr.map((element:number) => element * element);
}
