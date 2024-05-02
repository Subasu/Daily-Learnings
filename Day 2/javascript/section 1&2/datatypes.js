// premitives data types----stored in stack
// String -sequence of Characters
// Number -SVGAnimatedInteger,floating Point
// Boolean -null
// Null -Intensionaly absence of obj
// Undefined -var not defined
// symbol-build in obj retrun a symbol
// BigInt - integers greater than Numbers

// Refrence datatypes----stored in heap

// Object
// Array
// function


// javascript is dynamically typed language


const firstName='subash';
const age=18;
const big=null;
const scor=undefined;
const bigint=9289824980880280840280480284n;
const output1=big;
const output2=bigint;
console.log(output1,typeof output1);
console.log(output2,typeof output2);

//function type

function call(){
    console.log('calling');
}
const output3=call;
console.log(output3,typeof output3);
 