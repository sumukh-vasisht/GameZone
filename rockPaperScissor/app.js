let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {

    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;    
    computerScore_span.innerHTML = computerScore;
    if(user === "r") 
    {
        result_p.innerHTML = convertToWord(user) + " crushes " + convertToWord(computer) + ". You win!!!"
    }
    if(user === "p") 
    {
        result_p.innerHTML = convertToWord(user) + " covers " + convertToWord(computer) + ". You win!!!"
    }
    if(user === "s") 
    {
        result_p.innerHTML = convertToWord(user) + " cut " + convertToWord(computer) + ". You win!!!"
    }
}

function lose(user, computer) {
    computerScore++;  
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore;  
    if(computer === "r")
    {
        result_p.innerHTML = convertToWord(computer) + " crushes " + convertToWord(user) + ". You lose :("  
    }
    if(computer === "p")
    {
        result_p.innerHTML = convertToWord(computer) + " covers " + convertToWord(user) + ". You lose :("  
    }
    if(computer === "s")
    {
        result_p.innerHTML = convertToWord(computer) + " cut " + convertToWord(user) + ". You lose :("  
    }
}

function draw(user, computer) {
    result_p.innerHTML = convertToWord(user) + " draws with " + convertToWord(computer) + ". Its a draw :/"     
}

function game(userChoice) {

    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);                     
    }

}

function main() {

    rock_div.addEventListener('click',function() {
        game("r");  
    })

    paper_div.addEventListener('click',function() {
        game("p");  
    })

    scissor_div.addEventListener('click',function() {
        game("s");  
    })

}

main();