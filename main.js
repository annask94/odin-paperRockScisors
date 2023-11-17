let playerScore = 0;
let computerScore = 0;

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
    playerScore: "0",
    computerChoice: computerChoice,
    computerScore: "0",
  };
  if (playerChoice == computerChoice) {
    result.roundWinner = "Tie game!";
  } else if (
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    result.playerScore++;
    result.roundWinner = "You won!";
  } else {
    result.computerScore++;
    result.roundWinner = "You lost!";
  }
  updateGameStats(result);
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
  playerScoreDisplay.textContent = result.playerScore;
  computerScoreDisplay.textContent = result.computerScore;
}

// PLAY 5 ROUNDS
