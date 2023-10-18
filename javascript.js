

let playerScore = 0;
let computerScore = 0;
const score = document.querySelector('.score');

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3 + 1);

    if (num == 1){
        return "rock";

    }
    else if (num == 2){
        return "paper";
    } else { 
        return "scissors";
    }

}


function playRound(playerSelection, computerChoice){
    const wins = document.querySelector('.wins');

    if (playerSelection == computerChoice){
        wins.textContent = 'Tie!';
    }
    else if (playerSelection == "rock" && computerChoice == "paper"){
        computerScore++
        wins.textContent = 'Computer wins!';
    }
    else if (playerSelection == "rock" && computerChoice == "scissors"){
        playerScore++
        wins.textContent = 'Player wins!';
    }
    else if (playerSelection == "paper" && computerChoice == "rock"){
        playerScore++
        wins.textContent = 'Player wins!';
    }
    else if (playerSelection == "paper" && computerChoice == "scissors"){
        computerScore++
        wins.textContent = 'Computer wins!';
    }
    else if (playerSelection == "scissors" && computerChoice == "rock"){
        computerScore++
        wins.textContent = 'Computer wins!';
    }
    else if (playerSelection == "scissors" && computerChoice == "paper"){   
        playerScore++
        wins.textContent = 'Player wins!';
        


    }
}
let computerChoice = getComputerChoice();


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');


rock.addEventListener('click', () => {
    let playerSelection = 'rock';
    console.log(playRound(playerSelection, computerChoice))
    score.textContent = `Score is Computer: ${computerScore} and Player: ${playerScore}`

})
paper.addEventListener('click', () => {
    let playerSelection = 'paper';
    console.log(playRound(playerSelection, computerChoice))
    score.textContent = `Score is Computer: ${computerScore} and Player: ${playerScore}`

})
scissors.addEventListener('click', () => {
    let playerSelection =  'scissors';
    console.log(playRound(playerSelection, computerChoice))
    score.textContent = `Score is Computer: ${computerScore} and Player: ${playerScore}`

})



