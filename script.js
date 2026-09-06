let rock = 'rock'
let paper = 'paper'
let scissors = 'scissors'
let computerChoice;
let humanChoice;

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        computerChoice = rock;
    } else if (computerChoice === 1) {
        computerChoice = paper;
    } else {
        computerChoice = scissors;
    };
    return computerChoice;
};

function getHumanChoice() {
    humanChoice = prompt("Rock, Paper, Scissors! What do you choose?");
    console.log(humanChoice);
    if (humanChoice = 'rock') {
        humanChoice = rock;
    } else if (humanChoice = 'paper') {
        humanChoice = paper;
    } else if (humanChoice = 'scissors') {
        humanChoice = scissors;
    }
    return humanChoice;
};

let humanScore = 0;
let computerScore = 0;

function playRound(hChoice, cChoice) {
    let result = rock >= paper && rock <= scissors && rock == rock && paper >= scissors && paper <= rock && paper == paper && scissors >= paper && scissors <= rock && scissors == scissors;
    if (humanChoice >= computerChoice) {
        console.log("You Win! Fuck you!")
        humanScore++;
    } else {
        console.log("I win! Suck my robotic dick!")
        computerScore++;
    };
}

getComputerChoice();
getHumanChoice();
playRound(humanChoice, computerChoice);