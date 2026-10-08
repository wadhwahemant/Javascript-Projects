const randomNumber = parseInt(Math.random()*100+1)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const p = document.createElement('p')
let prevGuess =[]
let numGuess =1
let playGame =true
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        
        console.log("Button clicked!");

        const guess = parseInt(userInput.value);
        console.log(guess);

        validateGuess(guess);
    });
}
function validateGuess(guess){
    //value in 1-100 value is there or not
    if(isNaN(guess)){
        alert("Please enter a valid number.")
    }else if(guess<1){
        alert("Please enter a valid number.")
    }else if(guess>100){
        alert("Please enter a valid number.")
    }else{
        prevGuess.push(guess)
        if(numGuess==1)
    }
}

function checkGuess(guess){
    //value is =random no or not
}
function diplayGuess(guess){
    // 
}
function displayMessage(displayMessage){
    // 
}
function endGame(){
    // 
}
function newgame(){
    // 
}