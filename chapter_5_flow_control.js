/*
Question #1: What values do the following expressions evaluate to?

false || (true && false);
true || (1 + 2);
(1 + 2) || true;
true && (1 + 2);
false && (1 + 2);
(1 + 2) && true;
(32 * 4) >= 129;
false !== !true;
true === 4;
false === (847 === '847');
false === (847 == '847');
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
*/
//Question #1 solution
false || (true && false); //false
true || (1 + 2); //true
(1 + 2) || true; //3
true && (1 + 2); //3
false && (1 + 2); //false
(1 + 2) && true; //true
(32 * 4) >= 129; //false
false !== !true; //false
true === 4; //false
false === (847 === '847'); //true
false === (847 == '847'); //false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; //true

/*
Question #2: Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer.
*/
//Question #2 solution
function evenOrOdd(number) {
  console.log(number % 2 === 0 ? 'even' : 'odd');
}
//evenOrOdd(6);
//evenOrOdd(3);

/*
Question #3 : Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.
*/
//Question #3 solution
function evenOrOdd(number) {
  console.log(Number.isInteger(number) ? (number % 2 === 0 ? 'even' : 'odd') : 'not a number');
}
//evenOrOdd(6);
//evenOrOdd(3);
//evenOrOdd('6');

/*
Question #4: What does the following code log to the console, and why?

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');
*/
//Question #4 solution
function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113'); //Logs 'Product2' 'Product3' 'Product not found' because it matches the case '113' and does not have a break statement

/*
Question #5: Refactor this statement to use an if statement instead.
return foo() ? 'bar' : qux();
*/
//Question #5 solution
if (foo()) {
  return 'bar';
} else {
  return qux();
}

/*
Question #6: What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
   console.log('Empty');
  }
}

isArrayEmpty([]);   // [] is an empty Array
*/
//Question #6 solution
function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
   console.log('Empty');
  }
}

isArrayEmpty([]);   // Logs 'Not Empty' because [] is an empty Array and if statement evaluates true

/*
Question #7: Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string. Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.
*/
//Question #7 solution
function allCaps(words) {
  return words.length > 10 ? words.toUpperCase() : words;
}

//console.log(allCaps('hello world'));
//console.log(allCaps('goodbye'));

/*
Question #8: Write a function that logs whether a number is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0.

numberRange(25);   // '25 is between 0 and 50'
numberRange(75);   // '75 is between 51 and 100'
numberRange(125);  // '125 is greater than 100'
numberRange(-25);  // '-25 is less than 0'
*/
//Question #8 solution
function numberRange(number) {
  if (number >= 0 && number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number >= 51 && number <= 100) {
    console.log(`${number} is between 51 and 100`);
  } else if (number > 100) {
    console.log(`${number} is greater than 100`);
  } else if (number < 0) {
    console.log(`${number} less than 0`);
  }
}

numberRange(25);   // '25 is between 0 and 50'
numberRange(75);   // '75 is between 51 and 100'
numberRange(125);  // '125 is greater than 100'
numberRange(-25);  // '-25 is less than 0'