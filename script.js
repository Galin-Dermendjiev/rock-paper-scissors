const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const restartBtn = document.querySelector(".restart");
const resultH2 = document.querySelector(".result");
const roundDetailsH3 = document.querySelector(".details");
const playerScoreP = document.querySelector(".playerScore");
const computerScoreP = document.querySelector(".computerScore");
const playerSign = document.querySelector(".signPlayer");
const computerSign = document.querySelector(".signComputer");

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

let computerScore;
let playerScore;

restart();

function Game(playerChoice) {

    const playerSelection = playerChoice;
    const computerSelection = getComputerChoice();
    play(computerSelection, playerSelection);
    changeSign(playerChoice, computerSelection);
    playerScoreP.textContent = "Player: " + playerScore;
    computerScoreP.textContent = "Computer: " + computerScore;
    gameOver();

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
        roundDetailsH3.textContent = "Round not counted"
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            resultH2.textContent = "You Win!"
            roundDetailsH3.textContent = "Rock beats Scissors"
            playerScore++;
        } else {
            resultH2.textContent = "You Lose!"
            roundDetailsH3.textContent = "Paper beats Rock"
            computerScore++;
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            resultH2.textContent = "You Win!"
            roundDetailsH3.textContent = "Paper beats Rock"
            playerScore++;
        } else {
            resultH2.textContent = "You Lose!"
            roundDetailsH3.textContent = "Scissors beats Paper"
            computerScore++;
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            resultH2.textContent = "You Win!"
            roundDetailsH3.textContent = "Scissors beats Paper"
            playerScore++;
        } else {
            resultH2.textContent = "You Lose!"
            roundDetailsH3.textContent = "Rock beats Scissors"
            computerScore++;
        }
    }
}

function restart() {
    computerScore = 0;
    playerScore = 0;
    resultH2.textContent = "Choose your weapon.";
    roundDetailsH3.textContent = "First to score 5 points wins the game";
    playerScoreP.textContent = "Player: " + playerScore;
    computerScoreP.textContent = "Computer: " + computerScore;

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    playerSign.textContent = "?";
    computerSign.textContent = "?";
}

function gameOver() {
    if(playerScore >= 5 || computerScore >= 5)
    {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}

function changeSign(playerChoice, computerChoice) {
    if (playerChoice == "rock"){
        playerSign.textContent = "✊";
    }
    else if (playerChoice == "paper"){
        playerSign.textContent = "✋";
    }
    else if (playerChoice == "scissors"){
        playerSign.textContent = "✌";
    }

    if (computerChoice == "rock"){
        computerSign.textContent = "✊";
    }
    else if (computerChoice == "paper"){
        computerSign.textContent = "✋";
    }
    else if (computerChoice == "scissors"){
        computerSign.textContent = "✌";
    }
}