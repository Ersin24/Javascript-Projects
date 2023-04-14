let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  if( (humanGuess >= 0 && humanGuess < 10) && (humanGuess >= 0 && humanGuess < 10)){
      if( (Math.abs(targetGuess - humanGuess) <= Math.abs(targetGuess - computerGuess))  ){
    return true;
  }else{
    return false;
  }
  }else{
    alert("Invalid value");
  }

}

const updateScore = val => {
  if(val === 'human'){
    humanScore = humanScore + 1;
  }else if(val === 'computer'){
    computerScore = computerScore + 1; 
  }
}

const advanceRound = () => {
  currentRoundNumber = currentRoundNumber  + 1;
}