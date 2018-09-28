// Exercise 1 - As arrow functions
const double = (value: number) => value * 2;
console.log(double(10));

// Exercise 2 - Default Params
const greet = (name = 'Alfred') => {
    console.log('Hello, ' + name);
}
greet();
greet('Anna');

// Exercise 3 - Spread Operator
const numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4 - Spread Operator
const newArray = [66, 22];
newArray.push(...numbers);
console.log(newArray);

// Exercise 5 - Destructuring Arrays
const testResults = [1.26, 12.5, 31.2];
const [number1, number2, number3] = testResults;
console.log(number1, number2, number3);

// Exercise 6 - Destructuring Objects
const scientist = {firstname: 'Alfred', experience: 12 };
const {firstname, experience} = scientist;
console.log(firstname, experience);

