game();
let play = prompt('Play Again?');
play.toLowerCase();
if (play === 'yes' || play === 'y') {
  game();
} else {
  console.log('Goodbye!');
}

function getPlayerSelection() {
  let player = prompt('Rock, Paper, or Scissors?');
  let fixed = player.toLowerCase();
  console.log(fixed);
  return fixed;
}

function getComputerSelection() {
  let selection = Math.floor(Math.random() * 3);
  switch (selection) {
    case 0:
      return ('rock');
      console.log
      break;
    case 1:
      return ('paper');
      break;
    case 2:
      return ('scissors');
      break;
  }
}

function game() {
  let playerScore=0;
  let computerScore = 0;
  while(playerScore < 5 && computerScore < 5){ 
    let playerSelection = getPlayerSelection();
    let computerSelection = getComputerSelection();
    let winner = playRound(playerSelection,computerSelection);
    if (winner === 'computer'){
      computerScore++;
    } else if (winner === 'player'){
      playerScore++;
    } else {}
    console.log(`The score is Player: ${playerScore} Computer: ${computerScore}`);
    if(playerScore === 5){
      alert("You Win! Congratulations!");
    };
    if(computerScore === 5){
      alert("Computer Wins! Better Luck Next Time!");
    }
  };
}

function playRound(playerSelection, computerSelection) {

  console.log(`Rock...Paper...Scissors... Shoot! You shoot ${playerSelection} the computer shoots ${computerSelection}`);
  if (playerSelection === computerSelection) {
    console.log('Draw!');
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      console.log ('Paper beats rock.  You Lose!');
      return('computer');
    } else if (computerSelection === 'scissors') {
      console.log ('Rock beats scissors.  You Win!');
      return('player');
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      console.log ('Paper beats rock.  You Win!');
      return('player');
    } else if (computerSelection === 'scissors') {
      console.log ('Scissors beats rock.  You Loose!');
      return('computer');
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      console.log ('Rock beats scissors.  You Loose!');
      return('computer');
    } else if (computerSelection === 'paper') {
      console.log ('Scissors beats paper.  You Win!');
      return('player');
    }
  } else {
    console.log ('Not a valid selection.  You forfeit!')
    return('computer');
  };
}