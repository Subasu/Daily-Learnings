/*GET POST PUT PATCH DELETE*/
function createPost(title,body/* -post */){//since title and body are object we can directly get.
        fetch('https://jsonplaceholder.typicode.com/posts/',{
            method:'POST',
            body:JSON.stringify({
                title/*post.title */,
                body/*post.body*/
            }),
            headers:{
                'Content-Type':'application/json',
                token:'123do'
            }
        }
    ).then((res)=>res.json())
    .then((data)=>console.log(data));
}


createPost('I like Tea','I like to drink tea');