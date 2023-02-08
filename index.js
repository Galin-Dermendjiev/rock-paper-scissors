function Game() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose rock, paper or scissors")
        const computerSelection = getComputerChoice()
        let result = play(computerSelection, playerSelection)

        console.log(result)

        if (result.includes("Win")) {
            playerScore++
        }
        else if(result.includes("Lose")) {
            computerScore++
        }
        else {
            playerScore++
            computerScore++
        }
    }

    if (playerScore > computerScore) {
        console.log("You win the game! " + playerScore + " : " + computerScore)
    }
    else if (computerScore > playerScore) {
        console.log("You lose the game! " + computerScore + " : " + playerScore)
    }
    else {
        console.log("The game is a tie! " + playerScore + " : " + computerScore)
    }
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
        return "It's a tie"
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return "You Win! Rock beats Scissors"
        } else {
            return "You Lose! Paper beats Rock"
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You Win! Paper beats Rock"
        } else {
            return "You Lose! Scissors beats Paper"
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return "You Win! Scissors beats Paper"
        } else {
            return "You Lose! Rock beats Scissors"
        }
    }
}