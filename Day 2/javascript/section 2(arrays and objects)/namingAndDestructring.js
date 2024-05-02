firstName='subash';
lastName='ganesan';
age=18;
const person={
    firstName,
    lastName,
    age,
};
console.log(person);

//destructuring of arrays
const num=[23,53,75,90];

// const[first,second]=num;
// console.log(num);
// console.log(first,second);

const[first,second, ...rest]=num;
console.log(num);
console.log(first,second);
console.log(first,second, ...rest);
