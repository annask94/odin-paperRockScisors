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

function playRound(a, b) {
  let playerChoice = playerSelection;
  let computerChoice = getComputerChoice();
  if (playerChoice == computerChoice) {
    return "Deaw!";
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    return "You won! paper beats rock";
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    return "You lose! scissors beats paper";
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    return "You lose! paper beats rock";
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
    return "You win! rock beats scissors";
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    return "You win! scissors beats paper";
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    return "You lose! rock beats scissors";
  } else {
    alert("Wrong choice, try again");
  }
}

console.log(playRound(playerSelection, getComputerChoice));
