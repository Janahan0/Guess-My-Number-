'use strict';

/// Guess My Number!
// generate a random number between 1 and 20
let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);

// constant variable list
const questionMarkDiv = document.querySelector('.number');
const guess = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const message = document.querySelector('.message');
const labelScore = document.querySelector('.label-score');
const emoji = document.querySelector('.emoji');
const againButton = document.querySelector('.again');
const countChancesLeft = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const btn = document.getElementById('btn');
// initial game state
let score = 20;
let topScore = 0;

highScore.innerHTML = topScore;

//check! button click event listener
checkButton.addEventListener('click', function () {
  //when input field is blank
  if (guess.value === '') {
    checkButton.disabled === true;
    message.textContent = '⚠️ Guess first, then click, Check!';
    message.style.color = 'red';
    //when guesses are outside the range 1 to 20
  } else if (Number(guess.value) > 20 || Number(guess.value) < 1) {
    checkButton.disabled === true;
    message.textContent = '⚠️ Choose a number from 1 to 20 as your guess';
    message.style.color = '#FACD35';
  } else {
    //when guesses are within and inclusive of 1 to 20
    if (score <= 20 && score >= 1) {
      const guessedNumber = Number(guess.value);
      // now log it:
      console.log(guessedNumber, typeof guessedNumber);
      //score is displayed in amber to highlight the score is 10 or less to add tension
      if (score < 11) {
        labelScore.style.color = '#FACD35';
      }
      //score is displayed in red to highlight the score is 3 or less to ramp up tension
      if (score < 4) {
        labelScore.style.color = 'red';
      }
      //messaging change when guesses are less than the randomly generated secretNumber
      if (guessedNumber < secretNumber) {
        message.textContent = 'too low!';
        message.style.color = 'blue';
        //reducing the score for the each wrong guess
        score--;
        countChancesLeft.innerHTML = score;

        //messaging change when guesses are more than the randomly generated secretNumber
      } else if (guessedNumber > secretNumber) {
        message.textContent = 'too high!';
        message.style.color = '#FF00FF';
        //reducing the score for the each wrong guess
        score--;
        countChancesLeft.innerHTML = score;

        //messaging change when guess is equal to the randomly generated secretNumber
      } else if (guessedNumber === secretNumber) {
        message.textContent = "🎉 You're Correct!";
        message.style.color = '#222';
        labelScore.style.color = '#222';
        //reducing the score for the winning guess
        score--;
        countChancesLeft.innerHTML = score;
        //?div containing displayed secretNumber doubles in width
        questionMarkDiv.style.width = '30rem';
        questionMarkDiv.textContent = String(secretNumber);
        //body background colour change to highlight victory
        document.querySelector('body').style.backgroundColor =
          'rgb(96, 179, 71)';
        //hide the check! button on winning guess to force player to click Again! button. I settled on this approach because I could not find a way to disable the check! button to stop it reducing the score further even after the secretNumber was guessed correctly. I explored stackoverflow and could not understand the coding solutions fully so didn't want to copy and paste.
        checkButton.style.display = 'none';

        // High score logic
        if (score > topScore) {
          topScore = score;
          highScore.innerHTML = topScore;
        } else if (score === topScore) {
          topScore = score;
          highScore.innerHTML = topScore;
        } else {
          topScore = topScore;
          highScore.innerHTML = topScore;
        }
      }
    }
  }

  //when score reaches 0 and no guesses have been successful
  if (score === 0) {
    message.textContent = "😱 You've Lost!";
    message.style.color = '#222';
    countChancesLeft.innerHTML = score;
    //score styling changed
    emoji.innerHTML = '🗑 ';
    labelScore.style.color = '#222';
    //body background colour change to highlight loss
    document.querySelector('body').style.backgroundColor = 'red';
    //hide the check! button on losing guess to force player to click Again! button. I settled on this approach because I could not find a way to disable the check! button to stop it reducing the score further even after the secretNumber was guessed correctly. I explored stackoverflow and could not understand the coding solutions fully so didn't want to copy and paste.
    checkButton.style.display = 'none';
  }
});

// restarting game by clicking Again! button by resetting all initial values when click event occurs
againButton.addEventListener('click', function () {
  //initial game state reset
  score = 20;
  countChancesLeft.innerHTML = score;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log(secretNumber);
  //input field empty and button enabled
  guess.value = '';
  checkButton.disabled === false;
  //messaging reset
  message.textContent = 'Start guessing...';
  message.style.color = '#eee';
  //body background color rest
  document.querySelector('body').style.backgroundColor = '#222';
  //secretNumber display styling reset
  questionMarkDiv.style.width = '15rem';
  questionMarkDiv.textContent = '?';
  //score styling reset
  emoji.innerHTML = '💯 ';
  labelScore.style.color = '#eee';
  //restore check! button to play game
  checkButton.style.display = 'block';
});

//run a random number generating function for creating a random number between 1-20
// run random number generating function on load and pressing Again! button
//type guess between 1-20 in input
//click Check button to submit guess and if guess === random number saved then eventCaller changes body background colour from black to green

// messaging:
console.log(document.querySelector('.message').textContent);

// Start guessing...
// too low!
// document.querySelector('.message').textContent = 'Whoops! Too low!';
// Too high!
// document.querySelector('.message').textContent = 'Whoops! Too high!';
// 🎉 Correct Number!
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// ----------------------------------------------------------------------------------------------------------------

/// What's the DOM and DOM Manipulation

// DOM: Document Object Model: is the tree structure representation of HTML documents. Allows Javascript to access html elements and styles to manipulate them

// each HTML element is one object

// DOM !== Javascript 🤔

// ----------------------------------------------------------------------------------------------------------------

/// Selecting and Manipulating HTML Elements
/*
document.querySelector('.message').textContent = '🎉 Correct Number!'; //writing : 🎉 Correct Number! for the element  then
console.log(document.querySelector('.message').textContent); // reading: 🎉 Correct Number! in the console

console.log(document.querySelector('.label-score').textContent);

console.log((document.querySelector('.number').textContent = 12));
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23; //writing: 23
console.log(document.querySelector('.guess').value); // reading: 23 in the console // for an input element we use the value property
*/

// ----------------------------------------------------------------------------------------------------------------

/// Handling Click Events:
/*
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);

});
*/ // adding a click event listener to the button with class = check. listens for the button being clicked so something then can be run by the code. addEventListener is a method (ie function), with (in this example) a parameter which specifically is click argument. A function is just a value and therefore a function can have another function as it's parameter. this anonymous function is the eventHandler -  it is just a function value

//assigning a value to variable makes a function expression

// we do not call the eventHandler function value, we just define it and pass it into the eventListener method as a parameter (argument).

// the eventListner method waits to be called and is only called by the click event happening
/*
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = '🎉 Correct Number!';
}); 
*/
// here, the eventListner method will log the number entered into the input field and will also change the message to 🎉 Correct Number!

// saving the value typed into the input field:
/*
document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);
  // now log it:
  console.log(guessedNumber, typeof guessedNumber);

  if (!guessedNumber) {
    document.querySelector('.message').textContent = '⚠️ Type your guess first';
  } else if (guessedNumber > 20) {
    document.querySelector('.message').textContent =
      '⚠️ Your guess must be between 1 and 20';
  }
});
*/
