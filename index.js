let playerSelection = getPlayerSelection();
let computerSelection = getComputerSelection();

function game (){
 getPlayerSelection();
 getComputerSelection();
 playRound();

 let play = prompt('Play Again?');
 play.toLowerCase();
 if (play === 'yes' || play === 'y') {
  game();}
 else { return('Goodbye!');}

function getPlayerSelection() {
 let selection = prompt('Rock, Paper, or Scissors?);
 return selection.toLowerCase();
}

function getComputerSelection() {
 let selection = Math.random()*3;
 switch(selection) {
  case 1 :
   return('rock');
   break;
  case 2 :
   return('paper');
   break;
  case 3 :
   return('scissors');
   break;
}

function playRound(playerSelection, computerSelection) {
 if (playerSelection === computerSelection) {
  return('Draw!');}
  else if (playerSelection === 'rock'){
   if(computerSelection ==='paper') {
    return('Paper beats rock.  You Lose!');
  }else if (computer selection === 'scissors') {
    return('Rock beats scissors.  You Win!');
}}else if (playerSelection === 'paper') {
   if (computerSelection === 'rock') {
    return('Paper beats rock.  You Win!');
  }else if (computerSelection === 'scissors'){
   return('Scissors beats rock.  You Loose!');
}}else if (playerSelection === 'scissors'){
   if (computerSelection === 'rock'){
    return('Rock beats scissors.  You Loose!');
}  else if(computerSelection === 'paper'){
    return('Scissors beats paper.  You Win!');
}} else{ return('Not a valid selection.  You forfeit!')};


