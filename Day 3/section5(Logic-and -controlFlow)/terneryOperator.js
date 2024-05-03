const age=18;

//using if else

if(age>=18){
    console.log('eligible to vote');
}
else{
    console.log('not eligible to vote');
}

//using ternary

(age>=18)? console.log('eligible to vote'):console.log('not eligible to vote');

(age>=18)? 'eligible to vote':'not eligible to vote';

const auth=false;
let redirect;
 
// (auth)?(alert(`welcome to dashboard`),redirect='/dashboard',console.log(redirect)):(alert(`Access denied`),redirect='/home',console.log(redirect));

auth ? null:console.log('welcome to dashbord');