/*
Question #1: Given the following code, how can you access the name of the person?

let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};
*/
//Question #1 solution


/*
Question #2: Which of the following values are valid keys for an object?

1
'1'
undefined
'hello world'
true
'true'
*/
//Question #2 solution


/*
Question #3: Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement. The object should contain at least 3 elements. You should place your code between the braces in the let statement:

let myArray = {
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
Hint
*/
//Question #3 solution


/*
Question #4: Create an array from the keys of the object obj below, with all values converted to uppercase. Your implementation must not mutate obj.

let obj = {
  b: 2,
  a: 1,
  c: 3,
};
The order of the array does not matter.

*/
//Question #4 solution


/*
Question #5: Create a new object named myObj that uses myProtoObj as its prototype.

let myProtoObj = {
  foo: 1,
  bar: 2,
};
*/
//Question #5 solution


/*
Question #6: Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:

Snippet 1

Object.keys(myObj).forEach(function(key) {
  console.log(key);
});
Snippet 2

for (let key in myObj) {
  console.log(key);
}
Without running this code, can you determine whether these two snippets produce the same output? Why?
*/
//Question #6 solution


/*
Question #7: Create a function that creates and returns a copy of an object. The function takes two arguments: the object to copy and an array of the keys that you want to copy. You can omit the array of keys, in which case you should copy all the keys of the object.

Here are some examples for your reference:

let objToCopy = {
  foo: 1,
  bar: 2,
};

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined
*/
//Question #7 solution


/*
Question #8: What does the following program log to the console? Why?

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);
*/
//Question #8 solution
