let getComputerChoice = () => {
  const variants = ["Paper", "Rock", "Scissors"];
  let computerChoice = variants[Math.floor(Math.random() * variants.length)];
  return computerChoice;
};

console.log(getComputerChoice());
