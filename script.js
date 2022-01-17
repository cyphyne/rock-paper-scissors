
let playerScore = 0;
let computerScore = 0;
let remainingMoves = 0;


// Creating a function that allows the computer to randomly select rock, paper, or scissors.
let randomNum = Math.floor(Math.random()*3 +1);

function computerPlay() {
  if (randomNum === 1) {
    return "sun";
  } else if (randomNum === 2) {
    return "cloud";
  } else if (randomNum === 3) {
    return "wind";
  }
};
 


//Function that plays one round using the player and computer's input and returns the winner of the round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie! There is only harmony!";
  } 
  else if (playerSelection === "sun" && computerSelection === "cloud") {
    computerScore++;  
    return "Your sunshine has been blocked by clouds! :(";
  } 
  else if (playerSelection === "sun" && computerSelection === "wind") {
    playerScore++;
    return "The wind doesn't like being out in hot weather, sunshine has prevailed! :)";
  } 
  else if (playerSelection === "cloud" && computerSelection === "sun") {
    playerScore++;
    return "Clouds have covered the hot sun, there is only nice shade! :)";
  } 
  else if (playerSelection === "cloud" && computerSelection === "wind") {
    computerScore++;
    return "Oh no! Your clouds have been puffed away! :(";
  } 
  else if (playerSelection === "wind" && computerSelection === "cloud") {
    playerScore++;
    return "The wind has blown away the clouds, a win! :)";
  } 
  else if (playerSelection === "wind" && computerSelection === "sun") {
    computerScore++;
    return "The wind doesn't like to be warm, defeat! :(";
  }; 

}


let computerSelection = computerPlay();

const playerScoreNum = document.getElementById("player-score");
const computerScoreNum = document.getElementById("computer-score");
const sunButton = document.getElementById("sun");
const windButton = document.getElementById("wind");
const cloudButton = document.getElementById("cloud");
const resultDiv = document.querySelector(".result");
const scoreBoardDiv = document.querySelector(".score-board");



//Function that plays a five round game that declares winner

sunButton.addEventListener('click', function() {
  game("sun");
});
cloudButton.addEventListener('click', function() {
  game("cloud");
});
windButton.addEventListener('click', function() {
  game("wind");
});


function game(playerSelection) {
  console.log(playRound(playerSelection, computerSelection));

};
