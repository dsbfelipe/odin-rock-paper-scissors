const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function getHumanChoice() {
  const humanChoice = window.prompt("Insert your choice");
  return humanChoice.toLowerCase();
}

console.log(getHumanChoice())