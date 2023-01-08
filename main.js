// Computer choice
function getComputerChoice() {
  const variants = ["paper", "rock", "scissors"];
  return variants[Math.floor(Math.random() * variants.length)];
}

// Player choice
function playerSelection() {
  let playerInput = prompt(
    "What is your choice? Paper, Rock or Scissors"
  ).toLowerCase();
  if (
    playerInput === "paper" ||
    playerInput === "rock" ||
    playerInput === "scissors"
  ) {
    return playerInput;
  } else {
    alert("Wrong input! Try again");
  }
}

// GAME

// SCORES

let playerScore = 0;
let computerScore = 0;

// SINGLE ROUND

function playRound(i) {
  let playerChoice = playerSelection();
  let computerChoice = getComputerChoice();
  if (playerChoice == computerChoice) {
    let result = {
      winner: "Tie game!",
      playerChoice: playerChoice,
      playerScore: playerScore,
      computerChoice: computerChoice,
      computerScore: computerScore,
    };
    return result;
  } else if (
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    playerScore++;
    let result = {
      winner: "player",
      playerChoice: playerChoice,
      playerScore: playerScore,
      computerChoice: computerChoice,
      computerScore: computerScore,
    };
    return result;
  } else {
    computerScore++;
    let result = {
      winner: "computer",
      playerChoice: playerChoice,
      playerScore: playerScore,
      computerChoice: computerChoice,
      computerScore: computerScore,
    };
    return result;
  }
}

// PLAY 5 ROUNDS

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(i));
  }
  if (playerScore == computerScore) {
    console.log("Tie game!");
  } else if (playerScore > computerScore) {
    console.log("Congratulations! You won!");
  } else {
    console.log("You lose. Maybe next time!");
  }
}

console.log(game());
