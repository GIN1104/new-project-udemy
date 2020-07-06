'use strict';


//////////////
// Условия////
/////////////

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

// const num = 50;
// switch (num){
//     case 49: 
//          console.log("Wrong");
//          break;
//     case 100:
//         console.log("Wrong");
//         break;  
//     case 50:
//         console.log("You are right!");
//         break;
//     default:
//         console.log("Next time!");
//         break;         
// }


//////////////
// Loop  ////
/////////////


let num = 50;

// while (num <= 55){
//     console.log(num);
//     num++;
// }

// do{
//     console.log(num);
//     num++;
// }
// while (num < 55);


for(let i = 1; i < 10; i++){
    if(i === 6){
        // break;
        continue;
    }
        console.log(i); 
        num++; 
}

///////////////
// Функции ////
///////////////
let num1 = 50;
function showFirstMassage(text, age){
    console.log(text, age);
    // let num1 = 20;
     console.log(num1);
}

showFirstMassage('Hello World!');
showFirstMassage(24);
showFirstMassage('Hello World!', 24);
console.log(num1);


function calc(a, b){
    return ( a + b);

}
console.log(calc(4 , 3));
console.log(calc(5 , 6));
console.log(calc(10 , 6));

function ret(){
    let num = 50;
    return num;
}
const anohterNum = ret();
console.log(anohterNum);

const logger = function (){
  console.log("Hello!");
};
logger();

const calc1 = (a,b) => {return a + b;};
console.log(calc1(4, 6));
console.log(calc1(4, 90));
console.log(calc1(6));


