const date3 = new Date(2023,4,22,7,32,1);
const month=date3.getMonth();

console.log(month);
switch(month){
    case 0:
        console.log('january');break;
    case 1:
        console.log('feburary');break;
    case 2:
        console.log('march');break;
    case 3:
        console.log('april');break;
    case 4:
        console.log('may');break;
    case 5:
        console.log('june');break;
    case 6:
        console.log('july');break;
    case 7:
        console.log('august');break;
    case 8:
        console.log('september');break;
    case 9:
        console.log('october');break;
    case 10:
        console.log('november');break;
    case 11:
        console.log('december');break;
    default:
        console.log('Enter a number between 10 to 11');
}