// 1- Find Prime Numbers in an Array
// Given an array of numbers, use a loop to find prime numbers and store them in a new array
// let numbers = [2, 3, 4, 7, 10, 13, 17, 20, 23, 29];

// 0 , 1 is not prime
function isPrime(num){
    if(num < 2) {
        return false
    }
    //اگر عدد مرکب باشد، حداقل یک مقسوم‌علیه کوچک‌تر یا مساوی جذر آن عدد دارد!
    for(let i = 2 ; i <= Math.sqrt(num) ; i++){
        if (num % i == 0) return false
    }
    return true
}
// Math.sqrt(2) ≈ 1.414
// Math.sqrt(3) ≈ 1.732
// Math.sqrt(4) ≈ 2
// Math.sqrt(7) ≈ 2.645
// Math.sqrt(10) ≈ 3.162
// Math.sqrt(13) ≈ 3.606
// Math.sqrt(17) ≈ 4.123
// Math.sqrt(20) ≈ 4.472
// Math.sqrt(23) ≈ 4.796
// Math.sqrt(29) ≈ 5.385

let number= [2, 3, 4, 7, 10, 13, 17, 20, 23, 29] 
const prime = number.filter(isPrime)
console.log("prime"+ prime)

// console.log("prime : "+ prime)
// console.log("prime : ", prime)
// console.log(typeof prime)

// console.log("prime:", JSON.stringify(prime));// خروجی بهتری توی نود جی اس میده
// console.log(typeof prime)
//JSON.stringify(): مقدار رو به رشته تبدیل می‌کنه، ولی فرمتش رو شبیه آرایه نگه می‌داره.
//typeof روی هر آرایه‌ای "object" برمی‌گردونه، چون در جاوااسکریپت، آرایه‌ها هم نوعی آبجکت هستن.

//دلیل استفاده از جذر این است که اگر عددی مقسوم‌علیه‌ای داشته باشد، حداقل یکی از مقسوم‌علیه‌ها باید کوچکتر یا مساوی جذر آن عدد باشد.


//============================= question2 : =================================

// 2- Replace Even Numbers with "EVEN" and Odd Numbers with "ODD"  
//  Transform an array so that even numbers are replaced with `"EVEN"` and odd numbers with `"ODD"`.  
//  let numbers = [3, 8, 15, 22, 7, 10, 19];

let numbers = [3, 8, 15, 22, 7, 10, 19];
// let newNumbers1 = [];
// numbers.forEach((num)=>{
//     // if( num % 2 == 0 ){
//     //     newNumbers1.push('EVEN');
//     // }
//     // else{
//     //     newNumbers1.push('ODD')
//     // }
//     (num % 2 == 0) ? newNumbers1.push('EVEN') : newNumbers1.push('ODD')
// })
// console.log(newNumbers1);

let newNumbers2 = numbers.map(numb=>{
    return numb % 2 === 0 ? "EVEN" : "ODD" ;
})
console.log(newNumbers2);

// let newNumbers3 = numbers.map(numb => numb % 2 === 0 ? "EVEN" : "ODD");
// console.log(newNumbers3);

//============================= question3 : =================================

// 3- Find the Longest Word in an Array
// Given an array of words, find the longest word.  
// let words = ["apple", "banana", "strawberry", "kiwi", "watermelon"];

let words = ["apple", "banana", "strawberry", "kiwi", "watermelon"];

let longestWord = words.reduce((longest, word) => {
    return word.length > longest.length ? word : longest;
}, words[0]);
console.log(longestWord);

//============================= question4 : =================================

// 4- Reverse Each Word in an Array  
// Given an array of words, return a new array where each word is reversed.  
// let words = ["hello", "world", "JavaScript", "coding"];

function reverse(arry){
    let reverseWords = arry.map((word)=> word.split('').reverse().join(''));
    return (reverseWords);
}
console.log(reverse(["hello", "world", "JavaScript", "coding"]));

//============================= question5 : =================================
let obj = {
    a : 1 ,
    b : 2
}

for ( let char in obj){
    console.log(char + ' : ' + obj[char]);
}

obj['d'] ;
console.log(obj['d']);

// console.log(obj['a']);
// obj['c'] = 2 ;
// console.log(obj['c']);


// 5- Count the Occurrences of Each Letter in a String
// Given a string, count how many times each letter appears.  
// let str = "javascript";

let str1 = "javascript";
let counterChar = str1.toLowerCase().split('').reduce((acc,char)=>{
    acc[char] = (acc[char] || 0 ) + 1 ;
    return acc ;
},{});
console.log(counterChar);

//----

// chars = {
//     j : 1 , 
//     a : 2 ,
//     v : 1 ,
//     s : 1 , 
//     c : 1 ,
//     r : 1 ,
//     i : 1 ,
//     p : 1 ,
//     t : 1 
// }

let str2 = "javascript";
let chars = {}; // Use an object to store character counts

for (let ch of str2) {
    if (ch in chars) {
        chars[ch] += 1; // Increment count if character exists
    } else {
        chars[ch] = 1; // Initialize count if character appears for the first time
    }
}
console.log(chars);

//----

function countLetters(str) {
    let letterCount = {};  // دیکشنری برای ذخیره تعداد حروف

    for (let char of str) {
        if (char.match(/[a-zA-Z]/)) {  // بررسی اینکه کاراکتر یک حرف باشد
            char = char.toLowerCase();  // تبدیل به حروف کوچک برای شمارش بهتر
            letterCount[char] = ( letterCount[char] || 0 ) + 1;
        }
    }

    return letterCount;
}
console.log(countLetters("Hello World!"));  
//============================= question6 : =================================

// 6-
//  Filter Objects by a Specific Key Value
//  Given an array of people, filter those whose age is greater than 25.
//  const people = [
//     { name: "Ali", age: 22 },
//     { name: "Sara", age: 28 },
//     { name: "Reza", age: 30 },
//     { name: "Nina", age: 24 }
// ];

const people = [
        { name: "Ali", age: 22 },
        { name: "Sara", age: 28 },
        { name: "Reza", age: 30 },
        { name: "Nina", age: 24 }
    ];

let filterAge = people.filter((person)=>{
    return person.age > 25 ;
})
console.log(filterAge);

//============================= question7 : =================================

// 7-
// let numbers = [2, 4, 5, 7, 8, 4, 9, 10, 5];
// Find the First Duplicate in an Array. 
// Find the first repeating number in an array.  


let numbers2 = [2, 4, 5, 7, 8, 4, 9, 10, 5];

let firstDuplicate = numbers2.reduce((acc, num) => {
    if (acc.found) return acc; // اگر مقدار تکراری قبلاً پیدا شده، از ادامه حلقه رد شو
    if (acc.set.has(num)) {
        acc.found = num; // مقدار تکراری را ذخیره کن
    }
    acc.set.add(num); // مقدار فعلی را به مجموعه (Set) اضافه کن
    return acc;
}, { set: new Set(), found: null }).found;

console.log(firstDuplicate); // خروجی: 4

//----

let numbersA = [2, 4, 5, 7, 8, 4, 9, 10, 5];

let newArr = [];
for (let item of numbersA) {
    if (newArr.includes(item)) {
        console.log(`First duplicated number: ${item}`);
        break; // Stop checking after the first duplicate
    } else {
        newArr.push(item);
    }
}


//-----------------
function findFirstDuplicate(arr) {
    let seen = new Set();
    for (let num of arr) {
        if (seen.has(num)) {
            return num; // اولین مقدار تکراری را برمی‌گرداند
        }
        seen.add(num);
    }
    return -1; // اگر هیچ مقدار تکراری نبود
}
console.log(findFirstDuplicate([1, 2, 3, 4])); // خروجی: 2
