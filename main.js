let playerScore = 0;
let computerScore = 0;
const MAX_SCORE = 5;

//PLAYER CHOICE

const rpsButtons = document.querySelectorAll(".rps_btn");

rpsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("data-name");
    const roundResult = playRound(playerChoice);
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

//SELECTORS

const playerChoiceDisplay = document.querySelector(
  '[data-name="playerChoiceDisplay"]'
);
const computerChoiceDisplay = document.querySelector(
  '[data-name="computerChoiceDisplay"]'
);
const roundWinnerDisplay = document.querySelector('[data-name="roundWinner"]');
const playerScoreDisplay = document.querySelector(
  '[data-name="playerScoreDisplay"]'
);
const computerScoreDisplay = document.querySelector(
  '[data-name="computerScoreDisplay"]'
);

// FUNCTION
function updateGameStats(result) {
  playerChoiceDisplay.textContent = result.playerChoice;
  computerChoiceDisplay.textContent = result.computerChoice;
  roundWinnerDisplay.textContent = result.roundWinner;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;

  if (result.playerScore === MAX_SCORE || result.computerScore === MAX_SCORE) {
    displayWinner();
  }
}
// DISPLAY WINNER
//SELECTORS
const endPopup = document.querySelector('[data-name="endPopup"]');
//FUNCTION
function displayWinner() {
  const gameWinnerDisplay = document.querySelector('[data-name="gameWinner"]');

  rpsButtons.forEach((button) => {
    button.disabled = true;
  });

  endPopup.style.cssText = "display:grid";
  document.body.classList.add("active_popup");

  if (playerScore === MAX_SCORE) {
    gameWinnerDisplay.textContent = "You won!";
  } else if (computerScore === MAX_SCORE) {
    gameWinnerDisplay.textContent = "You lose";
  }
}

//PLAY AGAIN

const playAgainBtn = document.querySelector('[data-name="playAgainBtn"]');

playAgainBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;

  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  playerChoiceDisplay.textContent = "";
  computerChoiceDisplay.textContent = "";
  roundWinnerDisplay.textContent = "";

  rpsButtons.forEach((button) => {
    button.disabled = false;
  });
  document.body.classList.remove("active_popup");
  endPopup.style.cssText = "display:none";
});
