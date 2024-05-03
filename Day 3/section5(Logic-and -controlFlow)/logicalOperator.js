let d;
d=20 && 10;//all truely then return last true value
console.log(d);

d=undefined || undefined || null ||10;//return truely if any one is true if more than one is true then returns the last truely
console.log(d);

//look for null or undefined
d=12 ?? 20;
d=null ?? 20;
d=undefined ?? 20;
console.log(d);