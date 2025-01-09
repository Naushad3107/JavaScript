//generate a random color

const randomColor = function(){
    const hex = '123456789ABCDEF';
    let color = '#'

    for(let i =0; i <6;i++){
        color += hex[Math.floor(Math.random() *16)]
    }
    return color
};

let IntervalId;
const startChanging = function(){

if(!IntervalId){
    IntervalId =setInterval(changeBg,1000);
}

function changeBg(){
    document.body.style.backgroundColor = randomColor();
   }
}

const stopChanging = function(){
    clearInterval(IntervalId);
    IntervalId = null;
}

document.querySelector('#start').addEventListener('click',startChanging)
document.querySelector('#Stop').addEventListener('click',stopChanging);