
let playerScore = 0;
let computerScore = 0;

const playerScoreNum = document.getElementById("player-score");
const computerScoreNum = document.getElementById("computer-score");
const sunButton = document.getElementById("sun");
const windButton = document.getElementById("wind");
const cloudButton = document.getElementById("cloud");
const resultDiv = document.querySelector(".result");
const scoreBoardDiv = document.querySelector(".score-board");
const computerIcon = document.getElementById("computer-icon");
const modal = document.getElementById("display-mod");
const endResult = document.getElementById("end-result");

//Computer Choice
function computerPlay() {
  const randomNum = Math.floor(Math.random()*3 +1);
  if (randomNum === 1) {
    return "sun";
  } else if (randomNum === 2) {
    return "cloud";
  } else if (randomNum === 3) {
    return "wind";
  }
}
 
// Game Score
function win() {
  playerScore++;
  playerScoreNum.innerHTML = playerScore;
  computerScoreNum.innerHTML = computerScore;
}

function loss() {
  computerScore++;
  playerScoreNum.innerHTML = playerScore;
  computerScoreNum.innerHTML = computerScore;
}


// Play Game
function game(playerSelection) {
  const computerSelection = computerPlay();
  
  if (playerSelection === computerSelection) {
    resultDiv.innerHTML = "It's a tie! There is only harmony!";
    if (playerSelection === 'sun') {
      computerIcon.innerHTML = '\u2600';
    } else if (playerSelection === 'wind') {
      computerIcon.innerHTML = '🌬';
    } else {
      computerIcon.innerHTML = '\u2601';
    }
  } 
  else if (playerSelection === "wind" && computerSelection === "cloud") {
    win();
    computerIcon.innerHTML = '\u2601';
    resultDiv.innerHTML = "The wind has blown away the clouds, a win! :)";
  } 
  else if (playerSelection === "sun" && computerSelection === "wind") {
    win();
    computerIcon.innerHTML = '🌬';
    resultDiv.innerHTML = "The wind doesn't like being out in hot weather, sunshine has prevailed! :)";
  } 
  else if (playerSelection === "cloud" && computerSelection === "sun") {
    win();
    computerIcon.innerHTML = '\u2600';
    resultDiv.innerHTML = "Clouds have covered the hot sun, there is only nice shade! :)";
  } 
  else if (playerSelection === "cloud" && computerSelection === "wind") {
    loss();
    computerIcon.innerHTML = '🌬' ;
    resultDiv.innerHTML = "Oh no! Your clouds have been puffed away! :(";
  } 
  else if (playerSelection === "sun" && computerSelection === "cloud") { 
    loss();
    computerIcon.innerHTML = '\u2601';
    resultDiv.innerHTML = "Your sunshine has been blocked by clouds! :(";
  } 
   else if (playerSelection === "wind" && computerSelection === "sun") {
    loss();
    computerIcon.innerHTML = '\u2600';
    resultDiv.innerHTML = "The wind doesn't like to be warm, defeat! :("; 
  }
  checkWinner();
    }

 main();

 
 function main() {
  sunButton.addEventListener('click', () => game("sun"));
  cloudButton.addEventListener('click', () => game("cloud"));
  windButton.addEventListener('click', () => game("wind"));
}

// Declares Winner
function checkWinner() {
  if (playerScore === 5) {
    openModal();
    return endResult.innerHTML =  "You won! (❁´▽`❁)";
  } else if (computerScore === 5) {
    openModal();
    return endResult.innerHTML = "You lost! ｡:ﾟ(｡ﹷ ‸ ﹷ ✿)";
  } 
  return
}

// End Game Modal

const openModal = () => {
  modal.classList.add('on');
}

const restartGame = () => {
  window.location.reload();
}