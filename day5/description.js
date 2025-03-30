
let mySet = new Set(); // ایجاد یک مجموعه خالی

mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(20); // مقدار تکراری اضافه نمی‌شود

console.log(mySet); // خروجی: Set { 10, 20, 30 }


let numbers = new Set([1, 2, 3, 4]);

console.log(numbers.has(3)); // خروجی: true (چون مقدار ۳ در مجموعه است)
console.log(numbers.size);   // خروجی: 4 (تعداد عناصر)

numbers.delete(2); // حذف مقدار ۲
console.log(numbers); // خروجی: Set { 1, 3, 4 }

numbers.clear(); // حذف تمام مقادیر
console.log(numbers); // خروجی: Set {}



let fruits = new Set(["🍎", "🍌", "🍇"]);

for (let fruit of fruits) {
    console.log(fruit);
}
// خروجی:
// 🍎
// 🍌
// 🍇


fruits.forEach(fruit => console.log(fruit));


let mySet2 = new Set([1, 2, 3, 4]);
let myArray = [...mySet2]; // تبدیل به آرایه
console.log(myArray); // خروجی: [1, 2, 3, 4]


let numbers2 = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = new Set(numbers2);
console.log(uniqueNumbers);
console.log([...uniqueNumbers]); // خروجی: [1, 2, 3, 4, 5]


// use :
// 1 : Remove duplicate values ​​from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
let numbers3 = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers3)); // خروجی: [1, 2, 3, 4, 5]

// 2 : Finding the first duplicate value
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

// 3 : Checking common values ​​between two sets
function getCommonElements(set1, set2) {
    return [...set1].filter(value => set2.has(value));
}

let set1 = new Set(["apple", "banana", "cherry"]);
let set2 = new Set(["banana", "cherry", "date"]);

console.log(getCommonElements(set1, set2)); // ["banana", "cherry"]
