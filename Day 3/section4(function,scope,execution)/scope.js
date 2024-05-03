//global
//window. are all global scope
// window.alert('subash');

//y is global
const y=100;

function call(){
    console.log(y);
}
call();

// x is local->Block scope
function call1(){
    const x=129;
    console.log(y+x);
}
call1();

//console.log(x);//cNNOT be displayed because the x is inside the function


//var is global scope all except function
function call2(){
    var z=129;
    console.log(y+z);
}
call1();
console.log(z);

