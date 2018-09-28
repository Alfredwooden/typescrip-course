// Let & const
console.log('LET & CONST');

let variable = 'Test';
console.log(variable);
variable = 'Another variable';
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // Wont work, becouse const are not variables

// Blick scope
function reset() {
    // console.log(variable); // undefined
    let variable = null;
    console.log(variable);
}
console.log(variable);

// Arrow functions
console.log('ARROW FUNCTIONS');

const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2;
}
console.log(addNumbers(10, 3));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(10, 2));

const greet = () => {
    console.log('Hello!');
}
greet();

const greetFriend = friend => console.log(friend);
greetFriend('Alfred');

// Default parameters 
console.log('Default parameters');

const countdown = (start: number = 10): void => {
    console.log(start);
    
    while (start > 0) {
        start --;
    }
    console.log('Done!', start);
};
countdown();


// Rest & Spread
console.log('REST & SPREAD');
// '...' SPREAD OPERATOR
const numbers = [1, 2, 5, 66, 31, 99];
console.log(Math.max(...numbers)); 

// '...' REST OPERATOR
function makeArray(...args: number[]) { 
    return args;
};
console.log(makeArray(1, 2, 3));

// Destructuring
console.log('DESTRUCTURING');

const myHobbies = ['Cooking', 'Sports'];
const [hobbie1, hobbie2] = myHobbies;
console.log(hobbie1, hobbie2);

const userData = {userName: 'Alfred', age: 25};
const {userName: myName, age: myAge} = userData;
console.log(myName, myAge);

// Template literals
const userName: string = 'Alfred';
const greeting = `This is a heading.
I'm ${userName}.
This is so cool!.`;
console.log(greeting);
