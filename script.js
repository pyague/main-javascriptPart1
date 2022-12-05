let player;
let computer;
let playerScore = 0;
let computerScore = 0;
let round_Count = 0;

function playerPlay() {
  player = prompt("Write an option:\nRock\nPaper\nScissors?");
  player = player.toLowerCase();
  switch (player) {
    case "rock":
      player;
      computer = computerPlay();
      console.log(`The computer chose: ${computer}\nYou chose: ${player}`);
      break;
    case "paper":
      player;
      computer = computerPlay();
      console.log(`The computer chose: ${computer}\nYou chose: ${player}`);
      break;
    case "scissors":
      player;
      computer = computerPlay();
      console.log(`The computer chose: ${computer}\nYou chose: ${player}`);
      break;
    default:
      player = undefined;
  }
}

function computerPlay() {
  const options = ["scissors", "rock", "paper"];
  return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    computerScore++;
    return `The computer win!  ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === computerSelection) {
    playerScore++;
    computerScore++;
    return "Tie!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playerPlay();
    while (player === undefined) {
      playerPlay();
      console.log(`Enter a valid option\nRound: ${round_Count}`);
    }
    if (player === "rock") {
      round_Count = i + 1;
      console.log(
        playRound(player, computer) +
          `\nRound: ${round_Count}\nPlayer:${playerScore} - Computer:${computerScore}`
      );
    } else if (player === "paper") {
      round_Count = i + 1;
      console.log(
        playRound(player, computer) +
          `\nRound: ${round_Count}\nPlayer:${playerScore} - Computer:${computerScore}`
      );
    } else if (player === "scissors") {
      round_Count = i + 1;
      console.log(
        playRound(player, computer) +
          `\nRound: ${round_Count}\nPlayer:${playerScore} - Computer:${computerScore}`
      );
    }
  }
  if (playerScore <= computerScore) {
    window.alert("You lost! Sorry!");
  } else if (playerScore > computerScore) {
    window.alert("Congratulations! You won!");
  } else if (playerScore === computerScore) {
    window.alert("It's a tie!");
  }
}

game();
