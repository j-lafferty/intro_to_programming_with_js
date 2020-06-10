/* 
Questions #1: Concatenate two or more strings, one with your first name and one with your last, to create a string with your full name as its value. For example, if your name is John Doe, think about how you can put 'John' and 'Doe' together to get 'John Doe'.
*/
//Question #1 Solution
'James ' + 'L'

/*
Question #2: Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936
*/
//Question #2 solution
let number = 4936;
console.log(`Number: ${number}`);
let ones = number % 10;
console.log(`Ones: ${ones}`);

number = (number - ones) / 10;
//console.log(`Number: ${number}`);

let tens = number % 10;
console.log(`Tens: ${tens}`);

number = (number - tens) / 10;
//console.log(`Number: ${number}`);

let hundreds = number % 10;
console.log(`Hundreds: ${hundreds}`);

number = (number - hundreds) / 10;
//console.log(`Number: ${number}`);

let thousands = number % 10;
console.log(`Thousands: ${thousands}`);

/*
Question #3: Identify the data type for each of the following values:
'true'
false
1.5
2
undefined
{ foo: 'bar' }
*/
//Question #3 solution
'true' //is String
false //is Boolean
1.5 //is Number
2 //is Number
undefined //is Undefined
{ foo: 'bar' } //is Object

/*
Question #4: Given the code below, identify which lines are statements and which are expressions:
var foo;
foo = 5;
foo;
*/
//Question #4 solution
var foo; //is a statement
foo = 5; //is an expression
foo; //is an expression

/*
Question #5: Explain why this code logs '510' instead of 15.
console.log('5' + 10);
*/
//Question #5 solution
console.log('5' + 10) //Produces '510' because '5' is a string, and used with '+', coerces the number 10 into a string. The output is a string concatenation of '5' and '10'... '510'

/*
Question #6: Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.
*/
//Question #6 solution
console.log(Number('5') + 10); //Coerce the string '5' into a number

/*
Question #7: Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console:
The value of 5 + 10 is 15.
*/
//Question #7 solution
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

/*
Question #8: Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example:
var foo = ['a', 'b', 'c'];
foo.length;  // returns 3
foo[3];      // will this result in an error?
*/
//Question #8 solution
var foo = ['a', 'b', 'c'];
foo.length;  // returns 3
foo[3];      // will return undefined

/*
Question #9: Create an array named names that contains a list of pet names. For instance:
Name
asta
butterscotch
pudding
neptune
darwin
You can use that data or make up your own.
*/
//Question #9 solution
let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];

/*
Question #10: Create an object named pets that contains a list of pet names and the type of animal. For instance:
Name	Animal
asta	dog
butterscotch	cat
pudding	cat
neptune	fish
darwin	lizard
You can use that data or make up your own.
*/
//Question #10 solution
let pets = {
  'asta':	'dog',
  'butterscotch':	'cat',
  'pudding': 'cat',
  'neptune': 'fish',
  'darwin': 'lizard'
};

/*
Question #11: What value does the following expression evaluate to?
'foo' === 'Foo'
*/
//Question #11 solution
'foo' === 'Foo' //Returns false due to case differs

/*
Question 12: What value does the following expression evaluate to?
parseInt('3.1415')
*/
//Question #12 solution
parseInt('3.1415') //Evaluates to a Number 3. parseInt stops evaluating at a non-number

/*
Question #13: What value does the following expression evaluate to?
'12' < '9'
*/
//Question #13 solution
'12' < '9' //Evaluates to true. '1' is less than '9'