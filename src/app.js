PlayScissors = () => {
    const choises = ["Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors"];
    var computer = choises[Math.floor(Math.random() * 30)];
    let showResult = document.getElementById("computerSelect");
    showResult.innerHTML = computer;
    let computerSelection = document.getElementById("computerSelect").innerHTML;
    if (computerSelection == "Paper") { document.getElementById("winner").innerHTML = "Congrats! You win.";}
        else if (computerSelection == "Rock") { document.getElementById("winner").innerHTML = "Too bad! Computer wins.";}
        else if (computerSelection == "Scissors") { document.getElementById("winner").innerHTML = "No winners! It's a tie.";}
}

PlayRock = () => {
    const choises = ["Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors"];
    var computer = choises[Math.floor(Math.random() * 30)];
    let showResult = document.getElementById("computerSelect");
    showResult.innerHTML = computer;
    let computerSelection = document.getElementById("computerSelect").innerHTML;
    if (computerSelection == "Paper") { document.getElementById("winner").innerHTML = "Too bad! Computer wins.";}
        else if (computerSelection == "Rock") { document.getElementById("winner").innerHTML = "No winners! It's a tie.";}
        else if (computerSelection == "Scissors") { document.getElementById("winner").innerHTML = "Congrats! You win.";}
}

PlayPaper = () => {
    const choises = ["Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors"];
    var computer = choises[Math.floor(Math.random() * 30)];
    let showResult = document.getElementById("computerSelect");
    showResult.innerHTML = computer;
    let computerSelection = document.getElementById("computerSelect").innerHTML;
    if (computerSelection == "Paper") { document.getElementById("winner").innerHTML = "No winners! It's a tie.";}
        else if (computerSelection == "Rock") { document.getElementById("winner").innerHTML = "Congrats! You win.";}
        else if (computerSelection == "Scissors") { document.getElementById("winner").innerHTML = "Too bad! Computer wins.";}
}
