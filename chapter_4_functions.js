/*
Question #1: What does this code log to the console? Does executing the foo function affect the output? Why or why not?
let bar = 1;
function foo() {
  let bar = 2;
}
foo();
console.log(bar);
*/
//Question #1 solution
let bar = 1;
function foo() {
  let bar = 2;
}
foo();
console.log(bar); // Returns 1, sencond bar varisable is out of scope

/*
Question #2: In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. Add a function to this program that solicits the user's first and last names in separate invocations; the function should return the appropriate name as a string. Use the return values to greet the user with their full name.
*/
//Question #2 solution
function getName(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name;
};

let firstName = getName('What is your first name?');
let lastName = getName('What is your last name?');

console.log(`Hello, ${firstName} ${lastName}!`);

/*
Question #3: Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.
$ node multiply.js
Enter the first number: 3.141592653589793
Enter the second number: 2.718281828459045
3.141592653589793 * 2.718281828459045 = 8.539734222673566
*/
//Question #3 solution
function getNumber(prompt) {
  let rlSync = require('readline-sync');
  let number = rlSync.question(prompt);
  return Number(number);
};

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}
let firstNumber = getNumber('Enter the first number: ');
let secondNumber = getNumber('Enter the second number: ');
let product = multiply(firstNumber, secondNumber);

console.log(`${firstNumber} * ${secondNumber} = ${product}`);

/*
Question #4: Use the times function shown below to write a program that logs the value of 1! (one factorial), 2! (two factorial), 3!, 4!, and 5! (five factorial) to the console.

n!	Expansion	Result
1!	1	1
2!	1 * 2	2
3!	1 * 2 * 3	6
4!	1 * 2 * 3 * 4	24
5!	1 * 2 * 3 * 4 * 5	120
function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}
Here's an example of the expected output:

> node factorial.js
1
2
6
24
120
*/
//Question #4 solution
function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
};

let product = 1;
for (let i = 1; i <= 5; i++) {
  product = times(i, product);
};

/*
Question #5: What does the following code log to the console?

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}
scream('Yipeee');
*/
//Question #5 solution
function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words); //Nothing is logged. Return ends function
}
scream('Yipeee');

/*
Question #6 : What does the following code log to the console?

function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');
*/
//Question #6 solution
function scream(words) {
  return words + '!!!!';
}

scream('Yipeee'); //Nothing is logged, there's no log statement