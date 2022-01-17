let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.Random() * 10);
}

function compareGuesses(humanGuess, computerGuess, secretTarget) {

  if (humanGuess >= 10) {
    alert("Input Number is Out Of Range");
  }

  if (Math.abs(humanGuess - secretTarget) < Math.abs(computerGuess - secretTarget)) {
    return true;
  } else if (Math.abs(computerGuess - secretTarget) < Math.abs(humanGuess - secretTarget)) {
    return false;
  } else if (Math.abs(computerGuess - secretTarget) === Math.abs(humanGuess - secretTarget)) {
    return true;
  } else {
    return 'Invalid input, Enter a valid Number';
  }
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}