function addItem(){
    const todoData=document.getElementById("input").value;
    const todoList=document.getElementById("body");
    if(todoData!==''){
        const createElement=document.createElement('div');
        createElement.textContent=todoData;
        todoList.appendChild(createElement);
        document.getElementById("input").value='';
    }
    else{
        alert(`please write something in the input`)
        console.log(`write something int he input field`);
    }
}

document.querySelector("#btn").addEventListener('click',addItem);
