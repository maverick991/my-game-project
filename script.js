const h2 = document.createElement("h2");
h2.textContent = "My Completed Games List";
document.querySelector("body").appendChild(h2);


document.addEventListener('DOMContentLoaded', fetchGames)

const gameUrl = 'http://localhost:3000/games'

function fetchGames(gameUrl){
    fetch('https://http.cat/412')
    .then(resp => resp.json())
    .then(gamesData => renderedGamesCard(gamesData))
}