/* document.getElementById(id-name);
document.getElementByClassName(class-name);
document.querySelector()
document.querySelectorAll()
nextElementSibling
previousElementSibling
*/
let output;
const par=document.querySelector('.container');

output=par.childNodes;

output=par.childNodes[1];

output=par.childNodes[2].nodeName;

output=par.childNodes[2].outerHTML;

output=par.firstChild;
output=par.lastChild;

console.log(par);

//creating element

const div=document.createElement('div');
div.className='my-div';
console.log(div);

const text=document.createTextNode('hello i am subash');
div.appendChild(text);