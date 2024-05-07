function Person(FirstName,LastName){
    this._FirstName=FirstName;
    this._LastName=LastName;
    Object.defineProperty(this,'FirstName',{
        get:function(){
            return this.capatilizeFirst(this._FirstName);
        },
        set:function(val){
            return this._FirstName=val;
        }
    });
    Object.defineProperty(this,'LastName',{
        get:function(){
            return this.capatilizeFirst(this._LastName);
        },
        set:function(val){
            return this._LastName=val;
        }
    });
};

Person.prototype.capatilizeFirst=function(val){
    return val.charAt(0).toUpperCase()+val.slice(1);
}

const person=new Person('subash','ganesan');
console.log(person.FirstName);
console.log(person.LastName);