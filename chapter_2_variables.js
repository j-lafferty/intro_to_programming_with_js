/*
Question #1: Write a program name greeter.js that greets 'Victor' three times. Your program should use a variable and not hard code the string value 'Victor' in each greeting. Here's an example run of the program:

$ node greeter.js
Good Morning, Victor.
Good Afternoon, Victor.
Good Evening, Victor.
*/
//Question #1 solution
let name = 'Victor';
const time = ['Morning', 'Afternoon', 'Evening'];

for (let i = 0; i < 3; i++) {
  console.log(`Good ${time[i]}, ${name}.`);
};

/*
Question #2: Write a program named age.js that includes someone's age and then calculates and reports the future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old.

You are 20 years old.
In 10 years, you will be 30 years old.
In 20 years, you will be 40 years old.
In 30 years, you will be 50 years old.
In 40 years, you will be 60 years old.
*/
//Question #2 solution
let age = 20;
console.log(`You are ${age} years old.`);

for (let i = 10; i <= 40; i += 10) {
  age += 10;
  console.log(`In ${i} years, you will be ${age} years old.`);
};

/*
Question #3: What happens when you run the following program? Why do we get that result?
{
  let foo = 'bar';
}
console.log(foo);
*/
//Question #3 solution
{
  let foo = 'bar';
}
console.log(foo); //Returns an error due to foo being out of scope

/*
Question #4: What happens when you run the following code? Why?

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);
*/
//Question #4 solution
const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME); //Returns error, NAME is defined constant

/*
Question #5: Take a look at this code snippet:
let foo = 'bar';
{
  let foo = 'qux';
}
console.log(foo);
What does this program log to the console? Why?
*/
//Question #5 solution
let foo = 'bar';
{
  let foo = 'qux';
}
console.log(foo); //Returns 'bar'. Second foo variable is out of scope.

/*
Question #6: Will this program produce an error when run? Why or why not?
const FOO = 'bar';
{
  const FOO = 'qux';
}
console.log(FOO);
*/
//Question #6 solution
const FOO = 'bar';
{
  const FOO = 'qux';
}
console.log(FOO); //Returns 'bar'. Second foo variable is out of scope.