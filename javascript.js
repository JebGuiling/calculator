

let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {

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


    function playRound(playerSelection, computerChoice){
        if (playerSelection == computerChoice){
            return "Tie!";
        }
        else if (playerSelection == "rock" && computerChoice == "paper"){
            computerScore++
            return "Computer wins!";
        }
        else if (playerSelection == "rock" && computerChoice == "scissors"){
            playerScore++
            return "Player wins!";
        }
        else if (playerSelection == "paper" && computerChoice == "rock"){
            playerScore++
            return "Player wins!";
        }
        else if (playerSelection == "paper" && computerChoice == "scissors"){
            computerScore++
            return "Computer wins!";
        }
        else if (playerSelection == "scissors" && computerChoice == "rock"){
            computerScore++
            return "Computer wins!";
        }
        else if (playerSelection == "scissors" && computerChoice == "paper"){
            playerScore++
            return "Player wins!";
        }
    }


    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();

    console.log(playRound(playerSelection, computerChoice));

    console.log(`Score is Computer: ${computerScore} and Player: ${playerScore}`)
}
