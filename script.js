const mainContainer = document.querySelector(".container");
const rulesContainer = document.querySelector(".rules");
const playButton = document.querySelector(".play-button");
const gameInterface = document.querySelector(".game-interface");
const options = ["rock", "paper", "scissors"];
const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");
const result = document.querySelector(".result");
const choiceButtons = document.querySelectorAll(".choice-button");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
let humanScore = 0;
let computerScore = 0;

playButton.addEventListener("click", playGame)

choiceButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    document.querySelectorAll(".pressed").forEach((button) => {
      button.classList.remove("pressed");
    });
    event.target.classList.add("pressed");
  })
})

rockButton.addEventListener("click", () => {
  const playerChoice = "rock";
  playRound(playerChoice, getComputerChoice());
})

paperButton.addEventListener("click", () => {
  const playerChoice = "paper";
  playRound(playerChoice, getComputerChoice());
})

scissorsButton.addEventListener("click", () => {
  const playerChoice = "scissors";
  playRound(playerChoice, getComputerChoice());
})

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
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
      }

  if  (
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "rock" && computerChoice === "scissors")
      ) {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
      }

  if (humanChoice === computerChoice) {
    result.textContent = `Tie! you both chose ${humanChoice}`;
  }
  result.style.transform = "translateX(0%)"
}

function setScore() {

}

function playGame() {
  rulesContainer.style.display = "none";
  playButton.style.display = "none";
  gameInterface.style.display = "block";
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