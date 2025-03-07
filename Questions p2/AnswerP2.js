//  Question 1 :)
//  Write a program that finds the largest number in an array using a for loop and if condition.
//  Write a program that finds the smallest number in an array of numbers.
//  inpute:
//      numbers = [30, 2, 103, 79, 42, 23]
//  output:
//      largest : 103
//      smallest : 2

let numbers = [30, 2, 103, 79, 42, 23];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log('largest : '+ largest);

let smallest = Math.min(...numbers);
console.log('smallest : '+ smallest);



//  Question 2 :)
//  Write a program that takes a string and reverses it without using reverse().
//  input:
//      str = "JavaScript"
//  output:
//      "tpircSavaJ"
let str = "JavaScript";
let reversedStr = "";

for (let i = str.length - 1 ; i >= 0; i--) {
    reversedStr += str[i];
}
console.log(reversedStr);



//Question 3 :)
//  Write a program that takes an array of strings and filters out only the words that have an even number of characters. Store these words in a new array and display the result.
//  input:
//      words = ["apple", "banana", "cherry", "hello", "world", "javascript"]
//  output:
//      ["banana", "hello", "world"]

let words = ["apple", "banana", "cherry", "hello", "world", "javascript"];
let evenLengthWords = [];

for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 === 0) {
        evenLengthWords.push(words[i]);
    }
}
console.log(evenLengthWords); 

// Another solution:
// let words = ["apple", "banana", "car", "hello", "world", "javascript"];

// let evenLengthWords = words.filter(word => word.length % 2 === 0);

// console.log(evenLengthWords);


//  Question 4 :)
//  Write a program that takes an object and converts all string values to uppercase.
//  input:
//      obj = { name: "ali", city: "tehran", country: "iran" }
//  output:
//      { name: "ALI", city: "TEHRAN", country: "IRAN" }

let obj = { name: "ali", city: "tehran", country: "iran" , age: 23 };
let uppercaseObj = {};

for (let key in obj) {
    uppercaseObj[key] = typeof obj[key] === "string" ? obj[key].toUpperCase() : obj[key];
}
console.log(uppercaseObj);

// if (typeof obj[key] === "string") { // بررسی می‌کنیم که مقدار، رشته باشد
//     uppercaseObj[key] = obj[key].toUpperCase();
// } else {
//     uppercaseObj[key] = obj[key]; // اگر رشته نبود، مقدار را بدون تغییر ذخیره می‌کنیم
// }

//Question 5 :) 

//output a:
//    *
//   **
//  ***
// ****
//*****

//output b:
//*****
// ****
//  ***
//   **
//    *

let starA = '' ;
for( let i = 1 ; i<= 5 ; i++){
    for( let j = 5 ; j > i ; j-- ){
        starA += ' ';
    }
    for( let k = 1 ; k <= i ; k++){
        starA += '*';
    }
    starA += '\n';
}
console.log(starA);

let starB = '';
for( let i = 1 ; i <= 5 ; i++){
    for( let j = 1 ; j < i ; j++){
        starB += ' ';
    }
    for(let k = 5 ; k >=i ; k--){
        starB += '*';
    }
    starB += '\n';
}
console.log(starB);

