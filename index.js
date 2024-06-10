const player = document.getElementById('player');
const computer = document.getElementById('computer');
const resultEl = document.getElementById('result');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const drawEl = document.getElementById('draw')
const playerWinEl = document.getElementById('playerWin')
const computerWinEl = document.getElementById('computerWin')
const reset = document.getElementById('resetBtn')

let userChoice = "";
let computerChoice = "";
let result = ""
let draw = 0;
let playerWin = 0;
let computerWin = 0;

rock.addEventListener('click', () => {
    userChoice = "Rock";
    player.innerText = `Player Choice: ${userChoice}`;
    createComputerChoice();
    createResult();
})
paper.addEventListener('click', () => {
    userChoice = "Paper";
    player.innerText = `Player Choice: ${userChoice}`;
    createComputerChoice();
    createResult();
})
scissor.addEventListener('click', () => {
    userChoice = "Scissor";
    player.innerText = `Player Choice: ${userChoice}`;
    createComputerChoice();
    createResult();
})
reset.addEventListener('click',()=>{
    userChoice = ""
    computerChoice = ""
    result = ""
    draw =0;
    playerWin = 0;
    computerWin = 0;
    player.innerText = `Player Choice : ${userChoice}`
    computer.innerText = `Computer Choice : ${computerChoice}`
    resultEl.innerText = `Result : ${result}`
    drawEl.innerText = `Draw : ${draw}`
    playerWinEl.innerText = `Player Win : ${playerWin}`
    computerWinEl.innerText = `Computer Win : ${computerWin}`
} )

function createComputerChoice() {
    const choice = ["Rock", "Paper", "Scissor"];
    const choose = Math.floor(Math.random() * 3);
    computerChoice = choice[choose];
    computer.innerText = `Computer Choice: ${computerChoice}`;
}

function createResult() {
    if (userChoice === computerChoice) {
        resultEl.innerText = "Result: Match draw!!!";
        draw++;
        drawEl.innerText = `Draw :${draw}`
    } 
    else if (
        (userChoice === "Rock" && computerChoice === "Scissor") ||
        (userChoice === "Scissor" && computerChoice === "Paper") ||
        (userChoice === "Paper" && computerChoice === "Rock")
    ) {
        resultEl.innerText = "Result: You Win....";
        playerWin++;
        playerWinEl.innerText = `Player Win :${playerWin}`
    }
    else if(
        (userChoice === "Scissor" && computerChoice === "Rock") ||
        (userChoice === "Paper" && computerChoice === "Scissor") ||
        (userChoice === "Rock" && computerChoice === "Paper")
    ){
        resultEl.innerText = "Result: computer Win....";
        computerWin++;
        computerWinEl.innerText = `Computer Win :${computerWin}`
    }
    else
     {
        resultEl.innerText = "Error : check code";
    }
}
