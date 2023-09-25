
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

function getPlayerChoice(){
    let choice = prompt("Input either Rock, Paper or Scissors").toLowerCase();
    return choice;
}


function game(playerSelection, computerChoice){
    if (playerSelection == computerChoice){
        return "Tie!";
    }
    else if (playerSelection == "rock" && computerChoice == "paper"){
        return "Computer wins!";
    }
    else if (playerSelection == "rock" && computerChoice == "scissors"){
        return "Player wins!";
    }
    else if (playerSelection == "paper" && computerChoice == "rock"){
        return "Player wins!";
    }
    else if (playerSelection == "paper" && computerChoice == "scissors"){
        return "Computer wins!";
    }
    else if (playerSelection == "scissors" && computerChoice == "rock"){
        return "Computer wins!";
    }
    else if (playerSelection == "scissors" && computerChoice == "paper"){
        return "Player wins!";
    }
}




const playerSelection = getPlayerChoice();
const computerChoice = getComputerChoice();


console.log(game(playerSelection, computerChoice))
