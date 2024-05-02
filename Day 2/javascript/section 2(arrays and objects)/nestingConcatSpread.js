const fruts=['apple','orange','pear'];
const berries=['strawberry','blueberry','rasberry',]

//console.log(fruts.push(berries));

console.log(fruts.concat(berries));

//Spread Operators
let r;

r=[...fruts,...berries]

//flaten arrays
r=[1,2,[3,4],5,6,[7,8],8]
console.log(r);
r=r.flat();
console.log(r);

//static methods of array
//array.from
//array.toArray