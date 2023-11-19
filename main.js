let playerScore = 0;
let computerScore = 0;
const MAX_SCORE = 5;

//Player Choice

const rpsButtons = document.querySelectorAll(".rps_btn");

rpsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("data-name");
    const roundResult = playRound(playerChoice);
    // console.log("Wynik rundy: ", roundResult);
  });
});

// COMPUTER CHOICE
function getComputerChoice() {
  const variants = ["paper", "rock", "scissors"];
  return variants[Math.floor(Math.random() * variants.length)];
}

// GAME

// SINGLE ROUND

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  let result = {
    roundWinner: "",
    playerChoice: playerChoice,
    playerScore: playerScore,
    computerChoice: computerChoice,
    computerScore: computerScore,
  };
  if (playerChoice == computerChoice) {
    result.roundWinner = "Tie game!";
  } else if (
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    result.roundWinner = "You won!";
    playerScore++;
  } else {
    result.roundWinner = "You lost!";
    computerScore++;
  }
  updateGameStats(result);

  if (playerScore === MAX_SCORE || computerScore === MAX_SCORE) {
    displayWinner();
  }
}

//STATS DISPLAY
function updateGameStats(result) {
  const playerChoiceDisplay = document.querySelector(
    '[data-name="playerChoiceDisplay"]'
  );
  const computerChoiceDisplay = document.querySelector(
    '[data-name="computerChoiceDisplay"]'
  );
  const roundWinnerDisplay = document.querySelector(
    '[data-name="roundWinner"]'
  );
  const playerScoreDisplay = document.querySelector(
    '[data-name="playerScoreDisplay"]'
  );
  const computerScoreDisplay = document.querySelector(
    '[data-name="computerScoreDisplay"]'
  );

  playerChoiceDisplay.textContent = result.playerChoice;
  computerChoiceDisplay.textContent = result.computerChoice;
  roundWinnerDisplay.textContent = result.roundWinner;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;

  if (result.playerScore === MAX_SCORE || result.computerScore === MAX_SCORE) {
    displayWinner();
  }
}

function displayWinner() {
  const gameWinnerDisplay = document.querySelector('[data-name="gameWinner"]');
  const endPopup = document.querySelector('[data-name="endPopup"]');

  // Determine the winner based on scores
  if (playerScore === MAX_SCORE) {
    gameWinnerDisplay.textContent = "Congratulations! You won!";
  } else if (computerScore === MAX_SCORE) {
    gameWinnerDisplay.textContent = "You lose";
  }
}

//DOPISAĆ FUNKCJĘ ZE ZMIANĄ STYLU I DOGRAĆ WYGLĄD MOBILNY
