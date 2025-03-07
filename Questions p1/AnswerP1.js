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

//  input :
const array1 = [ 1, 2, 'red'];
const array2 = [ 3, 4, 'orange'];
const array3 = [ 5, 6, 'pink'];
const array4 = [ 7, 8, 'blue'];

//  a:
const array5 = array1.concat(array2,array3,array4);
console.log(array5);

const Array5 = [...array1,...array2,...array3,...array4];
console.log(Array5);

//  b:
const numbers = [];
numbers.push(array1.shift(),array1.shift());
numbers.push(array2.shift(),array2.shift());
numbers.push(array3.shift(),array3.shift());
numbers.push(array4.shift(),array4.shift());
console.log(numbers);
console.log(array1)
//  c:
var colors = [];
colors.push(array1.pop());
colors.push(array2.pop());
colors.push(array3.pop());
console.log(colors);



//  Qestion2:)
//  input:
//        fruits = ['apple' , 111 , 222 , 333 , 'orange' , 'grapes' , 'watermelon']
//  output:
//        fruits = ['apple' , 'the numbers is deleted' , 'orange' , 'grapes' , 'watermelon']

var fruits = ['apple' , 111 , 222 , 333 , 'orange' , 'grapes' , 'watermelon'];
fruits.splice(1,4,'the numbers is deleted');
// delete fruits[0];
console.log(fruits);


//  Qestion3:)
//  input:
//        sentence = "That cat is very cute and smart. ";
//  output:
//        very qute

const sentence = "That cat is very cute and smart. ";
const text = sentence.slice(12, 21); // text.substring(12, 21)
console.log(text);
// console.log(sentence);




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

const wizard = {firstName: "Harry", lastName: "potter", schoolName: "Hogwarts" };
const prettyJson = JSON.stringify(wizard, null,"\t");
console.log(prettyJson);




//  Qestion5:)
//  Create an object that contains information about employee
//  Get and display all the keys of this object.
//  Get and display all the values of this object.
//  Add a new property called experience with the value 5 years to the object and then display the updated object.
//  Display the employee object again.

const employee = {
    firstName : "sara",
    lastName : "ahadi",
    position: "Developer",
    salary: 5000
}
const keys = Object.keys(employee);
console.log(keys);
const values = Object.values(employee);
console.log(values);
employee.experience = 5;
console.log(employee);