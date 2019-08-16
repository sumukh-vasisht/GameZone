let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const one_div = document.getElementById("one");
const two_div = document.getElementById("two");
const three_div = document.getElementById("three");
const four_div = document.getElementById("four");
const five_div = document.getElementById("five");
const six_div = document.getElementById("six");

function getComputerChoice() {

    const choices = ['one','two', 'three', 'four', 'five', 'six'];
    const randomNumber = Math.floor(Math.random() * 6);
    return choices[randomNumber];

}

function convertToWord(letter) {
    if(letter === "one") return "One";
    if(letter === "two") return "Two";
    if(letter === "three") return "Three";
    if(letter === "four") return "Four";
    if(letter === "five") return "Five";
    return "Six";
}

function win(user, computer) {
    // userScore++;
    // userScore_span.innerHTML = userScore;    
    // computerScore_span.innerHTML = computerScore;
    if(user === "one" && comp!== "one") 
    {
        result_p.innerHTML = "User : " + convertToWord(user) + " , Computer :  " + convertToWord(computer) + ". Runs added";
        userScore = userScore + 1;
    }
    if(user === "two" && comp!== "two") 
    {
        result_p.innerHTML = "User : " + convertToWord(user) + " , Computer :  " + convertToWord(computer) + ". Runs added"
        userScore = userScore + 2;
    }
    if(user === "three" && comp!== "three") 
    {
        result_p.innerHTML = "User : " + convertToWord(user) + " , Computer :  " + convertToWord(computer) + ". Runs added"
        userScore = userScore + 3;
    }
    if(user === "four" && comp!== "four") 
    {
        result_p.innerHTML = "User : " + convertToWord(user) + " , Computer :  " + convertToWord(computer) + ". Runs added"
        userScore = userScore + 4;
    }
    if(user === "five" && comp!== "five") 
    {
        result_p.innerHTML = "User : " + convertToWord(user) + " , Computer :  " + convertToWord(computer) + ". Runs added"
        userScore = userScore + 5;
    }
    if(user === "six" && comp!== "six") 
    {
        result_p.innerHTML = "User : " + convertToWord(user) + " , Computer :  " + convertToWord(computer) + ". Runs added"
        userScore = userScore + 6;
    }
    userScore_span.innerHTML = userScore;    
    computerScore_span.innerHTML = computerScore;
}

function lose(user, computer) {
    // computerScore++;  
    // userScore_span.innerHTML = userScore; 
    // computerScore_span.innerHTML = computerScore;  
    if(user === "one" && comp=== "one") 
    {
        result_p.innerHTML = "User : " + convertToWord(user) + " , Computer :  " + convertToWord(computer) + ". OUT!!!"
    }
    if(user === "two" && comp=== "two") 
    {
        result_p.innerHTML = "User : " + convertToWord(user) + " , Computer :  " + convertToWord(computer) + ". OUT!!!"
    }
    if(user === "three" && comp=== "three") 
    {
        result_p.innerHTML = "User : " + convertToWord(user) + " , Computer :  " + convertToWord(computer) + ". OUT!!!"
    }
    if(user === "four" && comp=== "four") 
    {
        result_p.innerHTML = "User : " + convertToWord(user) + " , Computer :  " + convertToWord(computer) + ". OUT!!!"
    }
    if(user === "five" && comp=== "five") 
    {
        result_p.innerHTML = "User : " + convertToWord(user) + " , Computer :  " + convertToWord(computer) + ". OUT!!!"
    }
    us
    if(user === "six" && comp=== "six") 
    {
        result_p.innerHTML = "User : " + convertToWord(user) + " , Computer :  " + convertToWord(computer) + ". OUT!!!"
    }
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore;  
}

// function draw(user, computer) {
//     result_p.innerHTML = convertToWord(user) + " draws with " + convertToWord(computer) + ". Its a draw :/"     
// }

function game(userChoice) {

    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "onetwo":
        case "onethree":
        case "onefour":
        case "onefive":
        case "onesix":
        case "twoone":
        case "twothree":
        case "twofour":
        case "twofive":
        case "twosix":
        case "threetwo":
        case "threeone":
        case "threefour":
        case "threefive":
        case "threesix":
        case "fourtwo":
        case "fourthree":
        case "fourone":
        case "fourfive":
        case "foursix":
        case "fiveone":
        case "fivethree":
        case "fivefour":
        case "fivetwo":
        case "fivesix":
        case "sixtwo":
        case "sixone":
        case "sixfour":
        case "sixfive":
        case "sixthree":
            win(userChoice,computerChoice);
            break;
        case "oneone":
        case "twotwo":
        case "threethree":
        case "fourfour":
        case "fivefive":
        case "sixsix":
            lose(userChoice,computerChoice);
            break;
        // case "rr":
        // case "pp":
        // case "ss":
        //     draw(userChoice,computerChoice);                     
    }

}

function main() {

    one_div.addEventListener('click',function() {
        game("one");          
    })

    two_div.addEventListener('click',function() {
        game("two");  
    })

    three_div.addEventListener('click',function() {
        game("three");  
    })
    four_div.addEventListener('click',function() {
        game("four");  
    })

    five_div.addEventListener('click',function() {
        game("five");  
    })

    six_div.addEventListener('click',function() {
        game("six");  
    })

}

main();