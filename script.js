
let playerScore = 0;
let computerScore = 0;



// Creating a function that allows the computer to randomly select rock, paper, or scissors.

const randomNum = Math.floor(Math.random()*3 +1);
function computerPlay() {
  if (randomNum === 1) {
    return "sun";
  } else if (randomNum === 2) {
    return "cloud";
  } else if (randomNum === 3) {
    return "wind";
  }
};
 
let computerSelection = computerPlay(); 

//Function that plays one round using the player and computer's input and returns the winner of the round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    resultDiv.innerHTML = "It's a tie! There is only harmony!";

  } 
  else if (playerSelection === "wind" && computerSelection === "cloud") {
    win();
    checkWinner();
    resultDiv.innerHTML = "The wind has blown away the clouds, a win! :)";
   
  } 
  else if (playerSelection === "sun" && computerSelection === "wind") {
    win();
    checkWinner();
    resultDiv.innerHTML = "The wind doesn't like being out in hot weather, sunshine has prevailed! :)";
    
  } 
  else if (playerSelection === "cloud" && computerSelection === "sun") {
    win();
    checkWinner();
    resultDiv.innerHTML = "Clouds have covered the hot sun, there is only nice shade! :)";
  } 
  else if (playerSelection === "cloud" && computerSelection === "wind") {
    loss();
    checkWinner();
    resultDiv.innerHTML = "Oh no! Your clouds have been puffed away! :(";
  } 
  else if (playerSelection === "sun" && computerSelection === "cloud") { 
    loss();
    checkWinner();
    resultDiv.innerHTML = "Your sunshine has been blocked by clouds! :(";
  } 
   else if (playerSelection === "wind" && computerSelection === "sun") {
    loss();
    checkWinner();
    resultDiv.innerHTML = "The wind doesn't like to be warm, defeat! :(";
  }; 

}

function win() {
  playerScore++;
  playerScoreNum.innerHTML = playerScore;
  computerScoreNum.innerHTML = computerScore;
};

function loss(playerSelection, computerSelection) {
  computerScore++;
  playerScoreNum.innerHTML = playerScore;
  computerScoreNum.innerHTML = computerScore;
};


const playerScoreNum = document.getElementById("player-score");
const computerScoreNum = document.getElementById("computer-score");
const sunButton = document.getElementById("sun");
const windButton = document.getElementById("wind");
const cloudButton = document.getElementById("cloud");
const resultDiv = document.querySelector(".result");
const scoreBoardDiv = document.querySelector(".score-board");



//Five round game that declares winner

function main() {
  sunButton.addEventListener('click', function() {
  game("sun"); 
  });
  cloudButton.addEventListener('click', function() {
  game("cloud");
    });
  windButton.addEventListener('click', function() {
  game("wind");
  });
};

function game(playerSelection) {
  console.log(`You chose: ${playerSelection}`);
  console.log(`Computer chose: ${computerSelection}`);
  playRound(playerSelection, computerSelection);
};


function checkWinner() {
  if (playerScore === 5) {
    return "You won! :D";
  } else if (computerScore === 5) {
    return "Computer won D:";
  }
};

main();