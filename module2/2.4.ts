{
    // interface -> generic interface

    interface Developer <T, Y> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        },
        smartwatch: T,
        bike? :Y
    }

    type smartwatchA = {
      brand: string;
      model: string;
      display: string;
    };
    
    const poorDeveloper : Developer <smartwatchA, null> = {
        name : 'A',
        computer : {
            brand : 'Acer',
            model : 'Predator',
            releaseYear : 2019
        },
        smartwatch : {
            brand:'Apple',
            model:'Watch 6',
            display: 'OLED',
        }
    }

    interface smartwatchB {
      brand: string;
      model: string;
      heartrate: boolean;
      sleeptrack: boolean;
    }

    interface bike {
        model: string;
        brand: string;
        cc: number;
    }

    const richDeveloper : Developer <smartwatchB,bike> = {
        name : 'B',
        computer:{
            brand : 'Apple',
            model : 'Macbook Pro',
            releaseYear : 2020
        },
        smartwatch : {
            brand:'Samsung',
            model:'Galaxy Watch 3',
            heartrate: true,
            sleeptrack: true
        },
        bike:{
            brand: 'Gixxer',
            model: 'SF 250',
            cc: 250
        }
    }
}
