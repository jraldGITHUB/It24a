// Data Types
let number = 4;
let number2=4
let text = "Im a BSIT student";
let isActive = true;
let array = [1, 2, 3, 4, 5];
let person = { name: 'Jrald', age: 19 };

// Arithmetic Operators
let sum = number + number2;
let difference = number - number2;
let product = number * number2;
let quotient = number / number2;
let remainder = number % number2;

// Conditional Statements

// if...else
console.log('\nConditional Statements (if...else):');
if (number > 0) {
    console.log('The number is positive.');
} else if (number < 0) {
    console.log('The number is negative.');
} else {
    console.log('The number is zero.');
}

// switch
console.log('\nConditional Statements (switch):');
switch (number) {
    case 10:
        console.log('The number is 10.');
        break;
    case 20:
        console.log('The number is 20.');
        break;
    default:
        console.log('The number is neither 10 nor 20.');
}
