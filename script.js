const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}