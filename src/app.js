Play = () => {
    const choises = ["Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors","Paper","Rock", "Scissors"];
    var computer = choises[Math.floor(Math.random() * 30)];
    let showResult = document.getElementById("computerSelect");
    showResult.innerHTML = computer;
}
