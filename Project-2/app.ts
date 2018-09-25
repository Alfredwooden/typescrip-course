// string
let myName: string = 'Alfred';
console.log('String = My name: ' + myName);

// number
let myAge: number = 25;

// boolean
let hasHobbies: boolean = true;

// Assign types
let myRealAge: number;
myRealAge = 25;

let hobbies: string[] = ['Cooking', 'Sports'];
console.log('Assign types = Hobbies: ' + hobbies[0]);
// hobbies = ['A string'];

// Tuples
let adress: [string, number] = ['Superstreet', 99];

// Enum
enum Color {
    Blue, // 0 
    Green = 1, // 1
    Red = 100, // 100
    Brown // 101
}

let myColor: Color = Color.Red;
console.log('Enum = My color: ' + myColor);

// Any
let car: any = 'BMW';
console.log('Type ANY = My car: ' + car);
car = { brand: 'BMW', series: 3};
console.log('Type ANY = Brand + Series: ' + JSON.stringify(car));

// Functions
function returnMyName(): string {
    return myName;
}

console.log('Functions = My name through a function: ' + returnMyName());

// Void
function sayHello(): void {
    console.log('Void = Hello!');
    // return myAge; ----- Cant return anything with type 'void'
}

// Argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log('Argument types = Value 1 + Value 2: ' + multiply(2, 5));

// Function types
let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;
console.log('Function types = ' + myMultiply(10, 2));

// Objects
let userData: { name: string, age: number } = {
    name: 'Alfred',
    age: 25
};

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
}

// complex = {};

// Type alias
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
}

// Union types
let myRealRealAge: number | string = 25;
myRealRealAge = '25';

// Check types
let finalValue: number = 3;
if(typeof finalValue == 'number'){
    console.log('Check types = finalValue is a number')
}

// Never

function neverReturns(): never {
    throw new Error('An error!');
}

// Nullable types
let canBeNull: number | null = 12; 
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
canThisBeAny = 12;