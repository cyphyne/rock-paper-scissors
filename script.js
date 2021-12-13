// Creating a function that allows the computer to randomly select rock, paper, or scissors.
let randomNum = Math.floor(Math.random()*3 + 1);

function computerPlay() {
  if (randomNum === 1) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else if (randomNum === 3) {
    return "scissors";
  }
};

let playerScore = 0;
let computerScore = 0;

//Function that plays one round using the player and computer's input and returns the winner of the round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;  
    return "Computer wins, paper beats rock! :(";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    return "You win, rock beats scissors! :)";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
    return "You win, paper beats rock! :)";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    return "Computer wins, scissors beats paper! :(";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
    return "You win, scissors beats paper! :)";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    return "Computer wins, rock beats scissors! :(";
  }; 

}
//Function that takes the player's input and makes it case-insensitive
function playerInput() {
  let playerChoose = "rock"
  let playerResponse = playerChoose.toLowerCase();
  return playerResponse;
};

let computerSelection = computerPlay();
let playerSelection = playerInput();
console.log(playRound(playerSelection, computerSelection));

//Function that plays a five round game that keeps score and reports a winner/loser at the end