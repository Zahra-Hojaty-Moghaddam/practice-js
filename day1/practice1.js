// Practice 1 :
const student = {
    name : 'zahra',
    age : 23,
    courses : [ 'html' , 'css' , 'js'],
    address : {
        country : "Iran" ,
        city : "Mashhad"
    }
}

// Practice 2 :
student.email = 'zahrahojatymoghaddam@gmail.com';
// console.log(student);
student.address.city = 'tehran';
// console.log(student);

//****************************************************** */

// Practice 3:
const numbers = [ 10, 20, 30, 40, 50];
// console.log(numbers);
// numbers.unshift(10);

//Add 60 to the end of the array:
numbers.push(60);
console.log(numbers);

// Remove the first element of the numbers
numbers.shift()
console.log(numbers);
// numbers.pop();
// console.log(numbers);

//Find the index of '30':
console.log(numbers.indexOf(30));

// Practice 4 : 
// Add [80 , 60] to the end of the array:
numbers.push( [ 80 , 60 ] );
console.log(numbers);
for(var i = 0 ; i <= numbers.length ; i++){
    if( Array.isArray(numbers[i]) ){
        console.log(numbers[i] + ': is array');
    }
    else{
        console.log(numbers[i] + ': is not array');
    }
}

//****************************************************** */

// Practice 5 :
let sentence = 'JavaScript is awesome';
console.log(sentence.toUpperCase());
console.log(sentence.length);
console.log(sentence.replace('awesome', 'powerful'));

//****************************************************** */

// practice 6 :
let email1 = "zahrahojatymoghaddam@gmail.com";
console.log(email1.slice(0,3) + '...' + '@gmail.com')

// practice 6 with AI :
let email = "example@example.com";
let parts = email.split("@");
console.log(parts)
// let firstPart = parts[0].slice(0, 3);
// let domainPart = parts[1];
// let formattedEmail = firstPart + "..." + domainPart;
// console.log(formattedEmail); 
// console.log(parts);
// console.log(parts[0].slice(0,3) + "...@" + parts[1])
console.log(parts.join(' '));
//****************************************************** */

// practice 7 :
const obg = {
    fname : 'zahra',
    lname : 'hojaty',
    age : 23 
}
const keys = Object.keys(obg);
console.log(keys);
console.log(typeof keys)

const values = Object.values(obg);
console.log(values); 

let newObg = {};
for( let i = 0 ; i < keys.length ; i++){
    newObg[values[i]] = keys[i];
}
console.log(newObg);

const newObg3 = {};
keys.forEach((key,index)=>{
    newObg3[key] = values[index]
});
console.log(newObg3);

// AI:
// const newObg2 = keys.reduce((acc, key, index) => {
//     acc[key] = values[index]; 
//     return acc;
// }, {});

// console.log(newObg2);

//-------------------------

//Second solution with AI:
// const obgec = {
//     fname : 'zahra',
//     lname : 'hojaty',
//     age : 23 
// };

// const newObgec = Object.keys(obgec).reduce((acc, key) => {
//     acc[obg[key]] = key;
//     return acc;
// }, {});

// console.log(newObgec);
