{
    //ternary operator || optional chaining | nullish coalescing

    //ternary operator
    
    const age:number = 18

    if (age>= 18){
        console.log('You are an adult')
    }
    else{
        console.log('You are a minor')
    }

    const isAdult = age >= 18 ? 'You are an adult' : 'You are a minor'

    console.log({isAdult})

    //nullish coalescing
    //when making decision based on null and undefined

    const isAuthenticated = null

    const result1 = isAuthenticated ?? 'Guest'
    const result2 = isAuthenticated ? isAuthenticated : 'Hello'
    console.log({result1}, {result2}) //result1 is 'Guest' while result2 is 'Hello'
    //The ?? operator only checks for null or undefined.
    //The ternary operator evaluates truthiness (falsy values include 0, false, "", NaN, null, and undefined)
    
    //optional chaining
    type User = {
        name:string;
        address:{
            city:string;
            country:string;
            postalCode?:string;
        }
    }

    const user: User = {
        name: 'John Doe',
        address: {
            city: 'New York',
            country: 'USA'
        }
    }

    const permanentAddress = user?.address?.postalCode ?? 'N/A';
    console.log({permanentAddress}) ////permanentAddress is 'N/A'
}
