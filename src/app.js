const choises = ["Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors"];
const idWinner = document.getElementById("winner");
const showResult = document.getElementById("computerSelect");
const idPlayerChoise = document.getElementById("playerChoise");
const idScorePlayer = document.getElementById("scorePlayer");
const idScoreComputer = document.getElementById("scoreComputer");

PlayScissors = () => {
    var computer = choises[Math.floor(Math.random() * 30)];
    showResult.innerHTML = computer;
    idPlayerChoise.innerHTML = "Scissors";
    if (showResult.innerHTML == "Paper") { idWinner.innerHTML = "Congrats! You win.";}
        else if (showResult.innerHTML == "Rock") { idWinner.innerHTML = "Too bad! Computer wins.";}
        else if (showResult.innerHTML == "Scissors") { idWinner.innerHTML = "No winners! It's a tie.";}
    Emoji()
}

PlayRock = () => {
    var computer = choises[Math.floor(Math.random() * 30)];
    let showResult = document.getElementById("computerSelect");
    showResult.innerHTML = computer;
    idPlayerChoise.innerHTML = "Rock";
    if (showResult.innerHTML == "Paper") { idWinner.innerHTML = "Too bad! Computer wins.";}
        else if (showResult.innerHTML == "Rock") { idWinner.innerHTML = "No winners! It's a tie.";}
        else if (showResult.innerHTML == "Scissors") { idWinner.innerHTML = "Congrats! You win.";}
    Emoji()
}

PlayPaper = () => {
    var computer = choises[Math.floor(Math.random() * 30)];
    let showResult = document.getElementById("computerSelect");
    showResult.innerHTML = computer;
    idPlayerChoise.innerHTML = "Paper";
    if (showResult.innerHTML == "Paper") { idWinner.innerHTML = "No winners! It's a tie.";}
        else if (showResult.innerHTML == "Rock") { idWinner.innerHTML = "Congrats! You win.";}
        else if (showResult.innerHTML == "Scissors") { idWinner.innerHTML = "Too bad! Computer wins.";}
    Emoji()
}

Emoji = () => {
    if (idWinner.innerHTML == "No winners! It's a tie.") {
        document.getElementById("tie").style.display = "block";
        document.getElementById("playerWins").style.display = "none";
        document.getElementById("playerLooses").style.display = "none";
        window.sessionStorage.setItem(Date.now(), "t");}
        else if (idWinner.innerHTML == "Congrats! You win.") {
            document.getElementById("playerWins").style.display = "block";
            document.getElementById("tie").style.display = "none";
            document.getElementById("playerLooses").style.display = "none";
            window.sessionStorage.setItem(Date.now(), "p");}
        else if (idWinner.innerHTML == "Too bad! Computer wins.") {
            document.getElementById("playerLooses").style.display = "block";
            document.getElementById("tie").style.display = "none";
            document.getElementById("playerWins").style.display = "none";
            window.sessionStorage.setItem(Date.now(), "c");}
    CalculatePoints()
    Thumbs()
}

CalculatePoints = () => {
    var arr = Object.values(window.sessionStorage);
    idScorePlayer.innerHTML = `Player ${arr.filter(CheckPlayerWins).length}`;
    idScoreComputer.innerHTML = `Computer ${arr.filter(CheckComputerWins).length}`;
}

CheckComputerWins = (string) => {return string == "c";}

CheckPlayerWins = (string) => {return string == "p";}

CheckTie = (string) => {return string == "t";}

Thumbs = () => {
    const computerNumber = Number(idScoreComputer.innerHTML.replace( /^\D+/g, ''));
    const PlayerNumber = Number(idScorePlayer.innerHTML.replace( /^\D+/g, ''));
    if (computerNumber > PlayerNumber) {
        document.getElementById("thumbsDown").style.display = "block";
        document.getElementById("thumbsUp").style.display = "none";
        document.getElementById("thumbsMiddle").style.display = "none";}
        else if (computerNumber == PlayerNumber) {
            document.getElementById("thumbsDown").style.display = "none";
            document.getElementById("thumbsUp").style.display = "none";
            document.getElementById("thumbsMiddle").style.display = "block";}
        else {
            document.getElementById("thumbsDown").style.display = "none";
            document.getElementById("thumbsUp").style.display = "block";
            document.getElementById("thumbsMiddle").style.display = "none";}
}

Reset = () => {
    window.sessionStorage.clear();
    window.location.reload(true);
}

PrivacyMessage = () => {
    alert("Your privacy is of the utmost importance for us. All scores/stats data of the game, are only stored in the Session Storage of your browser and are deleted whenever you close the tab. No data is left on your device.");
}

ViewStats = () => {
    const data = Object.values(window.sessionStorage);
    const games = data.length;
    const playerWins = data.filter(CheckPlayerWins).length;
    const computerWins = data.filter(CheckComputerWins).length;
    const ties = data.filter(CheckTie).length;
    const playerWinRatio = ((playerWins/games)*100).toFixed(2);
    const computerWinRatio = ((computerWins/games)*100).toFixed(2);
    const tieRatio = ((ties/games)*100).toFixed(2);
    if (games == 0) {
        alert("No games are played yet. Start playing and good luck!");
    }
    else {
        alert(`You played ${games} games. You won ${playerWins} games. Computer won ${computerWins} games. There were ${ties} ties. Your winning ratio is ${playerWinRatio}%. Computer's winning ratio is ${computerWinRatio}%. Ties occured ${tieRatio}%.`);
    }
}
