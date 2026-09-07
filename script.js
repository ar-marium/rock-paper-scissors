function getComputerChoice() {
    let cChance = Math.floor(Math.random() * 3);
    if (cChance == 0) {
        console.log("Rock");
        return 'Rock';
    } else if (cChance == 1) {
        console.log("Paper");
        return 'Paper';
    } else {
        console.log("Scissors");
        return 'Scissors';
    };
};

let cChoice = getComputerChoice();

function getHumanChoice(hChance) {
    hChance = prompt("What's your number?").toUpperCase();
    if (hChance == "ROCK") {
        console.log("Rock");
        return "Rock";
    } else if (hChance == "PAPER") {
        console.log("Paper");
        return "Paper";
    } else if (hChance == "SCISSORS") {
        console.log("Scissors");
        return "Scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

let hChoice = getHumanChoice();

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Rock" && computerChoice == "Scissors" || humanChoice == "Paper" && computerChoice == "Rock" || humanChoice == "Scissors" && computerChoice == "Paper") {
        alert("You win! Fuck you!");
        humanScore++;
        console.log(humanScore + " " + computerScore);
    } else if (humanChoice == "Rock" && computerChoice == "Rock" || humanChoice == "Paper" && computerChoice == "Paper" || humanChoice == "Scissors" && computerChoice == "Scissors") {
        alert("It's a draw... damn.");
        console.log(humanScore + " " + computerScore);
    } else if (humanChoice == "Rock" && computerChoice == "Paper" || humanChoice == "Paper" && computerChoice == "Scissors" || humanChoice == "Scissors" && computerChoice == "Rock") {
        alert("I win! Suck my robotic cock!");
        computerScore++;
        console.log(humanScore + " " + computerScore);
    }
}

function playGame() {
    
}