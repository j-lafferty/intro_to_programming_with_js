/*
Question #1: Write a dynamic greeter program named greeter.js. The program should ask for your name, then output Hello, {name}! where {name} is the name you entered:
$ node greeter.js
What is your name? Sue
Hello, Sue!
*/
//Question #1 solution
let rlSync = require('readline-sync');
let name = rlSync.question('What is your name?');
console.log(`Hello, ${name}!`);

/*
Question #2: Modify the greeter.js program to ask for the user's first and last names separately, then greet the user with their full name.
$ node greeter.js
What is your first name? Sue
What is your last name? Roberts
Hello, Sue Roberts!
*/
//Question #2 solution
let rlSync = require('readline-sync');
let firstName = rlSync.question('What is your first name?');
let lastName = rlSync.question('What is your last name?');
console.log(`Hello, ${firstName} ${lastName}!`);

/*
Question #3: Modify the age.js program you wrote in the exercises for the Variables chapter. The updated code should ask the user to enter their age instead of hard-coding the age in the program. Here's an example run:
How old are you? 22
You are 22 years old.
In 10 years, you will be 32 years old.
In 20 years, you will be 42 years old.
In 30 years, you will be 52 years old.
In 40 years, you will be 62 years old.
*/
//Question #3 solution
let rlSync = require('readline-sync');
let age = rlSync.question('What is your first name?');
console.log(`You are ${age} years old.`);

for (let i = 10; i <= 40; i += 10) {
  age += 10;
  console.log(`In ${i} years, you will be ${age} years old.`);
};