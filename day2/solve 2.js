console.log("solve")

// 1. If Condition: input = 10 output = pos , input=0 output = zero
// Write a program that checks if a given number is positive, negative, or zero.

// let input1 = window.prompt("insert the number:")
// console.log(input1)
// console.log(typeof input1)
// let input1 = "12"
// if(Number(input1) > 0 ){
//     console.log("positive")
// }else if (Number(input1 )=== 0 ){
//     console.log("zero")
// }else{
//     console.log("negative")
// }

// document.getElementById('submit').addEventListener('click',(e)=>{
//     e.preventDefault()
//     let inputElement = document.getElementById('input2');
//     let inputValue = inputElement.value;
//     let showElement= document.getElementsByClassName('show')[0];
//     showElement.innerHTML = inputValue 
//     inputElement.value = ""
// })
    

// 2. While Loop:
// Write a program that prints numbers from 1 to 10 using a while loop.

let b = 1;
while(b<=10){
    console.log(b);
    b++;
}
//node
// let l = 1;
// while (l <= 10) {
//     process.stdout.write(l + " "); 
//     l++;
// }

// let d = 1;
// let results = ""; 

// while (d <= 10) {
//     results += d + " "; 
//     d++;
// }

// console.log(results.trim()); 
// console.log(typeof results.trim()); 
// console.log(Number(results.trim())); 
// console.log(typeof(results.trim())); 


// 3. Do-While Loop:
// Write a program that prints numbers from 10 to 1 using a do-while loop.

// let g = 10;
// do{
//     console.log(g)
//     g--
// }while(g >= 1)


// 4. For Loop (Nested):
// Write a program that prints the following pattern using nested for loops:

for(let c=0; c<6; c++){
    let stars = "*";
    for(let a=0; a<c ; a++){
        stars += '*';
    }
    console.log(stars);
}
// *
// **
// ***
// ****
// *****

// 5. Even & Odd Numbers:
// Write a program that prints even numbers from 1 to 20 and odd numbers from 1 to 20.
let r=0;
let evens =[]
let odds =[]
while(r<=20){

    if(r%2 == 0){
        evens.push(r)
    }else{
        odds.push(r)
    }

    r++
}
console.log(`evens is ${evens}`)
console.log(`odds is ${odds}`)

// 6. Loop Through an Array:
// Write a program that takes an array ["apple", "banana", "cherry"] and prints each element using a for loop.
let fruitss = ['a','b','c']
for(let itemss of fruitss){
    console.log(itemss)
}


// 7. Break & Continue:
// Print numbers from 1 to 10 but stop when the number 5 is reached.
// Print numbers from 1 to 10 but skip number 5.
for(let f=1 ; f<=10;f++){
    if(f == 5){
        break ;//continue
    }
    console.log(f)
}
// 8. For-in & For-of Loops:
// Create an object {name: "Sara", age: 25, city: "Tehran"} and print its properties using a for-in loop.
// Create an array ["cat", "dog", "rabbit"] and print its elements using a for-of loop.

// const obj4 = {
//     name : "sara",
//     age : '25',
//     city : 'tehran'
// }
// for(let option in obj4){
//     console.log(option +":"+ obj4[option])
// }

// 9. String Iteration:
// Write a program that prints each character of "JavaScript" using a for-of loop.
// let str1= "javascripts"
// for(let chr of str1){
//     console.log(chr)
// }

//[4,2,6,8,2,1,7,6,3,9] ==> a+b = 10 count: 4: (4,6)(8,2)(7,3)(9,1)
// let number3 = [4,2,6,8,2,1,7,6,3,9]
// let obj5=[]
// for(let h of number3 ){
//     for(let index in number3){
//         let out = h + number3[index];
//         if(out == 10){
//             obj5.push({
//                 "first" : h,
//                 "second" : number3[index]
//             })
//         }
//     }
// }
// console.log(obj5)


// let number3 = [4, 2, 6, 8, 2, 1, 7, 6, 3, 9];
// let obj5 = [];
// let checkedPairs = new Set();  // 

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

// let number3 = [4, 2, 6, 8, 2, 1, 7, 6, 3, 9];
// let obj5 = [];
// let seen = new Set();  

// for (let num of number3) {
//     let complement = 10 - num;  


//     if (seen.has(complement)) {
//         obj5.push({
//             "first": complement,
//             "second": num
//         });
//     }


//     seen.add(num);
//     console.log(seen)
// }

// console.log(obj5);

// let number3 = [4, 2, 6, 8, 2, 1, 7, 6, 3, 9];

// let arr7 = []
// let sets = new Set()
// for(let t of number3){
//     let comp = 10 - t
//     if(sets.has(comp)){
//         arr7.push({
//             "first" : comp,
//             "second":t
//         })
//     }
//     sets.add(t)
// }
// console.log(arr7)
// console.log(sets)

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
console.log(isValid("{{})}"));   // false
console.log(isValid("{}{}()"));  // true
console.log(isValid("((())"));   // false
console.log(isValid("{()()}"));  // true
