const promise=new Promise((resolve,reject)=>{
    //Do someting async task
    setTimeout(()=>{
        console.log('async task completed');
        resolve();
    },1000);
});

promise.then(()=>{
    console.log('promise consumed');
});

new Promise((resolve,reject)=>{
    //Do someting async task
    setTimeout(()=>{
        console.log('async task 2 completed');
        resolve();
    },1000);
}).then(()=>console.log('promise 2 consumed'));


const user=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let err=false;
        if(!err){
            resolve({name:'subash',age:28});
        }
        else{
            reject('Something went Wrong!');
        }
    },1000);
});
user
.then((users)=>console.log(users))
.catch((error)=>console.log(error))
.finally(()=>console.log('promise has been resolved or rejected'))


console.log('This is Global Scope');