// Code your solutions in this file

const writeCard = ["Guadalupe", "Ollie", "Aki"];
const newCard = [];
let countDownNum;
function writeCards (){

    for (let i = 0; i < writeCard.length; i++){
        newCard.push(`Thank you, ${writeCard[i]}, for the wonderful surprise gift!`)
        debugger;
    }

    return newCard;

}

function countDown(x){
    let countDownNum =x;
    while(countDownNum>=0){
        console.log(countDownNum);
        --countDownNum;
    }
     
}

countDown(4);
countDown(10);