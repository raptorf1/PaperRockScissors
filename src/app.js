const choises = ["Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors"];
const idWinner = document.getElementById("winner");
const showResult = document.getElementById("computerSelect");
const idPlayerChoise = document.getElementById("playerChoise");
const idScorePlayer = document.getElementById("scorePlayer");
const idScoreComputer = document.getElementById("scoreComputer");
const storage = window.sessionStorage;

PlayScissors = () => {
    var computer = choises[Math.floor(Math.random() * 30)];
    showResult.innerHTML = computer;
    idPlayerChoise.innerHTML = "Scissors";
    storage.setItem(performance.now(), "playerScissors");
    if (showResult.innerHTML == "Paper") {
        idWinner.innerHTML = "Congrats! You win.";
        storage.setItem(performance.now()+1, "computerPaper");
    }
    else if (showResult.innerHTML == "Rock") {
        idWinner.innerHTML = "Too bad! Computer wins.";
        storage.setItem(performance.now()+1, "computerRock");
    }
    else if (showResult.innerHTML == "Scissors") {
        idWinner.innerHTML = "No winners! It's a tie.";
        storage.setItem(performance.now()+1, "computerScissors");
    }
    Emoji()
}

PlayRock = () => {
    var computer = choises[Math.floor(Math.random() * 30)];
    showResult.innerHTML = computer;
    idPlayerChoise.innerHTML = "Rock";
    storage.setItem(performance.now(), "playerRock");
    if (showResult.innerHTML == "Paper") {
        idWinner.innerHTML = "Too bad! Computer wins.";
        storage.setItem(performance.now()+1, "computerPaper");
    }
    else if (showResult.innerHTML == "Rock") {
        idWinner.innerHTML = "No winners! It's a tie.";
        storage.setItem(performance.now()+1, "computerRock");
    }
    else if (showResult.innerHTML == "Scissors") {
        idWinner.innerHTML = "Congrats! You win.";
        storage.setItem(performance.now()+1, "computerScissors");
    }
    Emoji()
}

PlayPaper = () => {
    var computer = choises[Math.floor(Math.random() * 30)];
    showResult.innerHTML = computer;
    idPlayerChoise.innerHTML = "Paper";
    storage.setItem(performance.now(), "playerPaper");
    if (showResult.innerHTML == "Paper") {
        idWinner.innerHTML = "No winners! It's a tie.";
        storage.setItem(performance.now()+1, "computerPaper");
    }
    else if (showResult.innerHTML == "Rock") {
        idWinner.innerHTML = "Congrats! You win.";
        storage.setItem(performance.now()+1, "computerRock");
    }
    else if (showResult.innerHTML == "Scissors") {
        idWinner.innerHTML = "Too bad! Computer wins.";
        storage.setItem(performance.now()+1, "computerScissors");
    }
    Emoji()
}

Emoji = () => {
    if (idWinner.innerHTML == "No winners! It's a tie.") {
        document.getElementById("tie").style.display = "block";
        document.getElementById("playerWins").style.display = "none";
        document.getElementById("playerLooses").style.display = "none";
        storage.setItem(Date.now(), "t");
    }
    else if (idWinner.innerHTML == "Congrats! You win.") {
        document.getElementById("playerWins").style.display = "block";
        document.getElementById("tie").style.display = "none";
        document.getElementById("playerLooses").style.display = "none";
        storage.setItem(Date.now(), "p");
    }
    else if (idWinner.innerHTML == "Too bad! Computer wins.") {
        document.getElementById("playerLooses").style.display = "block";
        document.getElementById("tie").style.display = "none";
        document.getElementById("playerWins").style.display = "none";
        storage.setItem(Date.now(), "c");
    }
    CalculatePoints()
    Thumbs()
}

CalculatePoints = () => {
    const arr = Object.values(storage);
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
        document.getElementById("thumbsMiddle").style.display = "none";
    }
    else if (computerNumber == PlayerNumber) {
        document.getElementById("thumbsDown").style.display = "none";
        document.getElementById("thumbsUp").style.display = "none";
        document.getElementById("thumbsMiddle").style.display = "block";
    }
    else {
        document.getElementById("thumbsDown").style.display = "none";
        document.getElementById("thumbsUp").style.display = "block";
        document.getElementById("thumbsMiddle").style.display = "none";
    }
}

Reset = () => {
    storage.clear();
    window.location.reload(true);
}

PrivacyMessage = () => {
    alert("Your privacy is of the utmost importance for us. All scores/stats data of the game, are only stored in the Session Storage of your browser and are deleted whenever you close the tab. No data is left on your device. If you want to keep track of your stats, you can download the detailed CSV file provided.");
}

ViewStats = () => {
    const data = Object.values(storage);
    const games = data.length / 3;
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

CSV = () => {
    const CSV = Object.values(storage);
    const gamesCSV = CSV.length / 3;
    const playerWinsCSV = CSV.filter(CheckPlayerWins).length;
    const computerWinsCSV = CSV.filter(CheckComputerWins).length;
    const tiesCSV = CSV.filter(CheckTie).length;
    const playerPaperCSV = CSV.filter(CheckPlayerPaper).length;
    const playerRockCSV = CSV.filter(CheckPlayerRock).length;
    const playerScissorsCSV = CSV.filter(CheckPlayerScissors).length;
    const computerPaperCSV = CSV.filter(CheckComputerPaper).length;
    const computerRockCSV = CSV.filter(CheckComputerRock).length;
    const computerScissorsCSV = CSV.filter(CheckComputerScissors).length;
    const sessionStats = ["GamesPlayed", gamesCSV, "PlayerWins", playerWinsCSV, "ComputerWins", computerWinsCSV, "Ties", tiesCSV, "PlayerPaper", playerPaperCSV, "PlayerRock", playerRockCSV, "PlayerScissors", playerScissorsCSV, "ComputerPaper", computerPaperCSV, "ComputerRock", computerRockCSV, "ComputerScissors", computerScissorsCSV];
    const dataCSV = new Blob([sessionStats], {type: 'text/csv'});
    const url = window.URL.createObjectURL(dataCSV);
    document.getElementById('download_link').href = url;
}

function CheckComputerPaper (string) {return string == "computerPaper";}

function CheckComputerRock (string) {return string == "computerRock";}

function CheckComputerScissors (string) {return string == "computerScissors";}

function CheckPlayerPaper (string) {return string == "playerPaper";}

function CheckPlayerRock (string) {return string == "playerRock";}

function CheckPlayerScissors (string) {return string == "playerScissors";}


// Player VS Player

const idPlayer1Choise = document.getElementById("player1Choise");
const idWait = document.getElementById("wait");
const idWinnerPVSP = document.getElementById("winnerPVSP");
const idPlayer2Choise = document.getElementById("player2Choise");

PlayScissors1 = () => {
    idPlayer1Choise.innerHTML = "Scissors";
    Player1Styles();
}

PlayPaper1 = () => {
    idPlayer1Choise.innerHTML = "Paper";
    Player1Styles();
}

PlayRock1 = () => {
    idPlayer1Choise.innerHTML = "Rock";
    Player1Styles();
}

Player1Styles = () => {
    idWait.style.display = "block";
    setTimeout(function () {
        idPlayer1Choise.style.display = "none";
        idWait.style.display = "none";
    }, 3000);
    setTimeout(function () {
        document.getElementById("scissors1").style.display = "none";
        document.getElementById("rock1").style.display = "none";
        document.getElementById("paper1").style.display = "none";
        document.getElementById("scissors2").style.display = "inline";
        document.getElementById("rock2").style.display = "inline";
        document.getElementById("paper2").style.display = "inline";
        }, 3000);
}

PlayScissors2 = () => {
    idPlayer2Choise.innerHTML = "Scissors";
    HidePlayer2();
    if (idPlayer1Choise.innerHTML == "Scissors") {
        idWinnerPVSP.innerHTML = "No winners. It's a tie!!!";
    }
    else if (idPlayer1Choise.innerHTML == "Paper") {
        idWinnerPVSP.innerHTML = "Player 2 wins!!!";
    }
    else if (idPlayer1Choise.innerHTML == "Rock") {
        idWinnerPVSP.innerHTML = "Player 1 wins";
    }
    idPlayer1Choise.style.display = "block";
    Timeout();
}

PlayPaper2 = () => {
    idPlayer2Choise.innerHTML = "Paper";
    HidePlayer2();
    if (idPlayer1Choise.innerHTML == "Scissors") {
        idWinnerPVSP.innerHTML = "Player 1 wins!!!";
    }
    else if (idPlayer1Choise.innerHTML == "Paper") {
        idWinnerPVSP.innerHTML = "No winners. It's a tie!!!";
    }
    else if (idPlayer1Choise.innerHTML == "Rock") {
        idWinnerPVSP.innerHTML = "Player 2 wins";
    }
    idPlayer1Choise.style.display = "block";
    Timeout();
}

PlayRock2 = () => {
    idPlayer2Choise.innerHTML = "Rock";
    HidePlayer2();
    if (idPlayer1Choise.innerHTML == "Scissors") {
        idWinnerPVSP.innerHTML = "Player 2 wins!!!";
    }
    else if (idPlayer1Choise.innerHTML == "Paper") {
        idWinnerPVSP.innerHTML = "Player 1 wins!!!";
    }
    else if (idPlayer1Choise.innerHTML == "Rock") {
        idWinnerPVSP.innerHTML = "No winners. It's a tie!!!";
    }
    idPlayer1Choise.style.display = "block";
    Timeout();
}

Timeout = () => {
    setTimeout(function () {window.location.reload("true");}, 2000);
}

HidePlayer2 = () => {
    document.getElementById("scissors2").style.display = "none";
    document.getElementById("rock2").style.display = "none";
    document.getElementById("paper2").style.display = "none";
}
