//destructuring

//object destructuring
{
    const user = {
        name: {
            firstName: "John",
            lastName: "Doe",
        },
        age: 30,
        location: "Nigeria",
    }

    const {age, name:{lastName: alias_last}} = user //aliasing lastName


//array destructuring

    const myFriends = ['Chandler', 'Joey', 'Ross', 'Monica', 'Rachel', 'Phoebe'];

    //const [a,b,c] = myFriends;
    const [,,,c, ...rest] = myFriends; //skipping first 3 elements and storing the rest in rest
}

