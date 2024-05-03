let i=0;
while(i<=10){
    console.log(i);
    i++;
}

//while loop in arrays 
const arrays=[1,2,3,4,5,6,9];
while(i<arrays.length){
    console.log(arrays[i]);
    i++;
}

//nested while
const a=10;
let k=1;
while(k<=a){
    let j=1;
    while(j<=a){
        console.log(`${k}*${j}=${k*j}`);
        j++;
    }
    k++;
}