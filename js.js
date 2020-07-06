'use strict';


if(4 == 9){
    console.log("Ok!");
}else{
 console.log('Error');
}

// const num = 50;

// if(num < 49){
//     console.log('Error');
// }else if(num > 100){
//     console.log('Too much')
// }else{
//     console.log('Ok! Ok')
// }

// (num === 50) ? console.log('Ok! Ok') : console.log('Error');

const num = 50;
switch (num){
    case 49: 
         console.log("Wrong");
         break;
    case 100:
        console.log("Wrong");
        break;  
    case 50:
        console.log("You are right!");
        break;
    default:
        console.log("Next time!");
        break;         
}