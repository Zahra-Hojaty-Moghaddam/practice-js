//exercise
  
console.log("solve")

// ### **Exercise: JavaScript Basics**  
// 1. **Create an object** named `student` with the following properties:  
//    - `name`: Your name  
//    - `age`: Your age  
//    - `courses`: An array containing 3 programming languages you're interested in  
//    - `address`: An object with `city` and `country`  

const course1 = "html"
const student = {
    name : "mohsen",
    age : 24,
    courses: [course1 , "css" , "js"],
    address : {
        city : "Tehran",
        country : "IRAN"
    }
}
console.log(student)

// 2. **Modify the object:**  
//    - Add a new property `email` to the `student` object  
//    - Change the `city` value in `address`  

student.email = "mohsen.sarvari@ut.ac.ir"
console.log(student)
student.address.city = "Mashhad"
console.log(student)
console.log(student.address.city)
// 3. **Array Operations:**  
//    - Create an array `numbers` with values `[10, 20, 30, 40, 50]`  
//    - Add `60` to the end of the array  
//    - Remove the first element from the array  
//    - Find the index of `30`  


const numbers = [10,20,30,40,50];
numbers.push(60);
numbers.shift();
console.log(numbers.indexOf(30));
console.log(numbers);

// 5. **String Manipulation:**  
//    - Create a string `sentence = "JavaScript is awesome!"`  
//    - Convert it to uppercase  
//    - Find the length of the string  
//    - Replace `"awesome"` with `"powerful"`  

const sentence = "Javascript is awesome!";
console.log(sentence.toUpperCase())
console.log(sentence.toUpperCase().length)
console.log(sentence.replace('awesome','powerful'))



// let email1 = "mohsenesarvari1379@gmail.com";
// moh...@gmail.com

const email = "mohsenesarvari1379@gmail.com"
const pos = email.indexOf("@")
console.log(pos)
const end = email.slice(pos)
console.log(end)
const start = email.slice(0,3)
console.log(start)
console.log(`${start}...${end}`)


 

// console.log(Object.keys(obj1))
// console.log(Object.values(obj1))
// const keys = Object.keys(obj1);
// const values = Object.values(obj1);
// console.log(Object.entries(obj1))
// newObjs.name = "ali"

const obj1 = {
    name : "mohsen",
    'lname-1' : "sarvari",
    age : 20
    
}
console.log(obj1['lname-1'])
obj1.email ='sdfghj@dfg'
obj1['book']='fdd'
console.log(obj1)
// obj1.name = 'faeze'
// obj1['name'] ='faeze'

console.log(obj1.name)
console.log(obj1["name"])

const newObjs = {}
for (let i in obj1){
    newObjs[obj1[i]] = i;
}
console.log(newObjs)


const students = {
    student1: "Ali",
    student2: "Reza",
    student3: "Sara"
};
// students['student3']
let newStudents = {};
for(let j in students){
    newStudents[students[j]] = j;
}
console.log(newStudents)






const ob = {
    book_1 : 'a',
    book2 : 'b',
    book3 : 'c',
    book4 : 'd'
}
let obNew = {};
for(let key in ob){
    obNew[ob[key]] = key;
}
console.log(obNew);









console.log(ob.book_1);





























// const newObgect = {};
// for(let key in students){
//     newObgect[students[key]]= key ;
// }
// console.log(newObgect)


// const students = [
//     { name: "Ali", score: 75 },
//     { name: "Reza", score: 80 },
//     { name: "Sara", score: 75 },
//     { name: "Mona", score: 90 },
//     { name: "John", score: 80 }
// ];

// function createScoreObject(students) {
//     const scoreObj = {}; // آبجکت جدید برای ذخیره نمرات و نام‌ها

//     // استفاده از for-of برای پیمایش آرایه
//     for (let student of students) {
//         scoreObj[student[score]] = student[score]; // آخرین نام با نمره مشابه در آرایه قرار می‌گیرد
//     }

//     return scoreObj;
// }

// const result = createScoreObject(students);
// console.log(result);


delete obj1.age;
 
// const newObj = {
//     mohsen : "name",
//     sarvari : "lname",
//     20 : "age"
// }





// 4. **Loops & Conditions:** 
//      - add [80,60] to numbers 
//    - Loop through `numbers` and print only the even numbers  
//     
//    - Check if `[80,60]` is in the array, and if it is, print `"Found array"`  


const numbers2 = [10,20,30,40,50];
numbers2.push([80,60]);
console.log(numbers2);
for(let key in numbers2){
    console.log(numbers2[key]);
    console.log(Array.isArray(numbers2[key]));
}



const str = "mohsen nan  mohsen wedaj  efoijseo  654161  mohsen."
// output : mohsen repeated : 3

// const indexWord = str.indexOf("mohsen");
// // const lengthWord = "mohsen".length;
// console.log(str.indexOf("mohsen",indexWord + lengthWord))
// console.log(lengthWord)
// console.log(indexWord)

const word = "mohsen";
const lengthWord = word.length;
let count = 0;
let offset = 0;
let position = str.indexOf(word,offset);
console.log(position);

while(position !== -1){

    count = count + 1;
    offset = position + lengthWord;
    position = str.indexOf(word,offset);

}
console.log(`${word} occured in sentence is : ${count}`)


