const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const commentary = document.getElementById("commentary");
const playerScoreboard = document.getElementById("player-score");
const computerScoreboard = document.getElementById("computer-score");
const reset = document.getElementById("reset-game");


reset.addEventListener('click', resetGame);
rockButton.addEventListener('click', playGameRock);
paperButton.addEventListener('click', playGamePaper)
scissorsButton.addEventListener('click', playGameScissors)




function playGameRock() {
  let computerSelection = choices[Math.floor(Math.random() * choices.length)];

   if (computerSelection == "rock") {
       commentary.textContent = "It's a tie!"
   } else if (computerSelection == "paper") {
       commentary.textContent = "Paper beats rock, you lose!"
       computerScore ++; 
   } else {
       commentary.textContent = "Rock beats scissors, you win!"
       playerScore ++;
   }
   playerScoreboard.textContent = "You: " + playerScore;
   computerScoreboard.textContent = "Computer: " + computerScore;
   if (playerScore == 5 || computerScore == 5) {
       stopGame();
   }
}

function playGamePaper() {
   let computerSelection = choices[Math.floor(Math.random() * choices.length)];
   
   if (computerSelection == "paper") {
       commentary.textContent = "It's a tie!";
   } else if (computerSelection == "rock") {
       commentary.textContent = "Paper beats rock, you win!"
       playerScore ++;
   } else {
       commentary.textContent = "Scissors beats paper, you lose!"
       computerScore++;
   }
   playerScoreboard.textContent = "You: " + playerScore;
   computerScoreboard.textContent = "Computer: " + computerScore;
   if (playerScore == 5  || computerScore == 5) {
       stopGame();
   }
}

function playGameScissors() {
   let computerSelection = choices[Math.floor(Math.random() * choices.length)];

   if (computerSelection == "scissors") {
       commentary.textContent = "It's a tie!"; 
   } else if (computerSelection == "rock") {
       commentary.textContent = "Rock beats scissors, you lose!";
       computerScore ++;
   } else {
       commentary.textContent = "Scissors beats paper, you win!"
       playerScore ++;
   }
   playerScoreboard.textContent = "You: " + playerScore;
   computerScoreboard.textContent = "Computer: " + computerScore;

   if (playerScore == 5 || computerScore == 5) {
       stopGame();
}
}
function stopGame() { 
  if (computerScore > playerScore) {
      commentary.textContent = "The computer outplayed you!";
  }   else {
  commentary.textContent = "You outplayed the computer!";
  }
  playerScore = 0; 
  computerScore = 0; 
  playerScoreboard.textContent = "";
  computerScoreboard.textContent = "";
  rockButton.removeEventListener('click', playGameRock);
  paperButton.removeEventListener('click', playGamePaper);
  scissorsButton.removeEventListener('click', playGameScissors);
  reset.className = ('reset-focus');
  reset.id = ("");
}
function resetGame(){
  playerScore = 0; 
  computerScore = 0; 
  playerScoreboard.textContent = "";
  computerScoreboard.textContent = "";
  commentary.textContent = "";
  rockButton.addEventListener('click', playGameRock);
  paperButton.addEventListener('click', playGamePaper);
  scissorsButton.addEventListener('click', playGameScissors);
  reset.className = ('');
  reset.id = ('reset-game');
}
