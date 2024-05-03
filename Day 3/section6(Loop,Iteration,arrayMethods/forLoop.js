// for(let i=0;i<=10;){
//     console.log(i)
// }

const arr=['apple','mangoe','orange','graps'];

for(let i=0;i<=arr.length;i++){
    console.log(arr[i]);
}
//nested for
let num=10;
for(let i=1;i<=num;i++){
    for(let j=1;j<=num;j++){
        console.log(`${i}*${j}=${i*j}`);
    }
}

console.log('----------------------------')
// break and continue statements

for(let i=0;i<=arr.length;i++){
    if(arr[i]==='mangoe'){
        break;
    }
    console.log(arr[i]);
}
console.log('----------------------------')
for(let i=0;i<arr.length;i++){
    if(arr[i]==='mangoe'){
        continue;
    }
    console.log(arr[i]);
}



//for-of loop

for(const a of arr){
    console.log(a);
}

//loop over string

let str='subash ganesan';
for(const letter of str){
    console.log(letter);
}

//loop over maps
const map=new Map();
map.set('name','subash');
map.set('age',26);

for(const as of [name,age] ){
    console.log(as);
}