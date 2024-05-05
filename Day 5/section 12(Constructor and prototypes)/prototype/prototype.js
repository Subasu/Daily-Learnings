function Person(fName,lName){
    this.firstName=fName;
    this.lastName=lName;
}

Person.prototype.gender='male';

const person=new Person('subash','jr');
console.log(person,person.gender);