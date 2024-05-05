class Rectangle{
    constructor(length,bredth){
        this.length=length;
        this.bredth=bredth;
        this.area=length*bredth;
    }
}

const rec=new Rectangle(12,32);
console.log(rec);