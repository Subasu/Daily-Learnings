// same as objects but keys also contains "keys":"valuse"
const data={
    id:1,
    title:'Happy Coding',
    body:'body of the document'
}

// mostly used to send data to server
let str=JSON.stringify(data);
console.log(str);

str=JSON.parse(str);
console.log(str);