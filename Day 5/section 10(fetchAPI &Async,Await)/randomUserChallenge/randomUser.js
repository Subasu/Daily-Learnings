function fetchUser(){
    fetch('https://randomuser.me/api')
    .then((res)=>res.json())
    .then((data)=>displayUser(data.results[0]));//result array contains all the users data
}

function displayUser(user){
    if(user.gender==='male'){
        document.body.style.backgroundColor='gray';
    }
    else{
        document.body.style.backgroundColor='brown';
    }
    document.querySelector('.secondary').innerHTML=`
    <img src="${user.picture.large}">
    <p><span id="demo">Name:</span>${user.name.first} ${user.name.last}</p>
    <p><span id="demo">Email:</span>${user.email}</p>
    <p><span id="demo">Phone:</span>${user.phone}</p>
    <p><span id="demo">Location:</span>${user.location.city} ${user.location.country}</p>
    <p><span id="demo">Age:</span>${user.dob.age}</p>`;

}

document.querySelector('.btn').addEventListener('click',fetchUser);
fetchUser();