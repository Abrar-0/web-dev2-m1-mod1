{
    //interface

    //typealias -> used for primitive type
    type user1 = {
        name: string;
        age: number;
    }

    interface user2 {
            name: string;
            age: number;
        }

    type userwithAddress = user1 & {address: string}; //increasing property using intersection (type alias)
    interface userwithAddress2 extends user2 {address: string}; //increasing property using intersection (interface)  
    //can be user1 also -> type can be extended to interface and vice versa    

    //can be user1 also -> type alias
    const userA: user2 = {
        name: "John",
        age: 25
    }

    //can be userwithAddress also -> type alias
    const userB : userwithAddress2 ={
        name: "John",
        age: 25,
        address: "NY" //address is added
    }

    // js -> object array -> objects function -> objects
    
    //array
    type Roll1 = number []

    interface Roll2 {
        [index:number] : number
    }

    const roll1: Roll2 = [1,2,3,4,5] //can be Roll1 also

    //function
    
    type Add1 = (num1 :number, num2: number) => number
    
    interface Add2 {
        (num1:number, num2:number) : number
    }
    
    const add1 : Add1 = (num1, num2) => num1 + num2
}
