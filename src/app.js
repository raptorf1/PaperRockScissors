Play = () => {
    const choises = ["Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors"];
    var computer = choises[Math.floor(Math.random() * 30)];
    let showResult = document.getElementById("computerSelect");
    showResult.innerHTML = computer;
    Winner();
}

Winner = () => {
    let playerSelection = document.getElementById("playerSelect").value;
    let computerSelection = document.getElementById("computerSelect").innerHTML;
    if (playerSelection == "Paper" && computerSelection == "Paper") { document.getElementById("winner").innerHTML = "No winners! It's a tie.";}
        else if (playerSelection == "Paper" && computerSelection == "Rock") { document.getElementById("winner").innerHTML = "Congrats! You win!";}
        else if (playerSelection == "Paper" && computerSelection == "Scissors") { document.getElementById("winner").innerHTML = "Too bad! Computer wins.";}
        else if (playerSelection == "Rock" && computerSelection == "Paper") { document.getElementById("winner").innerHTML = "Too bad! Computer wins.";}
        else if (playerSelection == "Rock" && computerSelection == "Rock") { document.getElementById("winner").innerHTML = "No winners! It's a tie.";}
        else if (playerSelection == "Rock" && computerSelection == "Scissors") { document.getElementById("winner").innerHTML = "Congrats! You win.";}
        else if (playerSelection == "Scissors" && computerSelection == "Paper") { document.getElementById("winner").innerHTML = "Congrats! You win.";}
        else if (playerSelection == "Scissors" && computerSelection == "Rock") { document.getElementById("winner").innerHTML = "Too bad! Computer wins.";}
        else if (playerSelection == "Scissors" && computerSelection == "Scissors") { document.getElementById("winner").innerHTML = "No winners! It's a tie.";}
}
