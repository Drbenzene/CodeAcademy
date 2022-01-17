const getUserChoice = (userInput) => {
  // userInput = userInput.toLowerCase();
  if (userInput === "") {
    console.log('Please Enter a valid value');
  } else {
     userInput = userInput.toLowerCase();
  }

  switch (userInput) {
    case 'rock':
    return userInput;
    break;
    case 'paper':
    return userInput;
    break;
    case 'scissors':
    return userInput;
    break;
    case 'bomb':
    return userInput;
    break;
    default:
    console.log("Error! Please Check your input Again")
  }
};

function getComputerChoice () {
 randNumber = Math.floor(Math.random() * 3)

  switch (randNumber) {
    case 0:
    return('rock');
    break;
    case 1:
    return('paper');
    break;
    case 2:
    return('scissors');
    break;
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return ("This is a Tie!")
  }
  if(userChoice === 'bomb') {
    return("You got our secret cheat code! Congratulations")
  };
  
  if (userChoice === 'rock') {
    if (computerChoice == 'paper') {
      return ("Computer Won!!!! Try one more time");
    }
    else {
      return ("You Won! Congratulations!!!!");
      }
    };
  
  if (userChoice === 'paper') {
    if (computerChoice === 'rock' || computerChoice === 'scissors') {
      return ("Computer Won!!!! Try one more time");
    }
    else {
      return ("You Won! Congratulations!!!!");
    };

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock' || computerChoice === 'paper') {
      return ("Computer Won!!!! Try one more time");
    }
    else {
      return ("You Won! Congratulations!!!!");
    }
} 
  }
};

function playGame() {
  const userChoice = getUserChoice('bomb');
  console.log("You Threw " + userChoice);
  const computerChoice = getComputerChoice()
  console.log("Computer Threw " + computerChoice);

 console.log(determineWinner(userChoice, computerChoice));
}

playGame()