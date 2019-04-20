PlayScissors = () => {
    const choises = ["Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors"];
    var computer = choises[Math.floor(Math.random() * 30)];
    let showResult = document.getElementById("computerSelect");
    showResult.innerHTML = computer;
    document.getElementById("playerChoise").innerHTML = "Scissors";
    let computerSelection = document.getElementById("computerSelect").innerHTML;
    if (computerSelection == "Paper") { document.getElementById("winner").innerHTML = "Congrats! You win.";}
        else if (computerSelection == "Rock") { document.getElementById("winner").innerHTML = "Too bad! Computer wins.";}
        else if (computerSelection == "Scissors") { document.getElementById("winner").innerHTML = "No winners! It's a tie.";}
    Emoji()
}

PlayRock = () => {
    const choises = ["Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors"];
    var computer = choises[Math.floor(Math.random() * 30)];
    let showResult = document.getElementById("computerSelect");
    showResult.innerHTML = computer;
    document.getElementById("playerChoise").innerHTML = "Rock";
    let computerSelection = document.getElementById("computerSelect").innerHTML;
    if (computerSelection == "Paper") { document.getElementById("winner").innerHTML = "Too bad! Computer wins.";}
        else if (computerSelection == "Rock") { document.getElementById("winner").innerHTML = "No winners! It's a tie.";}
        else if (computerSelection == "Scissors") { document.getElementById("winner").innerHTML = "Congrats! You win.";}
    Emoji()
}

PlayPaper = () => {
    const choises = ["Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors"];
    var computer = choises[Math.floor(Math.random() * 30)];
    let showResult = document.getElementById("computerSelect");
    showResult.innerHTML = computer;
    document.getElementById("playerChoise").innerHTML = "Paper";
    let computerSelection = document.getElementById("computerSelect").innerHTML;
    if (computerSelection == "Paper") { document.getElementById("winner").innerHTML = "No winners! It's a tie.";}
        else if (computerSelection == "Rock") { document.getElementById("winner").innerHTML = "Congrats! You win.";}
        else if (computerSelection == "Scissors") { document.getElementById("winner").innerHTML = "Too bad! Computer wins.";}
    Emoji()
}

Emoji = () => {
    const winner = document.getElementById("winner").innerHTML;
    if (winner == "No winners! It's a tie.") {
        document.getElementById("tie").style.display = "block";
        document.getElementById("playerWins").style.display = "none";
        document.getElementById("playerLooses").style.display = "none";
        window.sessionStorage.setItem(Date.now(), "t");}
        else if (winner == "Congrats! You win.") {
            document.getElementById("playerWins").style.display = "block";
            document.getElementById("tie").style.display = "none";
            document.getElementById("playerLooses").style.display = "none";
            window.sessionStorage.setItem(Date.now(), "p");}
        else if (winner == "Too bad! Computer wins.") {
            document.getElementById("playerLooses").style.display = "block";
            document.getElementById("tie").style.display = "none";
            document.getElementById("playerWins").style.display = "none";
            window.sessionStorage.setItem(Date.now(), "c");}
    CalculatePoints()
}

CalculatePoints = () => {
    var arr = Object.values(window.sessionStorage);
    document.getElementById("scorePlayer").innerHTML = arr.filter(CheckPlayerWins).length;
    document.getElementById("scoreComputer").innerHTML = arr.filter(CheckComputerWins).length;
}

CheckComputerWins = (string) => {return string == "c";}

CheckPlayerWins = (string) => {return string == "p";}

CheckTie = (string) => {return string == "t";}
