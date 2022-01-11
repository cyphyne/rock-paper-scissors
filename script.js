// Creating a function that allows the computer to randomly select rock, paper, or scissors.
let randomNum = Math.floor(Math.random()*3 + 1);

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
  } else if (playerSelection === "sun" && computerSelection === "cloud") {
    computerScore += 1;  
    return "Your sunshine has been blocked by clouds! :(";
  } else if (playerSelection === "sun" && computerSelection === "wind") {
    playerScore += 1;
    return "The wind doesn't like being out in hot weather, sunshine has prevailed! :)";
  } else if (playerSelection === "cloud" && computerSelection === "sun") {
    playerScore += 1;
    return "Clouds have covered the hot sun, there is only nice shade! :)";
  } else if (playerSelection === "cloud" && computerSelection === "wind") {
    computerScore += 1;
    return "Oh no! Your clouds have been puffed away! :(";
  } else if (playerSelection === "wind" && computerSelection === "cloud") {
    playerScore += 1;
    return "The wind has blown away the clouds, a win! :)";
  } else if (playerSelection === "wind" && computerSelection === "sun") {
    computerScore += 1;
    return "The wind doesn't like to be warm, defeat! :(";
  }; 

}
//Function that takes the player's input and makes it case-insensitive
function playerInput() {
  let playerChoose = "sun"
  let playerResponse = playerChoose.toLowerCase();
  return playerResponse;
};

let computerSelection = computerPlay();
let playerSelection = playerInput();
console.log(playRound(playerSelection, computerSelection));

//Function that plays a five round game that keeps score and reports a winner/loser at the end

let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection)
        if (playerScore)
    }
};

