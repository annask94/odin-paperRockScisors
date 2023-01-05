// Computer choice
let getComputerChoice = () => {
  const variants = ["Paper", "Rock", "Scissors"];
  let computerChoice = variants[Math.floor(Math.random() * variants.length)];
  return computerChoice;
};

// Player choice

function playerSelection(choice) {
  let choice = prompt(
    "What is your choice? Paper, Rock or Scissors"
  ).toUpperCase;
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
      return "Wrong";
      break;
  }
}

// GAME

function playRound(playerSelection, getComputerChoice) {
  if (playerSelection === getComputerChoice) {
    return("Deaw!"); 
  } else if (playerSelection === "Paper" && getComputerChoice === "Rock") {
    return(You won! Paper beats Rock);
  } else if (playerSelection === "Paper" && getComputerChoice === "Scissors") {
    return(You lose! Scissors beats Paper);
  } else if (playerSelection === "Rock" && getComputerChoice === "Paper") {
    return(You lose! Paper beats Rock);
  } else if (playerSelection === "Rock" && getComputerChoice === "Scissors") {
    return(You win! Rock beats Scissors);
  } else if (playerSelection === "Scissors" && getComputerChoice === "Paper") {
    return(You win! Scissors beats Paper);
  } else if (playerSelection === "Scissors" && getComputerChoice === "Rock") {
    return(You lose! Rock beats Scissors);
  } else {
    alert("Wrong choice, try again");
  } 
}