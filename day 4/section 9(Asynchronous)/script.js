//single threaded
//sequencial flow
//synchronous executes code one line at a time 

setTimeout(()=>{
    document.querySelector('h1').textContent='hello from callback';
},2000);


//setInterval clearInterval

let intervalId;
function startInterval(){
    if(!intervalId){
        intervalId=setInterval(changecolor,2000);
    }
}

function changecolor(){
    if(document.body.style.backgroundColor!=='black'){
        document.body.style.backgroundColor ='black';
        document.body.style.color='white';
    }
    else{
    document.body.style.backgroundColor ='white';
    document.body.style.color='black';
    }
}
function stopChange(){
    clearInterval(intervalId);
}

document.getElementById('start').addEventListener('click',changecolor);

document.getElementById('stop').addEventListener('click',stopChange);