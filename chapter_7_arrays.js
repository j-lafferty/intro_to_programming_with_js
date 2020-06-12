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


/*
Question #2: Log all of the even values from myArray to the console.

let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];             
*/
//Question #2 solution               


/*
Question #3: Let's make the problem a little harder. In this problem, we're again interested in even numbers, but this time the numbers are in nested arrays in a single outer array.

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];
*/
//Question #3 solution


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

/*
Question #5: Use the filter method to implement a function that returns a new array with all of the integers from the input array. It should ignore all non-integer values from the input.

Example

let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let newArray = removeNonInteger(array);
console.log(newArray); // => [1, 3, -4]
 
You can use Number.isInteger(value) to determine whether a numeric value is an integer. It returns true if the value is an integer, false otherwise.
*/
//Question #5 solution


/*
Question #6: Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
Note that it is possible to solve this problem without using map. However, our intent is to show how you can combine multiple functions to achieve a desired result.
*/
//Question #6 solution


/*
Question #7: Use reduce to compute the sum of the squares of all of the numbers in an array:

let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers)); // => 83
Note that 83 is 3*3 + 5*5 + 7*7.
*/
//Question #7 solution


/*
Question #8: This problem is more challenging than most in this book. Don't worry if you can't solve it on your own.

Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
*/
//Question #8 solution


/*
Question #9: Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:

> let numbers1 = [1, 3, 5, 7, 9, 11];
> let numbers2 = [];
> let numbers3 = [2, 4, 6, 8];
Return true or false depending on each result.
*/
//Question #9 solution

/*
Question #10: Write some code to extract the word 'mem' from the following nested array:

> let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];
*/
//Question #10 solution
