// Computer choice
let getComputerChoice = () => {
  const variants = ["Paper", "Rock", "Scissors"];
  let computerChoice = variants[Math.floor(Math.random() * variants.length)];
  return computerChoice;
};

// Player choice

let getPlayerChoice = prompt("What is your choice? Paper, Rock or Scissors");

function playerSelection(choice) {
  let getPlayerChoice = prompt("What is your choice? Paper, Rock or Scissors");

  let choice = getPlayerChoice.toUpperCase;
  switch (choice) {
    case "PAPER":
      return "Paper";
      break;
    case "ROCK":
      return "Rock";
      break;
    case "SCISSORS":
      return "Scissors";
      break;
    default:
      return "Wrong choice, try again";
      break;
  }
}

console.log(playerSelection());
