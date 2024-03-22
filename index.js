var computerScore = 0;
var playerScore = 0;

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
    player = value;
    computer = getComputerChoice();
    console.log(`${player} vs. ${computer}`);
    winner = getWinner(player, computer);
    console.log(winner);
    
    if (winner === "player") playerScore++;
    if (winner === "computer") computerScore++;
    
    console.log(
        `player score : ${playerScore}     computer score: ${computerScore}`
        );
    };
    
    const reset = () => {
        playerScore = 0;
        computerScore = 0;
        console.log("the game has been reset");
        console.log(
        `player score : ${playerScore}     computer score: ${computerScore}`
        );
    };
    
    
    // const getPlayerChoice = () => {
    //     return prompt("please enter your choice here");
    // };
    
    // const evalPlayerChoice = (choice) => {
    //     choice = choice.toLowerCase();
    //     while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    //         console.log("invalid choice");
    //         choice = prompt("please enter a valid choice").toLocaleLowerCase();
    //     }
    //     return choice;
    // };
    
    // const playRound = () => {
    //     playerChoice = evalPlayerChoice(getPlayerChoice());
    //     playerChoice = playerChoice.toLowerCase();
    //     computerChoice = getComputerChoice();
    //     console.log(`${playerChoice} vs. ${computerChoice}`);
    //     winner = getWinner(playerChoice, computerChoice);
    //     console.log(winner);
    // };
    
    // for (let index = 0; index < 5; index++) {
    //     console.log(`round ${index}`);
    //     playRound();
    // }