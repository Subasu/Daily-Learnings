let fruits=['apple','orange','banana','cucumber'];

fruits=new Array('apple','orange','banana','cucumber');

console.log(fruits);
//mixed arrays
fruits=['apple',1,'banana','cucumber',3,5];
console.log(fruits);

console.log(fruits.length);

fruits[0]='pineaple';
console.log(fruits);

//add new element at end
fruits[fruits.length]=3443;
console.log(fruits);

//methods

fruits.push(420);
console.log(fruits);

fruits.pop();
console.log(fruits);

//reverse a array
fruits.reverse();
console.log(fruits);

console.log(fruits.includes(1));

console.log(fruits.indexOf(1));

console.log(fruits.indexOf(11));
//creates a duplicate array and from 0 to index 1 the array elements are removed
console.log(fruits.slice(1));
// change the orginal array starts from index 1 goes to index 2
// console.log(fruits.splice(1,2));

