
function getComputerChoice(){
    let num = Math.floor(Math.random() * 3 + 1);

    if (num == 1){
        return "Rock";

    }
    else if (num == 2){
        return "Paper";
    } else { 
        return "Scissors";
    }

}

function getPlayerChoice(){
    let choice = prompt("Input either Rock, Paper or Scissors").toLowerCase();
    return choice;
}







const playerSelection = getPlayerChoice();
const computerChoice = getComputerChoice();
