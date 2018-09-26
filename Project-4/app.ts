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
countdown(20);
