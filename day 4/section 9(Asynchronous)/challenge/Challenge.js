const jokeEl=document.getElementById('joke');
const jokeBtn=document.getElementById('joke-btn');

const generateJoke=()=>{
    const xhr=new XMLHttpRequest();
    xhr.open('GET','https://api.chucknorris.io/jokes/random')

    xhr.onreadystatechange=()=>{
        if(xhr.readyState ===4 && xhr.status===200){
            jokeEl.innerHTML=JSON.parse(xhr.responseText).value;
        }
        else{
            jokeEl.innerHTML='Something Went Wrong(Not Funny)';
        }
    }
    xhr.send();
};


jokeBtn.addEventListener('click',generateJoke);
jokeBtn.addEventListener('DOMContentLoader',generateJoke);