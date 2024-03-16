const getComputerChoice = () =>{
    const choices = ['rock' , 'paper' , 'scissors'];
    const choice = choices[Math.floor(3*Math.random())];
    return choice
}

const playRound = (playerChoice, computerChoice) => {
    playerChoice = playerChoice.toLowerCase();
    console.log(computerChoice);
    if (playerChoice === computerChoice) return 'draw';
    switch (playerChoice){
        case 'rock':
            if (computerChoice === 'scissors') return 'you win!';
            else return'computer wins';
        break;
        case 'scissors':
            if (computerChoice === 'paper') return 'you win!';
            else return 'computer wins';
            break;
        case 'paper':
            if (computerChoice === 'rock') return 'you win'
            else return 'computer wins'
            break;
    }
    
} 

const handleClick = (value) =>{
    console.log(value);
    console.log(playRound(value,getComputerChoice()));
}