const randomNumber = parseInt(Math.random() *100 +1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const p = document.createElement('p');

let prevGuesses = [];
let numGuess = 1;

const startgame = true;

if(startgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter a Valid Number');
    }else if(guess < 1){
        alert('Please Enter a Number More than 1');
    }else if(guess > 100){
        alert('please enter a number less than 100')
    }else{
        prevGuesses.push(guess);
        if(numGuess === 11){
            displayGuesses(guess);
            displayMessage(`Game Over.The Random NUmber Was ${randomNumber}`);
            endgame();
        }else{
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess){
    if(guess === randomNumber){
        displayMessage('You Guessed it Right');
        endgame();
    }else if( guess > randomNumber){
        displayMessage('Number Is High');
    }else if( guess < randomNumber){
        displayMessage('Number Is High');
    }
}

function displayguess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess},`;
    numGuess++;
    prevGuesses.innerHTML = `${11-numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}<\h2>`;
}