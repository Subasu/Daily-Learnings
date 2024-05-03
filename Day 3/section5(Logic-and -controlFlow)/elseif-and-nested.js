const date=new Date(23,42,2023,20,89,33);
const hours=date.getHours();

if(hours>=18){
    console.log("good evening");
    if(hours>22){
        console.log('go to sleep');
    }
}
else if(hours>=12){
    console.log('good afternoon');
    if(hours===4){
        console.log('Drink a cup of tea');
    }
}
else{
    console.log('good morning');
}
