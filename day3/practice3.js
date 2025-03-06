// Exercise 1: Logical Operators
// Write a program that checks if a number is between 10 and 50 (inclusive).
// Write a program that checks if a number is less than 10 or greater than 50.
// Write a program that negates a boolean variable and prints the result.

// let num = Number(window.prompt('please enter number : '));
// console.log(typeof num);

let num = 60;
if( 10 <= num && num <= 50 ){
    console.log('number is between 10 and 50');
}else if( num < 10 ){
    console.log('number is less than 10');
}else{
    console.log('number is greater than 50')
}


const isCar = false;
if(!isCar){
    console.log("it is Car");
}else{
    console.log("it is not Car");
}


// Exercise 2: Comparison Operators
// Declare a variable x = "10". Compare it with 10 using == and ===, then log the results.
// Check if 20 is not equal to "20" using != and !==.

let x = "10";
if( x == 10){
    console.log(true);
}else{
    console.log(false);
}

if( x === 10 ){
    console.log(true);
}else{
    console.log(false);
}

let y = 20 ;
if( y != "20"){
    console.log(true);
}else{
    console.log(false);
}

if( y !== "20"){
    console.log(true);
}else{
    console.log(false);
}


// Exercise 3: Mathematical Operators
// Write a program that takes a number and:

// number = number * 5
// Multiplies it by 5
// Adds 10
// Divides by 2
// Subtracts 3
// Logs the final result


// Declare a variable num = 10. Using shorthand operators (+=, -=, *=, /=, %=, **=), perform the following operations and log the result each time:

// Add 5
// Multiply by 3
// Divide by 2
// Find the remainder when divided by 4
// Raise to the power of 2

let num2 = 10 ;
num2 = num2 * 5;
num2 = num2 + 10 ;
num2 = num / 2 ;
num2 = num2 - 3 ;
console.log(num2);

let num3 = 10 ;
num3 += 3;
num3 /= 2;
num3 %= 4;
num2 **= 2;
console.log(num3);


// Exercise 4: Operator Precedence
// What will be the output of the following expressions? Predict the result before running them:

let res1 = 5 + 2 * 3;
let res2 = (5 + 2) * 3;
let res3 = 10 / 2 + 3 * 4 - 1;
let res4 = 2 ** 3 + 4 / 2;

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);