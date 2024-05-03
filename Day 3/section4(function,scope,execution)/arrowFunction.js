const sum=(a,b)=>{
    return a+b;
}
console.log(sum(3,5));

//implicit retrun
const diff=(a,b)=>a - b;

console.log(diff(89,4));





//single parameter in arrowFunction
const print = a =>a;
console.log(print('subash'));

//retrun obj
const createObj=()=>({
    name:'subash',
    age:19
});

console.log(createObj());


const arr=[1,2,3,4,5,6];
arr.forEach(function(s){
    console.log(s);
})

//arrow function in callback
arr.forEach(s=>{
    console.log(s);
})