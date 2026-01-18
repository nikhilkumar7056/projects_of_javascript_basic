let randomNumber = parseInt(Math.random() * 100 + 1); //generate random numbers
// console.log(randomNumber)
const submit = document.querySelector('#subt'); //submit button
const userInput = document.querySelector('#guessField'); // taking value of user enter
const guessSlot = document.querySelector('.guesses'); // previous guess numbers
const remaining = document.querySelector('.lastResult'); // remaining chances of guess
const lowOrHi = document.querySelector('.lowOrHi'); // hint of value is less or greater than your value
const startOver = document.querySelector('.resultParas'); //if user guess correct or chances complete than give massege of start over

const p = document.createElement('p');

let prevGuess = []; // store the values which user has submit values
let numGuess = 1; // no. of attempts which user has take for guess

let playGame = true; // allow to play game

//check for avaliable for play game

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value); // taking user value
    // console.log(guess);
    validateGuess(guess)
  });
}

function validateGuess(guess) {
  // this function is use to check that user enter a valid value
  if (isNaN(guess)) {
    alert(`Please enter a valid number`);
  } else if (guess < 1) {
    alert(`Please enter a number greater than 1`);
  } else if (guess > 100) {
    alert(`Please enter a number less than 100`);
  } else {
    prevGuess.push(guess); // adding value into array
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over, Random value is ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // used to check value, is user value is same,greater,less than the random value. give an msg
  if (guess === randomNumber) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is tooo low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is tooo high`);
  }
}

function displayGuess(guess) {
  //dom mainuplation there we decrease chance, add guesses etc
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  if(numGuess === 12){
    endGame()
  }else {
    remaining.innerHTML = `${11 - numGuess}`;
}
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
