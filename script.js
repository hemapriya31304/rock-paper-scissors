
function getComputerChoice() {
    const values= ["Rock", "Paper", "Scissors"]
    return Math.floor(Math.random() * values.length);
}
function getHumanChoice() {
    const choices= ["Rock", "Paper", "Scissors"]
    if (choices = "Rock") {
        console.log ("You chose Rock")
    }
    else if(choices="Paper") {
        console.log ("You chose Paper")
    }
    else if (choices="Scissor") {
        console.log("You chose Scissors")
    }
    else {
        console.log("Invalid choices")
    }
    return choices;    
}
function PlayRound (HumanChoice, ComputerChoice) {
    if (ComputerChoice==HumanChoice)
        console.log("Its a tie");
    else if (ComputerChoice= "Paper")
        if (HumanChoice= "Rock")
        console.log ("Rock beats Paper, You Win!!");
    else if (ComputerChoice= "Rock")
        if (HumanChoice= "Scissors")
        console.log ("Rock beats Scissors, You lose");
    else if (ComputerChoice="Scissors")
        if (HumanChoice= "Paper")
        console.log ("Scissors beats Paper, You lose");
    else {
        console.log ("Your choice is invalid")
    }
    }


