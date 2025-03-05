//practice 1 :

let nums = [ 10 , -2 , 5 , 0 , -15.5 , 0.5];
for( let i = 0 ; i < nums.length ; i++ ){
    if( nums[i] < 0 ){
        console.log('negative');
    }else if( nums[i] > 0 ){
        console.log('positive');
    }else{
        console.log('zero');
    }
}


//practice 2 :

let num1 = 1;
while( num1 <= 10 ){
    console.log( num1 );
    num1 ++;
}


//practice 3 :

let num2 = 10 ; 
do{
    console.log(num2);
    num2--;
}while( num2 >= 1);


//practice 4 :

let stars = '';
for( let i = 1 ; i <= 5 ; i++ ){
    for( let j = 1 ; j <= i ; j++){
        stars += '*';
    }
    stars += '\n';
}
console.log(stars);


//practice 5 :

for(let i = 1 ; i <= 20 ; i++){
    if( i % 2 == 0 ){
        console.log(`${i} is even`);
    }else{
        console.log(`${i} is odd`)
    }
}

//practice 6 :

let fruits = [ 'apple' , 'banana' , 'cherry' ];
for( let i = 0 ; i < fruits.length ; i++ ){
    console.log(fruits[i]);
}


//practice 7 :

for( let i = 1 ; i <= 10 ; i++ ){
    if( i == 6 ){
        break;
    }
    console.log(i);
}

for( let j = 1 ; j <= 10 ; j++ ){
    if( j == 5 ){
        continue;
    }
    console.log(j);
}


//practice 8 :

let person = {
    name : 'sara',
    age : 25 ,
    city : 'Tehran'
}
for( let element in person){
    console.log(`${element} ${person[element]}`);
}

let animals = [ 'cat' , 'dog' , 'rabbit' ];
for( let animal of animals ){
    console.log(animal);
}


//practice 9 :

let string = "javaScript";
for( let character of string ){
    console.log(character);
}
// for( let character in string ){
//     console.log(string[character])
// }


//practice 10 :

// console.log(namBer[i] + ' + ' + namBer[j] + ' = ' + sum);


console.log("============")
let sum = 0 ;
let namBer = [ 4, 2, 6, 8, 2, 1, 7, 6, 3, 9];
for( let i = 0 ; i < namBer.length ; i++){
    for( let j = 1 ; j < namBer.length ; j++){
        sum = namBer[i] + namBer[j];
        if( sum == 10 ){
            console.log( '( ' + namBer[i] + ' , ' + namBer[j] + ' )')
        }
    }
}//This story continues... 
//please wait :)