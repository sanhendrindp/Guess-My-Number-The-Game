'use strict';

// Starting condition
let score = 20;
let highscore = 0;
let playing = true;

// Gain secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

// Function to display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Check button event
document.querySelector('.check').addEventListener('click', function () {
  if (playing) {
    const guess = Number(document.querySelector('.guess').value);

    // If there is no guess
    if (!guess) {
      displayMessage('⛔ No Number!');

      // If guess is correct
    } else if (guess === secretNumber) {
      displayMessage("🎉 You're Correct!");
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '25rem';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      playing = false;
      document.querySelector('.check').classList.add('non-active');

      // If guess is wrong
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.score').textContent = 0;
        displayMessage('👎 You Lose...');
        document.querySelector('body').style.backgroundColor = '#EA5455';
        playing = false;
        document.querySelector('.check').classList.add('non-active');
      }
    }
  }
});

// Retry button event
document.querySelector('.retry').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   console.log(secretNumber);
  score = 20;
  playing = true;

  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highscore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = 'rgb(60, 60, 60)';
  document.querySelector('.guess').value = '';
  document.querySelector('.check').classList.remove('non-active');
  displayMessage('Start Guessing...');
});
