// # Review 1 - basics

// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Make a variable and assign an even number to that variable. Make sure that variable cannot be changed.
const evenNum = 4;

// 2. Make a variable and assign a negative odd number to that variable. Make sure that variable cannot be changed.
const negativeOddNum = -3;


// 3. Make a variable and assign a string to that variable using double quotes. Make sure that variable cannot be changed.
const doubleQuoteString = "My extension turn single quotes to double anyways.";


// 4. Make a variable and assign a string to that variable using single quotes. Make sure that variable cannot be changed.
const singleQuoteString = 'Ok, i make sure not to format this time.';


// 5. Make a variable and assign a string to that variable using a template literal. Make sure that variable cannot be changed.
const backtickQuote = `This accepts variable like ${evenNum} and ${negativeOddNum}`;


// 6. Make a variable and assign an empty string to that variable using a template literal. Make sure that variable *can* be changed.
let emptyString = ``;


// 7. Make a variable and assign a boolean to that variable using a template literal. Make sure that variable *can* be changed.
let booleanValue = true;


// 8. Make a variable and assign a boolean to that variable using a template literal. Make sure that variable can not be changed.
const booleanOfBacktick = `${booleanValue} or ${false}`;


// 9. Print the `type` of a variable that has a number value.
console.log(`${typeof +"0"} or ${typeof Number("0")}`);


// 10. Print the `type` of a variable that has a string value.
console.log(`${typeof "0"} or ${typeof String(0)}`);


// 11. Print the `type` of a variable that has a boolean value.
console.log(`${typeof !!"0"} or ${typeof Boolean("0")}`);
