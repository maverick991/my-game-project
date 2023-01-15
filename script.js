const h2 = document.createElement("h2");
h2.textContent = "My Completed Games List";
document.querySelector("body").appendChild(h2);


document.addEventListener('DOMContentLoaded', fetchGames)

function fetchGames(){
    fetch('')
    .then(resp => resp.json())
    .then(gamesData => renderedGameCard(gamesData))
}