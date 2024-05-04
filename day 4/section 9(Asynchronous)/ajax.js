const hxr=new XMLHttpRequest();
// hxr.open('GET','./movie.json');
hxr.open('GET','https://api.github.com/users/bradtraversy/repos');

hxr.onreadystatechange=()=>{
    if(this.readyState===4 && this.status===200){
        const data=JSON.parse(this.responseText);
        data.forEach((mov)=>{
            const li=document.createElement('li');
            li.innerHTML=`<strong>${mov.name}</strong>-${mov.description}`;
            document.querySelector('#results').appendChild(li);
        });
    }
};
hxr.send();