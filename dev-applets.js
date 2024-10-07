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


// Prime number check function
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Palindrome check function
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

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

// Loops

// for loop
console.log('\nFor Loop:');
for (let i = 0; i < array.length; i++) {
    console.log('Array element at index', i, ':', array[i]);
}

// while loop
console.log('\nWhile Loop:');
let index = 0;
while (index < array.length) {
    console.log('Array element at index', index, ':', array[index]);
    index++;
}


// Check if the number is even or odd
console.log('\nOdd or Even Check:');
if (number % 2 === 0) {
    console.log(number, 'is an even number.');
} else {
    console.log(number, 'is an odd number.');
}

// Check if the number is a prime number
console.log('\nPrime Number Check:');
if (isPrime(number)) {
    console.log(number, 'is a prime number.');
} else {
    console.log(number, 'is not a prime number.');
}

// Check if the text is a palindrome
console.log('\nPalindrome Check:');
if (isPalindrome(text.toLowerCase())) {
    console.log('The text "' + text + '" is a palindrome.');
} else {
    console.log('The text "' + text + '" is not a palindrome.');
}