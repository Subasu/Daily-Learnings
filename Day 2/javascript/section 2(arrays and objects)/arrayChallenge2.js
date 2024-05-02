const arr1=[1,2,3,4,5];
const arr2=[5,6,7,8,9,10];

let arr3=arr1.splice(0,4);
arr3=arr3.concat(arr2);
console.log(arr3);