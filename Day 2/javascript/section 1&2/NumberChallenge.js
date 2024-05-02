const d=Math.floor(Math.random()*100+1);
const f=Math.floor(Math.random()*50+1);

let i;

i=d+f;
console.log(`${d}+${f}=${i}`);

i=Math.abs(d-f);
console.log(`${d}-${f}=${i}`);

i=d*f;
console.log(`${d}*${f}=${i}`);

i=d/f;
console.log(`${d}/${f}=${i}`);

i=d%f;
console.log(`${d}%${f}=${i}`);