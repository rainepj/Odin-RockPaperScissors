let computerScore = 0;
let humanScore = 0;

function whoWon(computerScore, humanScore){
    let endScore = Math.abs(computerScore-humanScore);
    if (computerScore > humanScore){
        console.log(`The computer beat you by ${endScore}!`)
    } else if (humanScore > computerScore){
        console.log(`Human beat computer. Human won by ${endScore}!`)
    }
}

function getComputerChoice(){
    let x = Math.random()
    if (x < 0.32){
        return "scissors";
    } else if (0.32 < x && x < 0.66){
        return "paper";
    } else {
        return "rock";
    }
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper, or Scissors? What's your choice?")
    if (choice.toLowerCase() === "rock"){
        return "rock";
    } else if (choice.toLowerCase() === "paper"){
        return "paper";
    } else if (choice.toLowerCase() === "scissors"){
        return "scissors";
    } else {
        console.log("please choose from the three options.")
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock" && computerChoice == "rock"){
        console.log("It's a tie!")
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You Win! Rock beats Scissors.")
        humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("You Lose! Paper beats Rock")
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You Win! Paper beats Rock!")
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "paper"){
        console.log("It's a tie!")
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You Lose! Scissors beats Paper")
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You Lose! Rock beats Scissors")
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You Win! Scissors beats paper")
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "scissors"){
        console.log("It's a tie!")
    }
}

function playGame(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

function playGame5(){
    let game = 0;
    while (game < 5){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        game++;
    }
    whoWon(computerScore, humanScore);
}


