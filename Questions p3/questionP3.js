//  Questions :)
//What will be the output of the following code? Explain why.

console.log(true && false);
console.log(true || false);
console.log(!false);

console.log(0 || "Hello");  
console.log(0 && "Hello");  
console.log(!0);

console.log(5 && 0 || "Hello");
console.log("" || 0 || null || undefined || "World");

console.log(3 > 2 > 1);
console.log(!"false" && !!"true");

console.log(3 + "5");
console.log("10" - 2);
console.log("6" * "2");
console.log("Hello" - "World");


//  Question 2: Predict the value of z.
let z = (null || 2) && (undefined || "Hello");
console.log(z);


// Question 3: Find the value of y
let y = (true + false) * 10 + "5";
console.log(y);


// Question 4 :Will this condition execute? Why?
if (null || undefined || "" || 0) {
    console.log("Executed!");
} else {
    console.log("Not Executed!");
}

//  Question 5: What is the value of result
let a = "5";
let b = 2;
let result = a - b + b * a / b;
console.log(result);


//  Question 6: What is the final value of x?
let x = 10;
x = x++ * 2 + --x;
console.log(x);