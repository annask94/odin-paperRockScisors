// Computer choice
let getComputerChoice = () => {
  const variants = ["Paper", "Rock", "Scissors"];
  let computerChoice = variants[Math.floor(Math.random() * variants.length)];
  return computerChoice;
};

// Player choice

let playerSelection = prompt("What is your choice? Paper, Rock or Scissors");

// GAME

function playRound(playerSelection, getComputerChoice) {
  let playerChoice = playerSelection.toUpperCase;
  let computerChoice = getComputerChoice.toUpperCase;
  if (playerChoice === computerChoice) {
    return "Deaw!";
  } else if (playerSelection === "PAPER" && getComputerChoice === "ROCK") {
    return "You won! PAPER beats ROCK";
  } else if (playerSelection === "PAPER" && getComputerChoice === "SCISSORS") {
    return "You lose! SCISSORS beats PAPER";
  } else if (playerSelection === "ROCK" && getComputerChoice === "PAPER") {
    return "You lose! PAPER beats ROCK";
  } else if (playerSelection === "ROCK" && getComputerChoice === "SCISSORS") {
    return "You win! ROCK beats SCISSORS";
  } else if (playerSelection === "SCISSORS" && getComputerChoice === "PAPER") {
    return "You win! SCISSORS beats PAPER";
  } else if (playerSelection === "SCISSORS" && getComputerChoice === "ROCK") {
    return "You lose! ROCK beats SCISSORS";
  } else {
    alert("Wrong choice, try again");
  }
}

console.log(playRound(playerSelection, getComputerChoice));
