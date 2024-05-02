let k;
const num=new Number(5);

k=num.toString();
k=num.toString().length;
k=num.toFixed(2);
console.log(k);
k=num.toPrecision(3);
console.log(k);
k=num.toExponential(2);
console.log(k);
k=num.toLocaleString('en-US');
console.log(k);
k=num.valueOf();
console.log(k);

k=Number.MAX_VALUE;
console.log(k);
k=Number.MIN_VALUE;
console.log(k);
