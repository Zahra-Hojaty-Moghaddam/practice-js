//  Questions :)
//What will be the output of the following code? Explain why.

console.log(true && false);
console.log(true || false);
console.log(!false);

console.log(0 || "Hello");
// `||` returns the first Truthy value.  
console.log(0 && "Hello");
// `&&` returns the first Falsy value.  
console.log(!0);
// `!` reverses the value.  


console.log(5 && 0 || "Hello");
// && returns the first falsy value → 5 && 0 → 0
// || returns the first truthy value → 0 || "Hello" → "Hello"

console.log("" || 0 || null || undefined || "World");
//All values before "World" are falsy, so "World" is returned.

console.log(3 > 2 > 1);
// 3 > 2 is true → true > 1
// true is converted to 1, so 1 > 1 is false.

console.log(!"false" && !!"true");
//"false" is a truthy value, so !"false" is false
// "true" is truthy, so !!"true" is true
// false && true → false


console.log(3 + "5");
// + performs concatenation if one of the values is a string.

console.log("10" - 2);
console.log("6" * "2");
// -, *, /, and % force JavaScript to convert strings to numbers (if possible).

console.log("Hello" - "World");
// If JavaScript cannot convert a value to a number, the result will be NaN (Not a Number).



//  Question 2: Predict the value of z.
let z = (null || 2) && (undefined || "Hello");
console.log(z);
// (null || 2) → 2 (because null is falsy)
// (undefined || "Hello") → "Hello" (because undefined is falsy)
// 2 && "Hello" → "Hello" (since && returns the last truthy value)



// Question 3: Find the value of y
let y = (true + false) * 10 + "5";
console.log(y);
// true + false → 1 + 0 = 1
// 1 * 10 = 10
// 10 + "5" → string concatenation → "105"



// Question 4 :Will this condition execute? Why?
if (null || undefined || "" || 0) {
    console.log("Executed!");
} else {
    console.log("Not Executed!");
}
//Each of these values (null, undefined, "" (empty string), and 0) are Falsy in JavaScript.
// The logical OR (||) operator returns the first Truthy value or the last Falsy value if all are Falsy.



//  Question 5: What is the value of result
let a = "5";
let b = 2;
let result = a - b + b * a / b;
console.log(result);
// "5" - 2 → 5 - 2 = 3 (string converted to number)
// b * a / b → 2 * 5 / 2 = 5
// 3 + 5 = 8



//  Question 6: What is the final value of x?
let x = 10;
x = x++ * 2 + --x;
console.log(x);
// x++ returns 10, but after execution, x becomes 11.
// --x decrements x to 10.
// Calculation: 10 * 2 + 10 = 30.
// Since all values here are Falsy, the final result of the condition is false.