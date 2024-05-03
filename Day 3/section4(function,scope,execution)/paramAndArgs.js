//bot will be taken as default here
function registration(user= 'Bot'){
    return user+" is registred";
}

console.log(registration());
console.log(registration('subash'));

//rest params

function addUnlimitedNumbers(...num){
    let total=0;
    for(const tot of num){
        total+=tot;
    }
    return total;
}
console.log(addUnlimitedNumbers(1,2,3,4,5,6,7,8,9,100));

function objFunction(user){
    return `my name is ${user.name} and I am ${user.age} years old from ${user.city} `;
}

const data ={
    name:'subash',
    age:22,
    city:'chennai'
}

console.log(objFunction(data));

function getElement(array){
    return Math.floor(Math.random()*array.length);
}
console.log(getElement([1,2,3,4,5,6,7,8,9]));

function getElement1(...array){
    return Math.floor(Math.random()*array.length);
}

console.log(getElement1(1,2,3,4,5,6,7,8,9));

