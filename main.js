let playerScore = 0;
let computerScore = 0;

//Player Choice

const rpsButtons = document.querySelectorAll(".rps_btn");

rpsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("data-name");
    const roundResult = playRound(playerChoice);
    console.log("Wynik rundy: ", roundResult);
  });
});

// Computer choice
function getComputerChoice() {
  const variants = ["paper", "rock", "scissors"];
  return variants[Math.floor(Math.random() * variants.length)];
}

// GAME

// SINGLE ROUND

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  if (playerChoice == computerChoice) {
    return {
      winner: "Tie game!",
      playerChoice: playerChoice,
      playerScore: playerScore,
      computerChoice: computerChoice,
      computerScore: computerScore,
    };
  } else if (
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    playerScore++;
    return {
      winner: "player",
      playerChoice: playerChoice,
      playerScore: playerScore,
      computerChoice: computerChoice,
      computerScore: computerScore,
    };
  } else {
    computerScore++;
    return {
      winner: "computer",
      playerChoice: playerChoice,
      playerScore: playerScore,
      computerChoice: computerChoice,
      computerScore: computerScore,
    };
  }
}

// PLAY 5 ROUNDS
