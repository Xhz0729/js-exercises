// Week 1 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log).
// Underneath the function, write the line of code that runs the function.
 function logGreeting() {
   console.log("Hello!");
 }
 logGreeting();

// Exercise 2. Define a function called getName() that *returns* a string that is your name.
// Remember, this function should return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function.
function getName() {
  return "Xiahui";
}
console.log(getName());

// Exercise 3. Call a function within a function -- Write a function called logGreeting2()
// that prints a full sentence that contains your name: "Hello! My name is <name>."
// logGreeting2 should call myName() to get your name.
// Then print your greeting to the console by calling logGreeting2().
function logGreeting2() {
  let name = getName();
  console.log (`Hello! My name is ${name}.`)
}
logGreeting2();

// Exercise 4. Write a function that takes 3 parameters that are all numbers.
// The function should return the sum of the 3 numbers.
// Then write some function calls you would use to test your function.
function sumOfThree(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  return sum;
}
console.log(sumOfThree(1, 2, 3)); // 6
console.log(sumOfThree(66,79,1999)); //2144


// Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
// Write a function that takes in a person's age and returns true if they should get a discount.
// Otherwise it should return false.
// Then write some function calls you would use to test your function.
function discount(age) {
  if (age <= 14 || age >= 65) {
    return true;
  }
  else {
    return false;
  }
}
console.log(discount(14)); //true
console.log(discount(65)); //true
console.log(discount(20)); //false

// Exercise 6. Write a function that takes 2 parameters -- one number and one string.
// The function should print the string the given number of times.
// Then write some function calls you would use to test your function.
function printStr(num, str) {
  while (num > 0) {
    console.log(str);
    num -= 1;
  }
}
printStr(2, 'XX') 
printStr(10, 'ZZ')
printStr(5, 'UU')

// Exercise 7. Read the following code (don't run it yet)
function mysteryFunction1(p1) {
  return p1 * 2;
}
const y = 4;
const z = mysteryFunction1(y);
console.log("The value of y is " + y);
console.log("The value of z is " + z);


// Without running the code, write down in a comment:
// 1. What mysteryFunction1 does
// mysteryFunction1 takes a parameter p1 and returns p1's value multiplied by 2.
// 2. What prints out for the value of y
// The value of y is 4 as it's assiged as 4 and is not modified later.
// 3. What prints out for the value of z
// The value of z is 8 as it equals to 4 * 2
// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?

// Exercise 8. Read the following code (don't run it yet)
function mysteryFunction2(p1, p2) {
  const x = p1 - p2;
  return x;
}
const a = mysteryFunction2(10, 4);
const b = mysteryFunction2(a, 1);
console.log("The value of a is " + a);
console.log("The value of b is " + b);

// Without running the code, write down in a comment:
// 1. What mysteryFunction2 does
// mysteryFunction2 takes two parameters, p1 and p2, and returns subtracts p2 from p1,.
// 2. What prints out for the value of a
// 6
// 3. What prints out for the value of b
//5
// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?

// Exercise 9. This exercise is to practice reading the documentation for functions.
// String.split() is a function in the JavaScript standard library that you can use in your code.
// Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Try to use it to solve the following challenges:

// Here's a string I made representing my grocery list.
// Using split() and groceryList, make an array of my grocery list items
const groceryList = "eggs,carrots,orange juice";
const arrOfGroceryList = groceryList.split(',');

// Here's a string I made representing my morning schedule.
// Using split() and mySchedule, make an array of the *first 2* things I do in the morning
// There are multiple ways to do this, but try doing it using only the split() function.
const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";
const scheduleArray = mySchedule.split('--->');
const firstTwoThings = scheduleArray.slice(0, 2);

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.
