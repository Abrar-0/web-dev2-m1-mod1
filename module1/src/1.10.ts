{
    //union type
    type FrontendDeveloper= 'fakibaz' | 'junior';
    type FullstackDeveloper= 'frontend' | 'expert';

    const newDeveloper : FrontendDeveloper = 'fakibaz';

    type Developer = FrontendDeveloper | FullstackDeveloper;

    type User = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    }

    const user : User = {
        name: 'fakibaz',
        age: 25,
        gender: 'male'
    }

    //intersection type

    type FrontendDeveloper2 = {
        skill: string[];
        designation1: 'frontend';
    }

    type BackendDeveloper2 = {
        skill: string[];
        designation2: 'backend';
    }

    type FullstackDeveloper2 = FrontendDeveloper2 & BackendDeveloper2;

    const newDeveloper2 : FullstackDeveloper2 = {
        skill: ['js', 'ts', 'react', 'node'],
        designation1: 'frontend',
        designation2: 'backend'
    }
}
