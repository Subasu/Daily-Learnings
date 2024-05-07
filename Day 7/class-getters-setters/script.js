class Person{
    constructor(fName,lName){
        this._fName=fName;
        this._lName=lName;
    }

    get fName(){
        return this.capatilize(this._fName);
    }
    get lName(){
        return this.capatilize(this._lName);
    }

    set fName(value){
        this._fName=value;
    }
    set lName(value){
        this._lName=value;
    }

    capatilize(params) {
        return params.charAt(0).toUpperCase()+params.slice(1);
    }
}
const person =new Person('subash','ganesan');
console.log(person.fName);
console.log(person.lName);
person.fName='dhanush';
console.log(person.fName);
