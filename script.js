let humChoice = function getHumanChoice(humChance) {
    humChance = prompt("Rock, Paper, Scissors, go! What's your choice?").toUpperCase();
    if (humChance == "ROCK") {
        console.log("Rock");
        return "Rock";
    } else if (humChance == "PAPER") {
        console.log("Paper");
        return "Paper";
    } else if (humChance == "SCISSORS") {
        console.log("Scissors");
        return "Scissors";
    }
}

let comChoice = function getComputerChoice(comChance) {
    comChance = Math.floor(Math.random() * 3);
    if (comChance == 0) {
        console.log("Rock");
        return 'Rock';
    } else if (comChance == 1) {
        console.log("Paper");
        return 'Paper';
    } else {
        console.log("Scissors");
        return 'Scissors';
    };
};

let humanScore = 0;
let computerScore = 0;

    function playGame() {
        function playRound(humanChoice, computerChoice) {
            humanChoice = humChoice();
            computerChoice = comChoice();
        if (humanChoice == "Rock" && computerChoice == "Scissors" || humanChoice == "Paper" && computerChoice == "Rock" || humanChoice == "Scissors" && computerChoice == "Paper") {
            alert("You win!!");
            humanScore++;
            console.log(humanScore + " " + computerScore);
        } else if (humanChoice == "Rock" && computerChoice == "Rock" || humanChoice == "Paper" && computerChoice == "Paper" || humanChoice == "Scissors" && computerChoice == "Scissors") {
            alert("It's a draw... damn.");
            console.log(humanScore + " " + computerScore);
        } else if (humanChoice == "Rock" && computerChoice == "Paper" || humanChoice == "Paper" && computerChoice == "Scissors" || humanChoice == "Scissors" && computerChoice == "Rock") {
            alert("I win!");
            computerScore++;
            console.log(humanScore + " " + computerScore);
        } else {
            alert("Insert valid data.");
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound();
        if (i >= 5) {
            if (humanScore > computerScore) {
                alert("No way, you won. :(");
                break;
            } else if (computerScore > humanScore) {
                alert("Get rekt, I won :)");
                break;
            } else {
                alert("A Draw? How was that possible?");
                break;
            }
        }
    }
}

playGame();