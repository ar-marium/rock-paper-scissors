function getComputerChoice() {
    let cChance = Math.floor(Math.random() * 3);
    if (cChance == 0) {
        return 'rock';
    } else if (cChance == 1) {
        return 'paper';
    } else {
        return 'scissors';
    };
};

let cChoice = getComputerChoice();

function getHumanChoice(hChance) {
    hChance = prompt("What's your number?").toUpperCase();
    if (hChance == "rock") {
        console.log("Rock");
        return "Rock";
    } else if (hChance == "paper") {
        console.log("Paper");
        return "Paper";
    } else if (hChance == "scissors") {
        console.log("Scissors");
        return "Scissors";
    }
}

let hChoice = getHumanChoice();