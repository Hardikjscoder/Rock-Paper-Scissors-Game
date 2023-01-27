// Selectors
const playerChoice = document.getElementById("playerChoice");
const compChoiceElem = document.getElementById("computerChoice");
const result = document.getElementById("result");
const alertMsg = document.getElementById("alertMsg");

// Initial variables
let playerScore = 0;
let computerScore = 0;

function play() {
  // Set the player's choice
  const userChoice = prompt("Enter your choice either Rock, Paper or Scissors");
  playerChoice.innerHTML = userChoice;

  // Set the computer's choice
  const choicesArr = ["rock", "paper", "scissors"];
  const compChoiceRandom = Math.floor(Math.random() * choicesArr.length);
  const computerChoice = choicesArr[compChoiceRandom];
  compChoiceElem.innerHTML = computerChoice;

  // Show the elements
  document.querySelector(".playerdiv").style.display = "block";
  document.querySelector(".compdiv").style.display = "block";

  // Calculate the result
  if (userChoice === "rock" && computerChoice === "scissors") {
    result.innerHTML = "Player Wins! 😤";
    playerScore++;
    document.getElementById(
      "playerscore"
    ).innerHTML = `Player Score : ${playerScore}`;
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    result.innerHTML = "Computer Wins! 😟";
    computerScore++;
    document.getElementById(
      "compscore"
    ).innerHTML = `Computer Score : ${computerScore}`;
  } else if (userChoice === "paper" && computerChoice === "rock") {
    result.innerHTML = "Player Wins! 😤";
    playerScore++;
    document.getElementById(
      "playerscore"
    ).innerHTML = `Player Score : ${playerScore}`;
  } else if (userChoice === "rock" && computerChoice === "paper") {
    result.innerHTML = "Computer Wins! 😟";
    computerScore++;
    document.getElementById(
      "compscore"
    ).innerHTML = `Computer Score : ${computerScore}`;
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    result.innerHTML = "Computer Wins! 😟";
    computerScore++;
    document.getElementById(
      "compscore"
    ).innerHTML = `Computer Score : ${computerScore}`;
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    result.innerHTML = "Player Wins! 😤";
    playerScore++;
    document.getElementById(
      "playerscore"
    ).innerHTML = `Player Score : ${playerScore}`;
  } else {
    result.innerHTML = "Draw! 😐";
  }

  // Show the alert when whoever is in lead witht the score
  if (playerScore > computerScore) {
    alertMsg.style.display = "block";
    setTimeout(() => {
      alertMsg.style.display = "none";
    }, 2000);
  } else if (playerScore < computerScore) {
    alertMsg.style.display = "block";
    alertMsg.innerHTML = "Computer is in lead";
    alertMsg.classList.remove("alert-success");
    alertMsg.classList.add("alert-danger");
    setTimeout(() => {
      alertMsg.style.display = "none";
    }, 2000);
  } else {
    alertMsg.style.display = "none";
  }
}
