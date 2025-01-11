{
    //type assertion
    let anything : any; //any type can be assigned to any type
    anything = "Hello";

    (anything as string).toUpperCase();

    const kgtogm = (value : number | string) : number | string | undefined => {
        if (typeof value === 'string'){
            const convertedValue = parseFloat(value);
            return `the converted value is ${convertedValue * 1000} gm`;    
        }
        if (typeof value === 'number'){
            return value * 1000;
        }

    }   

    const case1 = kgtogm(12) as number
    const case2 = kgtogm("2") as number 

    console.log(case2) 


    type errorMsg ={
        message: string;
    }

    try{    
    }
    catch(e){
        console.log((e as errorMsg).message)
    }   
}
