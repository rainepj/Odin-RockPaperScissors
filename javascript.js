let computerScore = 0;
let humanScore = 0;

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

function rockChoice(){
    let humanChoice = "rock";
    playGame(humanChoice);
}
function scissorChoice(){
    let humanChoice = "scissors";
    playGame(humanChoice);
}
function paperChoice(){
    let humanChoice = "paper";
    playGame(humanChoice);
}

function roundResult(roundText){
    const li = document.createElement("li");
    li.textContent = roundText;
    ol.appendChild(li);
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock" && computerChoice == "rock"){
        let roundText = "It's a tie";
        roundResult(roundText);
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        let roundText = "You Win! Rock beats Scissors!";
        roundResult(roundText);
        humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "paper"){
        let roundText = "You Lose! Paper beats Rock.";
        roundResult(roundText);
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        let roundText = "You Win! Paper beats Rock!";
        roundResult(roundText);
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "paper"){
        let roundText = "It's a tie";
        roundResult(roundText);
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        let roundText = "You Lose! Scissors beats Paper.";
        roundResult(roundText);
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        let roundText = "You Lose! Rock beats Scissors.";
        roundResult(roundText);
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        let roundText = "You Win! Scissors beats paper!";
        roundResult(roundText)
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "scissors"){
        let roundText = "It's a tie";
        roundResult(roundText);
    }
    compScore.textContent = computerScore;
    yourScore.textContent = humanScore;
}

function playGame(humanChoice){
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

function whoWon(computerScore, humanScore){
    let endScore = Math.abs(computerScore-humanScore);
    if (computerScore > humanScore){
        console.log(`The computer beat you by ${endScore}!`)
    } else if (humanScore > computerScore){
        console.log(`Human beat computer. Human won by ${endScore}!`)
    }
}
function hideReveal (){
    if (ol.getAttribute("class") === "hide"){
        ol.setAttribute("class", "reveal");
    } else if (ol.getAttribute("class") === "reveal"){
        ol.setAttribute("class", "hide");
    }    
}

function reset (){
    const x = document.querySelectorAll("li");
    let y = Array.from(x);
    
    for (let i = 0; i < y.length; i++ ){
        let tempLi = document.querySelector("li");
        tempLi.remove();
    }
    computerScore = 0;
    humanScore = 0;
    compScore.textContent = computerScore;
    yourScore.textContent = humanScore;
}

//Interactable
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const reveal = document.querySelector(".reveal");
const ol = document.querySelector("ol");
const resetButton = document.querySelector(".reset");
//Non-interactable
const yourScore = document.querySelector(".humanScore");
const compScore = document.querySelector(".computerScore");
//Interactable
rock.addEventListener("click",rockChoice);
paper.addEventListener("click",paperChoice);
scissor.addEventListener("click",scissorChoice);
reveal.addEventListener("click",hideReveal);
resetButton.addEventListener("click", reset);


/*
On rock/paper/scissors button press
    Computer choice executes -> comparison for
    win/loss computed -> text containting computer-
    choice + win/loss should be added as new <li>



*/
