//  boolean()
//  is false : 0 , -0 , '' , undefined , null , NaN

// console.log(Boolean(0));
// console.log(Boolean(-0));
// console.log(Boolean(-1));

// console.log(Boolean(''));
// console.log(Boolean(' '));

// console.log(Boolean(undefined));
// var c;
// console.log(c);
// console.log(typeof c);
// console.log(Boolean(c));

// console.log(Boolean(NaN));
// var d = 'flower'/ 5 ;
// console.log(Boolean(d));


// if(NaN){
//     console.log('Hi');
// }else{
//     console.log('bye');
// }

////////////////////////////////////////////////////////////////

// console.log('---------------- part 1 : ----------------');
// // Number + String -> Number is converted to String.
// console.log( '2' + 3 );
// console.log( '2' + true );
// console.log( '2' + undefined );
// console.log( 4 + 6 + ' Ordibehesht');

// console.log('---------------- part 2 : ----------------');
// // Number - * / String -> String is converted to Number.
// console.log( '3' - 2 );
// console.log( '3' * 2);
// console.log( '3' / 2);

// console.log('---------------- part 3 : ----------------');
// // Non-numeric string with - * /
// console.log( 'zahra ' - 'hojaty Moghaddam' );
// console.log( 'zahra ' * 'hojaty Moghaddam' );
// console.log( 'zahra ' / 'hojaty Moghaddam' );
// console.log( 'zahra ' - 5 );
// console.log( 'zahra ' * 5 );
// console.log( 'zahra ' / 5 );

// console.log('---------------- part 4 : ----------------');
// console.log(Number(true));
// console.log(Number(false));

// // Boolean convert to Number :
// console.log( '4' - true );
// console.log( '4' * true );
// console.log( '4' / true );
// console.log( '4' * false );

// console.log( '4' + true );
// console.log( 4 + true );

// console.log('---------------- part 5 : ----------------');
// // null convert to Number : null is converted to zero.
// console.log( 4 + null );
// console.log( 4 - null );
// console.log( 4 * null );

// console.log('---------------- part 6 : ----------------');
// // undefinef 
// console.log( undefined + 2 );
// console.log( undefined + true );
// console.log( undefined + null );

// ////////////////////////////////////////////////////////////////

// console.log('---------------- part 1 : ----------------');

// // console.log( f++ );     //postfix Increment    پس افزایش
// // console.log( f-- );     //postfix Decrement    پس کاهش

// // console.log( ++f );     //prefix Increment     پیش افزایش
// // console.log( --f );     //prefix Decrement     پیش کاهش

// console.log('f++ , f-- :');

// var f = 20 ;
// console.log( f );
// console.log( f++ );
// console.log( f );
// console.log( f * 10 );

// console.log('++f , --f :');

// var g = 10 ;
// console.log( g );
// console.log( ++g );
// console.log(g);


// //  Question 2: What is the final value of x?
// let x = 10;
// x = x++ * 2 + --x;
// console.log(x);
// // x++ returns 10, but after execution, x becomes 11.
// // --x decrements x to 10.
// // Calculation: 10 * 2 + 10 = 30.


