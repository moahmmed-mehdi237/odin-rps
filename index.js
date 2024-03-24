var computerScore = 0;
var playerScore = 0;
const winnerDisplay = document.getElementById("winner");
const computerDisplay = document.getElementById("computer-score");
const playerDisplay = document.getElementById("player-score");
winnerDisplay.innerText = "The game has just started!";

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const choice = choices[Math.floor(3 * Math.random())];
    return choice;
};

const getWinner = (player, computer) => {
    winner =
        player === computer
            ? "tie"
            : player === "rock" && computer === "scissors"
            ? "player"
            : player === "scissors" && computer === "paper"
            ? "player"
            : player === "paper" && computer === "rock"
            ? "player"
            : "computer";
    return winner;
};

const handleClick = (value) => {
    if (computerScore < 5 && playerScore < 5) {
        player = value;
        computer = getComputerChoice();
        console.log(`${player} vs. ${computer}`);
        winner = getWinner(player, computer);
        console.log(winner);

        if (winner === "player") playerScore++;
        if (winner === "computer") computerScore++;

        showScores();
        updateWinnerDisplay(winner);
    } else
        alert(
            `${winner} is the winner, you can reset if you want to play more times`
        );
};

const reset = () => {
    playerScore = 0;
    computerScore = 0;
    winnerDisplay.innerText = "The game has been reset!";
    console.log("the game has been reset");
    showScores();
};

const showScores = () => {
    console.log(`player: ${playerScore}   computer: ${computerScore}`);
    if (computerScore.toString() !== computerDisplay.textContent) {
        computerDisplay.textContent = `computer: ${computerScore}`;
    }
    if (playerScore.toString() !== playerDisplay.textContent) {
        playerDisplay.textContent = `player: ${playerScore}`;
    }
};

const updateWinnerDisplay = (winner) => {
    if (winner === "tie") {
        winnerDisplay.textContent = "This round is a tie";
    } else {
        winnerDisplay.textContent = `The winner is the ${winner}`;
    }
};

showScores();
