const name='subash';
const mark=22;

let t;
t='my name is '+name+' and my age is '+mark;
console.log(t);
t=`my name is ${name} and my age is ${mark}`;
console.log(t);

t=typeof t;
console.log(t);
t=t.length;
console.log(t);

//access value by key
const s=new String('subash');
console.log(s[0]);

t=s.__proto__;
console.log(t);

t=s.toUpperCase();
console.log(t)
t=s.toLowerCase();
console.log(t);

t=s.charAt(5);
console.log(t);

t=s.indexOf('b');
console.log(t);

//substring
t=s.substring(0,4)+' '+s.substring(4,6);
console.log(t);

//slice
t=s.slice(-6,-2);
console.log(t);

//trim 
t='    subash';
t=t.trim();
console.log(t);

//replace 
t=s.replace('suba','abcd');
console.log(t);

t=s.includes('suba');
console.log(t);

t=s.valueOf('s');
console.log(t);

t=s.split('');
console.log(t);

t=s.split('s');
console.log(t);