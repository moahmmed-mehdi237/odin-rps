const getComputerChoice = () =>{
    const choices = ['rock' , 'paper' , 'scissors'];
    const choice = choices[Math.floor(3*Math.random())];
    return choice
}

const playRound = (playerChoice, computerChoice) => {
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === computerChoice) return 'draw';
    switch (playerChoice){
        case 'rock':
            if (computerChoice === 'scissors') return 'you win!';
            else 'computer wins';
        case 'scissors':
            if (computerChoice === 'paper') return 'you win!';
            else return 'computer wins';
        case 'paper':
            if (computerChoice === 'rock') return 'you win'
            else return 'computer wins'
        default : 
            return 'player input is not valid'
    }
    
} 

const playGame =() =>{
    for (var i = 0;i<5;i++){
        const playerChoice = prompt('enter your choice from (rock,paper,scissors)');
        const computerChoice = getComputerChoice();
        console.log(playerChoice,computerChoice,playRound(playerChoice,computerChoice));
    }
}

playGame();