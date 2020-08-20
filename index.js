let playerSelection = getPlayerSelection();
let computerSelection = getComputerSelection();
alert('Connected');

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
    console.log('Paper beats rock.  You Lose!');
  }else if (computer selection === 'scissors') {
    console.log('Rock beats scissors.  You Win!');
}}else if (playerSelection === 'paper') {
   if (computerSelection === 'rock') {
    console.log('Paper beats rock.  You Win!');
  }else if (computerSelection === 'scissors'){
   console.log('Scissors beats rock.  You Loose!');
}}else if (playerSelection === 'scissors'){
   if (computerSelection === 'rock'){
    console.log('Rock beats scissors.  You Loose!');
}  else if(computerSelection === 'paper'){
    console.log('Scissors beats paper.  You Win!');
}} else{ console.log('Not a valid selection.  You forfeit!')};


