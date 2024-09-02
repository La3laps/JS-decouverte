var playerInput = prompt("Your choice (rock, paper, scissors) ?");

function getPlayerChoice(playerInput) {
  playerInput = playerInput.toLowerCase();

  if (
    playerInput == "rock" ||
    playerInput == "paper" ||
    playerInput == "scissors" ||
    playerInput == "bomb"
  ) {
    return playerInput;
  } else {
    throw new Error("Input is neither rock nor paper nor scissors.");
  }
}

try {
  getPlayerChoice(playerInput);
} catch (e) {
  console.error(e);
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
  }
  return computerChoice;
}

function findWinner(playerChoice, computerChoice) {
  let result = "";

  if (playerChoice == "bomb") {
    return (result = "Win (but it feels like cheating, no ?");
  }

  if (playerChoice == computerChoice) {
    return (result = "Tied");
  } else if (playerChoice == "rock") {
    if (computerChoice == "scissors") {
      return (result = "Win");
    } else {
      return (result = "Lost");
    }
  } else if (playerChoice == "paper") {
    if (computerChoice == "rock") {
      return (result = "Win");
    } else {
      return (result = "Lost");
    }
  } else if (playerChoice == "scissors") {
    if (computerChoice == "rock") {
      return (result = "Lost");
    } else {
      return (result = "Win");
    }
  } else return (result = "The developer has lost");
}

function playGame() {
  const uChoice = getPlayerChoice(playerInput);
  const comChoice = getComputerChoice();
  console.log(uChoice);
  console.log(comChoice);
  console.log(findWinner(uChoice, comChoice));
}

playGame();
