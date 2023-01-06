// Computer choice
function getComputerChoice() {
  const variants = ["paper", "rock", "scissors"];
  return variants[Math.floor(Math.random() * variants.length)];
}

// Player choice
let playerSelection = prompt(
  "What is your choice? Paper, Rock or Scissors"
).toLowerCase();

// GAME

// SCORES

let playerScore = 0;
let computerScore = 0;

// SINGLE ROUND

function winnerCase(a, b) {
  let playerChoice = playerSelection;
  let computerChoice = getComputerChoice();
  if (playerChoice == computerChoice) {
    return "Deaw!";
  } else if (
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    playerScore++;
    let winner = "player";
    return { winner: winner, computer: computerScore, player: playerScore };
  } else {
    computerScore++;
    let winner = "computer";
    return { winner: winner, computer: computerScore, player: playerScore };
  }
}

// PLAY 5 ROUNDS

// LOOP

// function game() {
//   for (let i = 0; i < 5; i++) {
//     playRound(i);
//   }
// }

console.log(winnerCase(playerSelection, getComputerChoice()));
