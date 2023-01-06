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

function winnerCase(a, b) {
  let playerChoice = playerSelection();
  let computerChoice = getComputerChoice();
  if (playerChoice == computerChoice) {
    let winner = "Tie game!";
    let result = {
      winner: winner,
      computer: computerScore,
      compChoice: computerChoice,
      player: playerScore,
      plaChoice: playerChoice,
    };
    return result;
  } else if (
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    let winner = "player";
    return winner;
  } else {
    let winner = "computer";
    return winner;
  }
}

// PLAY  ROUND

function playRound() {
  let round = 5;
  for (i = 0; i < 5; i++) {
    let match = winnerCase(playerSelection(), getComputerChoice());
    return { round: round, match: match };
  }
}

// LOOP

// function game() {
//   for (let i = 0; i < 5; i++) {
//     playRound(i);
//   }
// }

console.log(playRound());
