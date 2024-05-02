const obj={
    name:'subash',
    age:30,
    isAdmin:true,
    address:{
        street:'ladak',
        city:'chennai' 
    }
}
console.log(obj);
console.log(obj.address);

obj.greet=function(){
    console.log('Hi,I am subash');
}
obj.greet();


//operators

const obj1={1:'1',2:'2',3:'3'};
const obj2={4:'4',5:'5',6:'6'};
const obj3={obj1,obj2};
console.log(obj3);

const obj4={...obj1,...obj2};
console.log(obj4);

const obj5=Object.assign({},obj1,obj2);
console.log(obj5);

//key & values
console.log(Object.keys(obj5));
console.log(Object.keys(obj5).length);
console.log(Object.values(obj5));

console.log(Object.entries(obj5));



