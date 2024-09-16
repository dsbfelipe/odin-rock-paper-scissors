const mainContainer = document.querySelector(".container");
const rulesContainer = document.querySelector(".rules");
const playButton = document.querySelector(".play-button");
const gameInterface = document.querySelector(".game-interface");
const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

playButton.addEventListener("click", playGame)



function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function getHumanChoice() {
  const humanChoice = window.prompt("Insert your choice");
  return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if  (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
      ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++;
      }

  if  (
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "rock" && computerChoice === "scissors")
      ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore++;
      }

  if (humanChoice === computerChoice) {
    console.log(`There's a draw! you both chose ${humanChoice}`)
  }
}

function createElement(tag, className, parent) {
  const element = document.createElement(tag);
  element.className = className;
  parent.appendChild(element);
  return element;
}

function playGame() {
  rulesContainer.remove();
  playButton.remove();
}

/* 
  function playGame() {
  let round = 1;
  while (round <= 5) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    round++;
  }
  if (humanScore > computerScore) {
    console.log("You win!");
  } else if (humanScore < computerScore) {
    console.log("You lose!");
  } else {
    console.log("Draw!")
  }
}
*/