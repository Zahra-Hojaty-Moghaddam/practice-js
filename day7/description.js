// 1:Destruction in Arrays
let numbers = [10, 20, 30];

// let a = numbers[0];
// let b = numbers[1];
// console.log(a, b); // 10, 20

// with destructuring :
let [a, b] = numbers;
console.log(a, b); // 10, 20

let [x, , y] = numbers;
console.log(x, y); // 10, 30

// 2:Destruction in Objects
let user = {
    name: "Ali",
    age: 25,
    city: "Tehran"
};

// let name = user.name;
// let age = user.age;
// console.log(name, age); // "Ali", 2

// with destructuring :
let { name, age } = user;
console.log(name, age); // "Ali", 25

let { name: fullName, age: userAge } = user;
console.log(fullName, userAge); // "Ali", 25


// 3:Destructuring an array of objects
let items = [
    { link: "Google", href: "https://google.com" },
    { link: "Yahoo", href: "https://yahoo.com" }
];

// items.forEach((item) => {
//     let link = item.link;
//     let href = item.href;
//     console.log(link, href);
// });

// with destructuring :
items.forEach(({ link, href }) => {
    console.log(link, href);
});

// 4:Using Default Value in Destructuring
let person = { fname: "Sara" };
let { fname, age1 = 30 } = person;
console.log(fname, age1); // "Sara", 30  (چون age وجود نداشت، مقدار پیش‌فرض 30 گرفت)

// 5 :Combining Destructuring with Functions
// function showInfo(user) {
//     console.log(`Name: ${user.name}, Age: ${user.age}`);
// }
function showInfo({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}
showInfo({ name: "Reza", age: 28 }); 
// خروجی: Name: Reza, Age: 28

