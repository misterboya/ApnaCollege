console.log("this is generics!!!");
const score: Array<number> = [];
console.log(score.push(4));
console.log(score.push(3));
console.log(score.push(2));
console.log(score.push(1));

function identityOne(val: number | boolean) : number | boolean {
    return val;
}

function identityTwo(val: any) : any {
    return val;
}

function identityThree<Type>(val: Type) : Type {
    return val;
}

function identityFour<T>(val: T) : T {
    return val;
}

interface Bottle {
    brand: string;
    type: number;
}

const botEg = identityFour<Bottle>({brand: "nike", type: 50});
console.log(`interface example brand is: ${botEg.brand} and type is: ${botEg.type}`);

function getSearchProducts<T>(products: T[]) : T {
    //do some database operations
    const myIndex = 3;
    return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]) : T => {
    //do some database operations
    const myIndex = 4;
    return products[myIndex];
}

console.log(`search more products results: ${getMoreSearchProducts([5,67,78,9,21,4])}`);

function anotherFunction<T, U>(valOne: T, valTwo: U) : object {
    return {
        valOne,
        valTwo
    };
}

anotherFunction(3, "4");

function anotherFunctionOne<T, U extends number>(valOne: T, valTwo: U) : object {
    return {
        valOne,
        valTwo
    };
}

anotherFunctionOne(3, 4);

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunctionTwo<T, U extends Database>(valOne: T, valTwo: U) : object {
    return {
        valOne,
        valTwo
    };
}

anotherFunctionTwo(3, {connection: "one", username: "xyz", password: "xyz"});
