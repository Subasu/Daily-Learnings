/* memory creation phase:
1 create global obj
2 crate this obj bindt it to global
*/
/*Execution phase */

const num1=100;
const num2=100;

const getsum=(a,b)=>a+b;

const sum1=getsum(num1,num2);
const sum2=getsum(189,91);
console.log(sum1,sum2);
