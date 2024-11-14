{
    //nullable type

    const searchName = (value: string | null) => {
        if(value){
            console.log('Searching')
        }
        else{
            console.log('Nothing')
        }
    }

    searchName(null)

    //unknown type

    const getSpeed = (value: unknown) => {
        if(typeof value === 'number'){
            console.log(`Speed: ${value} km/hr`)
        }
        else if (typeof value === 'string'){
            const [result, unit] = value.split(' ')
            console.log(result)
        }
        else{
            console.log('Invalid input')
        }
    }

    getSpeed(null)

    //never type

    const throwError= (msg:string):never=>{
        throw new Error(msg)
    }

    throwError('Invalid')
}
