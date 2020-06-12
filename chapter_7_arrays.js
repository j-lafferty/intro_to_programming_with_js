/*
Question #1: In the following code, what are the final length values for array1, array2, array3, array4, and array5?

let array1 = [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5;

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;
*/
//Question #1 solution
let array1 = [1, 2, undefined, 4];
//array length is 4

let array2 = [1];
array2.length = 5;
//array2 length is 5

let array3 = [];
array3[-1] = [1];
//array3 length is 0

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;
//array4 length is 3

let array5 = [];
array5[100] = 3;
//array length is 101

/*
Question #2: Log all of the even values from myArray to the console.

let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];             
*/
//Question #2 solution               
let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

myArray.forEach(function(item) {
  if (item % 2 === 0) {
    console.log(item);
  }
})


/*
Question #3: Let's make the problem a little harder. In this problem, we're again interested in even numbers, but this time the numbers are in nested arrays in a single outer array.

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];
*/
//Question #3 solution
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(function(innerItem) {
  innerItem.forEach(function(value) {
    if (value % 2 === 0) {
      console.log(value);
    }
  })
});


/*
Question #4: Let's try another variation on the even-numbers theme.

We'll return to the simpler one-dimensional array. In this problem, we want to use the map function to create a new array that contains one element for each element in the original array. If the element is an even value, then the corresponding element in the new array should contain the string 'even'; otherwise, the element in the new array should contain 'odd'.

Example

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
// Desired result:
//  [
//    'odd', 'odd', 'even', 'odd',
//    'even', 'even', 'even', 'odd',
//    'odd', even', 'even',
//  ]
If you have trouble using map to accomplish this, try it using a regular for loop instead.
*/
//Question #4 solution
let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
let newArray = myArray.map(function(item) {
  if (item % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});
//console.log(newArray);


/*
Question #5: Use the filter method to implement a function that returns a new array with all of the integers from the input array. It should ignore all non-integer values from the input.

Example

let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let newArray = removeNonInteger(array);
console.log(newArray); // => [1, 3, -4]
 
You can use Number.isInteger(value) to determine whether a numeric value is an integer. It returns true if the value is an integer, false otherwise.
*/
//Question #5 solution
let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let newArray = removeNonInteger(array);

function removeNonInteger(array) {
  return array.filter(function(item) {
    return Number.isInteger(item);
  });
};

console.log(newArray);

/*
Question #6: Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
Note that it is possible to solve this problem without using map. However, our intent is to show how you can combine multiple functions to achieve a desired result.
*/
//Question #6 solution
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  let newArr = arr
  .map(item => item.length)
  .filter(value => value % 2 !== 0)
  return newArr;
};

console.log(oddLengths(arr));

/*
Question #7: Use reduce to compute the sum of the squares of all of the numbers in an array:

let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers)); // => 83
Note that 83 is 3*3 + 5*5 + 7*7.
*/
//Question #7 solution
let numbers = [3, 5, 7];

function sumOfSquares(numbers) {
  let result = numbers.reduce((total, number) => total + (number * number), 0);
  return result;
};

console.log(sumOfSquares(numbers));

/*
Question #8: This problem is more challenging than most in this book. Don't worry if you can't solve it on your own.

Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
*/
//Question #8 solution
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

const oddLengths = arr => 
  arr.reduce((acc, item) => {
    if(item.length % 2 !== 0) {
      acc.push(item.length);
    };
    return acc;
  }, []);

console.log(oddLengths(arr));

/*
Question #9: Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:

> let numbers1 = [1, 3, 5, 7, 9, 11];
> let numbers2 = [];
> let numbers3 = [2, 4, 6, 8];
Return true or false depending on each result.
*/
//Question #9 solution
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

const checkForNumber3 = arr => {
  return arr.includes(3)
};
console.log(checkForNumber3(numbers1));
console.log(checkForNumber3(numbers2));
console.log(checkForNumber3(numbers3));
  
/*
Question #10: Write some code to extract the word 'mem' from the following nested array:

> let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];
*/
//Question #10 solution
let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];

const extractWord = (arr, value) => {
  let flatArr = arr.flat();
  //console.log(flatArr);
  return flatArr[flatArr.indexOf(value)];
};

console.log(extractWord(arr, 'mem'));