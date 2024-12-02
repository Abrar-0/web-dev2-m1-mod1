{
    //generic type

    //const rollNum : number [] = [1,2,3,4];
    const rollNum : Array<number> = [1,2,3,4];

    //const mentors : string[] =  ['A','B','C'];
    const mentors : Array<String> =  ['A','B','C'];
    
    //const bools : boolean[] = [true,false,true];
    const bools : Array<boolean> = [true,false,true];

    type genericType<T> = Array<T>

    const rollNums : genericType<number> = [1,2,3,4];
    const mentorss : genericType<String> =  ['A','B','C'];
    const boolss : genericType<boolean> = [true,false,true];

    const user : genericType <{name: string , age: number}> = [
        {
            name : 'A',
            age : 20
        },
        {
            name : 'B',
            age : 21
        },
    ]

    type GenericTuple<T,U> = [T,U]
    
    const manush : GenericTuple <string,string> = ['Mr. x','Mr. y'];
    const biya : GenericTuple <number, number> = [20,21];
    const details : GenericTuple < number, {name:string, email: number} > = [ 1234, {name:'A', email:2}]

}
