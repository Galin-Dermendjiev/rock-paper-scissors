const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const restartBtn = document.querySelector(".restart");
const resultH2 = document.querySelector(".result");
const roundDetailsH3 = document.querySelector(".details");

rockBtn.addEventListener("click", function() {
    Game("rock");
});

paperBtn.addEventListener("click", function() {
    Game("paper");
});

scissorsBtn.addEventListener("click", function() {
    Game("scissors");
});

restartBtn.addEventListener("click", restart);

let computerScore = 0;
let playerScore = 0;
resultH2.textContent = "Choose your weapon.";
roundDetailsH3.textContent = "First to score 5 points wins the game";

function Game(playerChoice) {

    // for (let i = 0; i < 5; i++) {
    //     const playerSelection = prompt("Choose rock, paper or scissors")
    //     const computerSelection = getComputerChoice()
    //     let result = play(computerSelection, playerSelection)

    //     console.log(result)

    //     if (result.includes("Win")) {
    //         playerScore++
    //     }
    //     else if(result.includes("Lose")) {
    //         computerScore++
    //     }
    //     else {
    //         playerScore++
    //         computerScore++
    //     }
    // }
    const playerSelection = playerChoice
        const computerSelection = getComputerChoice()
        let result = play(computerSelection, playerSelection)

        //resultH2.textContent = result;

        // if (result.includes("Win")) {
        //     playerScore++
        // }
        // else if(result.includes("Lose")) {
        //     computerScore++
        // }
        

    // if (playerScore > computerScore) {
    //     roundDetailsH3.textContent = "You win! " + playerScore + " : " + computerScore;
    // }
    // else if (computerScore > playerScore) {
    //     roundDetailsH3.textContent = "You lose! " + playerScore + " : " + computerScore;
    // }
    // else {
    //     roundDetailsH3.textContent = "It is a tie! " + playerScore + " : " + computerScore;
    // }
}


function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3) + 1

    if (rand == 1) {
        return "rock"
    }
    else if (rand == 2) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function play(computerSelection, playerSelection) {
    if (playerSelection == computerSelection) {
        resultH2.textContent = "It's a tie"
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {

            resultH2.textContent = "You Win!"
            roundDetailsH3.textContent = "Rock beats Scissors"
        } else {
            resultH2.textContent = "You Lose!"
            roundDetailsH3.textContent = "Paper beats Rock"
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            resultH2.textContent = "You Win!"
            roundDetailsH3.textContent = "Paper beats Rock"
        } else {
            resultH2.textContent = "You Lose!"
            roundDetailsH3.textContent = "Scissors beats Paper"
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            resultH2.textContent = "You Win!"
            roundDetailsH3.textContent = "Scissors beats Paper"
        } else {
            resultH2.textContent = "You Lose!"
            roundDetailsH3.textContent = "Rock beats Scissors"
        }
    }
}

function restart() {
    computerScore = 0;
    playerScore = 0;
    resultH2.textContent = "Choose your weapon. First to score 5 points wins the game";
    roundDetailsH3.textContent = "First to score 5 points wins the game";
}