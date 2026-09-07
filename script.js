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

let hChoice = getHumanChoice();
let cChoice = getComputerChoice();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
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
        } else {
            alert("Put an actually valid value, dumbass.");
        }
        delete humanChoice;
        delete computerChoice;
    }

    playRound(hChoice, cChoice);
    playRound(hChoice, cChoice);
    playRound(hChoice, cChoice);
    playRound(hChoice, cChoice);
    playRound(hChoice, cChoice);
    /* for (let i = 0; i < 5; i++) {
        playRound(hChoice, cChoice);
        if (i > 5) {
            if (humanScore > computerScore) {
                alert("No way, you won. :(");
                break;
            } else if (computerScore > humanScore) {
                alert("Get rekt, I won :)");
                break;
            }
        }
    }*/
}

playGame();