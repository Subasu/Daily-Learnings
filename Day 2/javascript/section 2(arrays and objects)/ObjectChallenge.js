//step 1
const liberary=[{
    title:'movie',
    author:'sujan',
    status:{
        own:true,
        reading:false,
        read:false
    }
},
{
    title:'story',
    author:'narine',
    status:{
        own:true,
        reading:false,
        read:false
    }
},
{
    title:'shortflim',
    author:'rajan',
    status:{
        own:true,
        reading:false,
        read:false
    }
}
]

//step2
liberary[0].status.read=true;
liberary[1].status.read=true;
liberary[2].status.read=true;
console.log(liberary);

//step 3
const{title:firstBook}=liberary[0];
console.log(firstBook);

//step4
const string=JSON.stringify(liberary);
console.log(liberary);