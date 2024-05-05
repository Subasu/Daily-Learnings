// abstraction-hiding implementation and only showing the method
// encapsulation-wraping code and data together (getter and setter)
// inheritance-inherit properties and behaviours of base class in ch8il class
// polymrphism-overloading and overridding

function Rectangle(name,length,width,res=0){
    this.name=name;
    this.length=length;
    this.width=width;
    this.res=length*width;
}

const rec1=new Rectangle('rec1',12,12);
console.log(rec1);