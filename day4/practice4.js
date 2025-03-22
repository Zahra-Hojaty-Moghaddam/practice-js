// file Qestions part1 :
//  Question 1:)
//  input:
//    array1 = [ 1, 2, 'red'];
//    array2 = [ 3, 4, 'orange'];
//    array3 = [ 5, 6, 'pink'];
//    array4 = [ 7, 8, 'blue'];

//  output : 
//    a:    array5 = [ 1, 2, 'red', 3, 4, 'orange', 5, 6, 'pink', 7, 8, 'blue']
//    b:    numbers = [1, 2, 3, 4, 5, 6, 7, 8]
//    c:    colors = ['red', 'orange', 'pink']

function separateNumbersAndStrings(...arrays) {
    // ادغام تمام آرایه‌ها در یک آرایه جدید
    let mergedArray = [].concat(...arrays);

    // جدا کردن اعداد و رشته‌ها
    let numbers = mergedArray.filter(item => typeof item === 'number');
    let colors = mergedArray.filter(item => typeof item === 'string');

    // نمایش خروجی
    console.log("array5:", mergedArray);
    console.log("numbers:", numbers);
    console.log("colors:", colors);

    // بازگرداندن نتیجه به عنوان یک آبجکت
    return { mergedArray, numbers, colors };
    // return { 
    //     mergedArray: mergedArray, 
    //     numbers: numbers, 
    //     colors: colors 
    // };
    //وقتی اسم کلید و مقدار یکی باشد، می‌توانیم فقط یک‌بار بنویسیم.
    //جاوااسکریپت به‌طور خودکار کلیدها را از نام متغیرها می‌سازد.
    // return [mergedArray, numbers, colors];
}

// تعریف آرایه‌ها
const array1 = [1, 2, 'red'];
const array2 = [3, 4, 'orange'];
const array3 = [5, 6, 'pink'];
const array4 = [7, 8, 'blue'];

// اجرای تابع
separateNumbersAndStrings(array1, array2, array3, array4);



//  Qestion2:)
//  input:
//        fruits = ['apple' , 111 , 222 , 333 , 'orange' , 'grapes' , 'watermelon']
//  output:
//        fruits = ['apple' , 'the numbers is deleted' , 'orange' , 'grapes' , 'watermelon']


function replaceNumbersWithText(array) {
    array.splice(1, 4, 'the numbers is deleted');
    console.log(array);
    return array;
}
var fruits = ['apple', 111, 222, 333, 'orange', 'grapes', 'watermelon'];
replaceNumbersWithText(fruits);


// // Another solutions :

// function replaceNumberSequences(arr) {
//     return arr.reduce((acc, curr, index, originalArr) => {
//         let isNumber = typeof curr === 'number';
//         let prevIsNumber = index > 0 && typeof originalArr[index - 1] === 'number';

//         if (isNumber && prevIsNumber) {
//             return acc; // اگر قبلاً مقدار جایگزین شده، رد کن
//         }
//         if (isNumber) {
//             acc.push('the numbers deleted'); // اولین عدد یک توالی را جایگزین کن
//         } else {
//             acc.push(curr); // مقدار غیر عددی را بدون تغییر اضافه کن
//         }
//         return acc;
//     }, []);
// }
// let fruit = ['apple', 111, 222, 333, 'orange', 'grapes', 99, 88, 'watermelon', 42];
// console.log(replaceNumberSequences(fruit));



//  Qestion3:)
//  input:
//        sentence = "That cat is very cute and smart. ";
//  output:
//        very qute

function findPhrase(sentence, phrase) {
    return sentence.includes(phrase) ? `"${phrase}" found in sentence.` : `"${phrase}" not found.`;
}
const sentence = "That cat is very cute and smart.";
console.log(findPhrase(sentence, "very cute")); 


// function findPhrase(sentence, phrase) {
//     let index = sentence.indexOf(phrase);
    
//     if (index !== -1) {
//         return `"${phrase}" found at index ${index}.`;
//     } else {
//         return `"${phrase}" not found.`;
//     }
// }
// const sentence = "That cat is very cute and smart.";
// console.log(findPhrase(sentence, "very cute")); 


//  Qestion4:)
//  input:
//  We have an object wizard with the following structure:
//        {firstName: "Harry", lastName: "potter", schoolName: "Hogwarts"}
//  Convert the product wizard into a pretty JSON string (with indentation) using JSON.stringify().
//  Use an indentation of 4 spaces(or tab) to make the JSON more readable.
//  output:
//        {
//            "firstName": "harry",
//            "lastName": "potter",
//            "schoolName": "Hogwarts"
//        }

function prettyJSON(obj, indentation = 4) {
    return JSON.stringify(obj, null, indentation);
}
const wizard = { firstName: "Harry", lastName: "potter", schoolName: "Hogwarts" };
console.log(prettyJSON(wizard));

//------------------------------------------------------------ finish Qestions part 1 ---------------------------------------

// Question from slove 1 :
const str = "mohsen nan  mohsen wedaj  efoijseo  654161  mohsen."
// output : mohsen repeated : 3

function counterMohsen(word){
    let ofset = 0 ;
    let count = 0 ;
    let pos = str.indexOf(word,ofset) ;

    while( pos !== -1 ){
        count += 1;
        ofset = pos + word.length ;
        pos = str.indexOf(word,ofset);
    }
    return(`${word} occured in sentence is : ${count}`);
}
console.log(counterMohsen('mohsen'));

//-------------------------------------------- start Question 2 : ----------------------------------------------------------
//  Question 1 :)
//  Write a program that finds the largest number in an array using a for loop and if condition.
//  Write a program that finds the smallest number in an array of numbers.
//  inpute:
//      numbers = [30, 2, 103, 79, 42, 23]
//  output:
//      largest : 103
//      smallest : 2


function maxim(numbers){
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return('largest : '+ largest);
}
let numbers = [30, 2, 103, 79, 42, 23];
console.log(maxim(numbers));


function minim(numbers){
    let smallest = Math.min(...numbers);
    return('smallest : '+ smallest);    
}
console.log(minim(numbers));



//  Question 2 :)
//  Write a program that takes a string and reverses it without using reverse().
//  input:
//      str = "JavaScript"
//  output:
//      "tpircSavaJ"

function reverseString(str){
    let reversedStr = "";
    for (let i = str.length - 1 ; i >= 0; i--) {
        reversedStr += str[i];
    }
    return(reversedStr);  
}
let str1 = "JavaScript";
console.log(reverseString(str1));



//Question 3 :)
//  Write a program that takes an array of strings and filters out only the words that have an even number of characters. Store these words in a new array and display the result.
//  input:
//      words = ["apple", "banana", "cherry", "hello", "world", "javascript"]
//  output:
//      ["banana", "hello", "world"]

// function evenLengthWords(){
//     let evenLengthWords = [];
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length % 2 === 0) {
//             evenLengthWords.push(words[i]);
//         }
//     }
//     return(evenLengthWords);
// }
// let words = ["apple", "banana", "cherry", "hello", "world", "javascript"];
// console.log(evenLengthWords(words));

// Another solution:
function evenLengthWords(words){
    let evenLengthWords = words.filter(word => word.length % 2 === 0);
    return(evenLengthWords);
}
console.log(evenLengthWords(["apple", "banana", "cherry", "hello", "world", "javascript"]))



//  Question 4 :)
//  Write a program that takes an object and converts all string values to uppercase.
//  input:
//      obj = { name: "ali", city: "tehran", country: "iran" }
//  output:
//      { name: "ALI", city: "TEHRAN", country: "IRAN" }

function uppercase(){
    let uppercaseObj = {};
    for (let key in obj) {
        uppercaseObj[key] = typeof obj[key] === "string" ? obj[key].toUpperCase() : obj[key];
    }
    return(uppercaseObj);
}
let obj = { name: "ali", city: "tehran", country: "iran" , age: 23 };
console.log(uppercase(obj));

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
function printStars2(){
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
    return(starA);
}
console.log(printStars2());


//output b:
//*****
// ****
//  ***
//   **
//    *

function printStars3(){
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
    return(starB);
}
console.log(printStars3());


//-------------------------------------------------- Qestion from slove 2 : --------------------
// practice 1 day2
function checkNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            console.log('negative');
        } else if (arr[i] > 0) {
            console.log('positive');
        } else {
            console.log('zero');
        }
    }
}
let nums = [10, -2, 5, 0, -15.5, 0.5];
checkNumbers(nums);


// practice 2 day2 :
function printNumbers1() {
    let num1 = 1;
    while (num1 <= 10) {
        console.log(num1);
        num1++;
    }
}
printNumbers1();


// practice 3 day2 :
function printNumbers2(){
    let num2 = 10 ; 
    do{
        console.log(num2);
        num2--;
    }while( num2 >= 1);
}
printNumbers2();


//practice 4 day 2 :
function printStars(){
    let stars = '';
    for( let i = 1 ; i <= 5 ; i++ ){
        for( let j = 1 ; j <= i ; j++){
            stars += '*';
        }
        stars += '\n';
    }
    console.log(stars);
}
printStars();


//practice 5 day 2 :
function checkEvenOdd() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is even`);
        } else {
            console.log(`${i} is odd`);
        }
    }
}
checkEvenOdd();


//practice 6 day 2 :
function printFruits(){
    for( let i = 0 ; i < fruits3.length ; i++ ){
        console.log(fruits3[i]);
    }
}
let fruits3 = [ 'apple' , 'banana' , 'cherry' ];
printFruits();



//practice 8 :

function printPersonDetails(person) {
    for (let element in person) {
        console.log(`${element}: ${person[element]}`);
    }
}
let person = {
    name : 'sara',
    age : 25 ,
    city : 'Tehran'
}
printPersonDetails();

//----------------

function printAnimal(animals){
    for( let animal of animals ){
        console.log(animal);
    }
}
// let animals = [ 'cat' , 'dog' , 'rabbit' ];
printAnimal([ 'cat' , 'dog' , 'rabbit' ]);



// practice 9 :
function stringCharacter(string){
    for( let character of string ){
        console.log(character);
    }
}
stringCharacter('javaScript');

// -------------------- with return :
// function stringCharacter(string) {
//     let characters = [];
//     for (let character of string) {
//         characters.push(character);
//     }
//     return characters;  // برگشت دادن تمامی کاراکترها در یک آرایه
// }
// console.log(stringCharacter('javaScript')); 

// -------------------- with for-in loop : 
// let string = "javaScript";
// for( let character in string ){
//     console.log(string[character])
// }



//[4,2,6,8,2,1,7,6,3,9] ==> a+b = 10 count: 4: (4,6)(8,2)(7,3)(9,1)

// let number3 = [4, 2, 6, 8, 2, 1, 7, 6, 3, 9];
// let obj5 = [];
// let checkedPairs = new Set();  

// for (let i = 0; i < number3.length; i++) {
//     for (let j = i + 1; j < number3.length; j++) {  
//         let out = number3[i] + number3[j];
//         if (out == 10) {
//             let pair = [number3[i], number3[j]].sort().join(','); 
//             console.log(pair)
//             if (!checkedPairs.has(pair)) {
//                 obj5.push({
//                     "first": number3[i],
//                     "second": number3[j]
//                 });
//                 checkedPairs.add(pair); 
//                 console.log(checkedPairs)
//             }
//         }
//     }
// }
// console.log(obj5);

//[4,2,6,8,2,1,7,6,3,9] ==> a+b = 10 count: 4: (4,6)(8,2)(7,3)(9,1)

function findPairsThatSumToTen(numberArray) {
    let obj5 = [];
    let checkedPairs = new Set();  
    
    for (let i = 0; i < numberArray.length; i++) {
        for (let j = i + 1; j < numberArray.length; j++) {  
            let out = numberArray[i] + numberArray[j];
            if (out == 10) {
                let pair = [numberArray[i], numberArray[j]].sort().join(','); 
                // console.log(pair);
                if (!checkedPairs.has(pair)) {
                    obj5.push({
                        "first": numberArray[i],
                        "second": numberArray[j]
                    });
                    checkedPairs.add(pair); 
                    console.log(checkedPairs);
                }
            }
        }
    }
    console.log(obj5);
}
let numberArray = [4, 2, 6, 8, 2, 1, 7, 6, 3, 9];
findPairsThatSumToTen(numberArray);



// {(())}  true
//{{})}   false
//{}{}()  true
//((())  false

// {()()}

function isValid(s) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{'
    };

    for (let char of s) {
        if (char === '(' || char === '{') {
            stack.push(char);  // Push opening brackets
        } else if (char === ')' || char === '}') {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false; // Mismatch or empty stack
            }
        }
        console.log(stack)
    }

    return stack.length === 0; // Stack should be empty if balanced
}

// Test cases
console.log(isValid("{(())}"));  // true
// console.log(isValid("{{})}"));   // false
// console.log(isValid("{}{}()"));  // true
// console.log(isValid("((())"));   // false
// console.log(isValid("{()()}"));  // true



// practice1 day4
function Addition(a,b){
    return( a + b );
}
function subtraction(a,b){
    return( a - b );
}
function multiplication(a,b){
    return( a * b );
}
function division(a,b){
    return( a / b );
}
console.log(Addition(20,10));
console.log(subtraction(20,10));
console.log(multiplication(20,10));
console.log(division(20,10));


// practice2 day4:
function fizzBuzz(num) {
    if (num % 3 === 0) return "Fizz";
    if (num % 5 === 0) return "Buzz";
    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
    return num;
}
console.log(fizzBuzz(30)); 
console.log(fizzBuzz(29)); 
console.log(fizzBuzz(12)); 
console.log(fizzBuzz(72)); 

let x = 'HELLO'
console.log(x.toLowerCase())


// practice3 day4:
function reverseString2(word){
    return word.toLowerCase() === word.toLowerCase().split("").reverse().join("");
}
console.log(reverseString2('Racecar'));
console.log(reverseString2('Hello'));