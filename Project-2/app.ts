console.log("It works!");

// string
let myName: string = 'Alfred';
console.log('My name: ' + myName);

// number
let myAge: number = 25;

// boolean
let hasHobbies: boolean = true;

// Assign types
let myRealAge: number;
myRealAge = 25;

let hobbies: string[] = ['Cooking', 'Sports'];
console.log('Hobbies: ' + hobbies[0]);
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
console.log('My color: ' + myColor)

// Any
let car: any = 'BMW';
console.log('My car: ' + car);
car = { brand: 'BMW', series: 3};
console.log('Brand + Series: ' + JSON.stringify(car));

// Functions
function returnMyName(): string {
    return myName;
}

console.log('My name through a function: ' + returnMyName());

// Void
function sayHello(): void {
    console.log('Hello!');
    // return myAge; ----- Cant return anything with type 'void'
}

// Argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log('Value 1 + Value 2: ' + multiply(2, 5));

// Function types
let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;
console.log(myMultiply(10, 2));

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