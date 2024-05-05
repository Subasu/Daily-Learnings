class First{
    First (num1,num2) {
        this.num1=num1;
        this.num2=num2;
    }
    add(){
        console.log(this.num1+this.num2);
    }
}


class Second extends First{
    constructor(){
        super(11,21);
        this.add();
    }
}

const secObj=new Second();
console.log(secObj);
