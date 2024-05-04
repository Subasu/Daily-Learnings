const clearBtn=document.querySelector('#clear');

clearBtn.onclick= function (){
    alert('Clear Item1');
}

// function clear(){
//     alert('hello')
// }
clearBtn.addEventListener('click',()=>{
    alert('Clear Item2');
});

clearBtn.addEventListener('click',()=>{
    console.log('Clear Item2');
});

clearBtn.addEventListener('click',clear());

setTimeout(()=>clearBtn.removeEventListener('click',clear
),3000);

// Mouse events 
// click
// dblclick
// contextmenu
// mousedown
// mouseup
// wheel