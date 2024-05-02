let date;
date=new Date();
console.log(date.toString());

date=new Date(2024,0,10,2,40,33);
console.log(date);

//date methods
date =new Date();
console.log(date.valueOf());
console.log(date.getTime());
console.log(date.getFullYear());
console.log(date.getMonth()+1);//zero based
console.log(date.getDay());
console.log(date.getMinutes());
console.log(date.getDate());
console.log(date.getHours());

console.log(`${date.getFullYear()}-0${date.getMonth()+1}-0${date.getDate()}`);

//
date=date.toLocaleString('default', {month:'short'});
console.log(date);