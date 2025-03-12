//exercise
  
 console.log("solve")
//
//  input:
//    array1 = [ 1, 2, 'red'];
//    array2 = [ 3, 4, 'orange'];
//    array3 = [ 5, 6, 'pink'];
//    array4 = [ 7, 8, 'blue'];

//  output : 
//    a:    array5 = [ 1, 2, 'red', 3, 4, 'orange', 5, 6, 'pink', 7, 8, 'blue']
//    b:    numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// //contact

const array1 = [1, 2, 'red'];
const array2 = [3, 4, 'orange'];
const array3 = [5, 6, 'pink'];
const array4 = [7, 8, 'blue'];

// ترکیب آرایه‌ها
const array5 = array1.concat(array2, array3, array4);

console.log("array5:", array5);

// // فیلتر کردن اعداد
const numbers = array5.filter(item => typeof item === 'number');

console.log("numbers:", numbers);

//or

// let  array1 = [ 1, 2, 'red'];
// let  array2 = [ 3, 4, 'orange'];
// let  array3 = [ 5, 6, 'pink'];
// let  array4 = [ 7, 8, 'blue'];

// let array5 = [...array1,...array2,...array3,...array4] ;
// console.log(array5)

let numberst = []
for(let i of array5){
    if(typeof i === "number"){
        numberst.push(i)
    }
}
console.log(numberst)

//  input:
//        fruits = ['apple' , 111 , 222 , 333 , 'orange' , 'grapes' , 'watermelon']
//  output:
//        fruits = ['apple' , 'the numbers is deleted' , 'orange' , 'grapes' , 'watermelon']
//splice
// let fruits = ['apple' , 111 , 222 , 333 , 'orange' , 'grapes' , 'watermelon']

// for(let i=0 ; i < fruits.length; i++){
//     if(typeof fruits[i]=== "number"){
//         fruits[i] = "the number is deleted";
//     }
// }
// console.log(fruits)

//
// let fruits = ['apple', 111, 222, 333, 'orange', 'grapes', 'watermelon'];

// for (let i = 0; i < fruits.length; i++) {
//   if (typeof fruits[i] === 'number') {
//     fruits.splice(i, 1, 'the numbers is deleted');
//     i--; 
//   }
// }

// console.log(fruits);

// //
let fruits = ['apple', 111, 222, 333, 'orange', 'grapes', 'watermelon'];

let firstNumberIndex = fruits.findIndex(item => typeof item === 'number');

if (firstNumberIndex !== -1) {
    fruits.splice(firstNumberIndex, 3, 'the numbers is deleted');
}

console.log(fruits);



//  input:
//        sentence = "That cat is very cute and smart. ";
//  output:
//        very qute

let sentences = "That cat is very cute and smart. ";
let words = sentences.split(" ")
console.log(words)
console.log(words[3]+" "+words[4].replace('c','q'))


//  input:
//  We have an object wizard with the following structure:
//        firstName: "Harry", lastName: "potter", schoolName: "Hogwarts"
//  Convert the product wizard into a pretty JSON string (with indentation) using JSON.stringify().
//  Use an indentation of 4 spaces(or tab) to make the JSON more readable.
//  output:
//        {
//            "firstName": "harry",
//            "lastName": "potter",
//            "schoolName": "Hogwarts"
//        }

let wizard = {
    firstName: "Harry",
    lastName: "potter",
    schoolName: "Hogwarts"
};

// Convert firstName to lowercase
wizard.firstName = wizard.firstName.toLowerCase();

// Convert the object to a JSON string with an indentation of 4 spaces
let prettyJSON = JSON.stringify(wizard, null, 4);

console.log(prettyJSON);

//  Create an object that contains information about employee
//  Get and display all the keys of this object.
//  Get and display all the values of this object.
//  Add a new property called experience with the value 5 years to the object and then display the updated object.
//  Display the employee object again.

// Step 1: Create an object that contains information about an employee
let employee = {
    firstName: "John",
    lastName: "Doe",
    position: "Software Engineer",
    department: "Engineering",
    salary: 50000
};

// // Step 2: Get and display all the keys of this object
let keyss = Object.keys(employee);
console.log("Employee Keys:", keyss);  // Output: ['firstName', 'lastName', 'position', 'department', 'salary']

// // Step 3: Get and display all the values of this object
let valuess = Object.values(employee);
console.log("Employee Values:", valuess);  // Output: ['John', 'Doe', 'Software Engineer', 'Engineering', 50000]

// // Step 4: Add a new property called 'experience' with the value '5 years' to the object
employee.experience = "5 years";

// // Step 5: Display the updated object
console.log("Updated Employee Object:", employee);

// // Step 6: Display the employee object again
console.log("Final Employee Object:", employee);
