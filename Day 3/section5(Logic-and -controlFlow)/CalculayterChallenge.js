const calculator=(num1,num2,optr)=>{
    switch(optr){
        case '+':
            return num1+num2;
        case '-':
            return num1-num2;
        case '*':
            return num1*num2;
        case '/':
            return num1/num2;
        default:
            return `Invalid Operator ${optr}`;
    }
}

console.log(calculator(5,2,'+'));
console.log(calculator(5,2,'-'));
console.log(calculator(5,2,'*'));
console.log(calculator(5,2,'/'));
console.log(calculator(5,2,'$'));