// Computer choice
function getComputerChoice() {
  const variants = ["PAPER", "ROCK", "SCISSORS"];
  return variants[Math.floor(Math.random() * variants.length)];
}

// Player choice
let playerSelection = prompt("What is your choice? Paper, Rock or Scissors");
// GAME

function playRound(a, b) {
  let playerChoice = playerSelection.toUpperCase();
  let computerChoice = getComputerChoice();
  if (playerChoice == computerChoice) {
    return "Deaw!";
  } else if (playerChoice == "PAPER" && computerChoice == "ROCK") {
    return "You won! PAPER beats ROCK";
  } else if (playerChoice == "PAPER" && computerChoice == "SCISSORS") {
    return "You lose! SCISSORS beats PAPER";
  } else if (playerChoice == "ROCK" && computerChoice == "PAPER") {
    return "You lose! PAPER beats ROCK";
  } else if (playerChoice == "ROCK" && computerChoice == "SCISSORS") {
    return "You win! ROCK beats SCISSORS";
  } else if (playerChoice == "SCISSORS" && computerChoice == "PAPER") {
    return "You win! SCISSORS beats PAPER";
  } else if (playerChoice == "SCISSORS" && computerChoice == "ROCK") {
    return "You lose! ROCK beats SCISSORS";
  } else {
    alert("Wrong choice, try again");
  }
}

console.log(playRound(playerSelection, getComputerChoice));
