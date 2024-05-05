//DEVELOPER Method
async function getUser(){
    const result=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await result.json();
    console.log(data);
}

getUser();

const getPost=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/posts');
    const data=await res.json();
    console.log(data);
}
getPost();



//OLD Method
// function getUser(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((result)=>result.json())
//     .then((data)=>console.log(data[0]));
// }

// getUser();

