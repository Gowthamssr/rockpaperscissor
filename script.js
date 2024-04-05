let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

let player = prompt("Enter your Name : ");

const names  = document.querySelector("#name");

names.innerText = `Welcome ${player}`;

const drawGame = (computerChoice) =>{
    console.log("Game is draw");
    msg.innerText = `Game is Draw comp also selected ${computerChoice}`;
    msg.style.backgroundColor = "black";
    msg.style.color = "white";
}

const showWinner = (userWin,userChoice,computerChoice) =>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        if(userScore === 10)
        {
        msg.innerText = "Hurrah You Won!"
            computerScore = 0;
            userScore = 0;
            userScorePara.innerText = userScore;
            compScorePara.innerText = computerScore;
        }
        console.log("You won");
        msg.innerText = `You Won! Yourchoice : ${userChoice} beats Computerchoice : ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        compScorePara.innerText = computerScore;
        if(computerScore === 10)
        {
            msg.innerText = "Oops you lost!"
            computerScore = 0;
            userScore = 0; 
            userScorePara.innerText = userScore;
            compScorePara.innerText = computerScore;
        }
        console.log("Computer won");
        msg.innerText = `Computer Won! ComputerChoice : ${computerChoice} beats YourChoice : ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}

const getComputerChoice = ( ) =>{
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const playGame =  (userChoice) =>{
    console.log("Your-choice = ",userChoice);
    //computer choice generation
    const computerChoice  = getComputerChoice();
    console.log("Computer choice = ",computerChoice);

    if(userChoice === computerChoice)
    {
        //draw game 
        drawGame(computerChoice);
    }
    else{
        let userWin = true;
        if(userChoice === "rock")
            userWin = computerChoice === "paper"?false:true;
        else if(userChoice === "paper")
           userWin =  computerChoice === "scissors"?false:true;
        else
            userWin = computerChoice === "rock"?false:true;

        showWinner(userWin,userChoice,computerChoice);

    }

}

choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked  ",userChoice);
        playGame(userChoice)
    })
})