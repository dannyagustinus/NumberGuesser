let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
  }
  
  const compareGuesses = (human, computer, target) => {
    if(human > 9 || human < 0) {
      alert();
    } else {
      return Math.abs(human - target) <= Math.abs(computer - target);
    }
  }
  
  const updateScore = winner => {
    if(winner === 'human') {
      humanScore++;
    } else if(winner === 'computer') {
      computerScore++;
    }
  }
  
  function advanceRound() {
    currentRoundNumber++;
  }
