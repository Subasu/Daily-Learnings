let a=false;
if(!a){
    a=100;
}
console.log(a);

//same of above   

// ||-it particularly search for falsey in first
a=0|| 100//a || 100;
console.log(a);

// ??-it particularly search for null or undefined in first

a= undefined??100;
console.log(a);

