//const h2 = document.createElement("h2");
//h2.textContent = "My Completed Games List";
//document.querySelector("body").appendChild(h2);
//document.addEventListener('DOMContentLoaded', fetchGames)
//const gameUrl = 'https://http.cat/200'
//function fetchGames(gameUrl){
  //  fetch('https://http.cat/200')
    //.then(resp => resp.json())
    //.then(gamesData => renderedGamesCard(gamesData))
//}
//https://botw-compendium.herokuapp.com/api/v2/all

//const botwData = 'example'

//fetch('https://botw-compendium.herokuapp.com/api/v2/all', {
  //method: 'POST', // or 'PUT
  //headers: {
    //'Content-Type': 'application/json',
  //},
 // body: JSON.stringify(botwData),
//})
 // .then((response) => response.json())
 // .then((botwData) => {
    //console.log('Success:', botwData);
 // })
  //.catch((error) => {
    //console.error('Error:', error);
  //});

  async function start(){
    const response = await fetch("https://botw-compendium.herokuapp.com/api/v2/all") //resolves promise
    const data = await response.json() //javascript obect notoation parsing into reading format
    createZeldaList(data.data)
  }

  start() //calling function to load it on page

  function createZeldaList(zeldaList){
    document.getElementById("zelda").innerHTML = `
    <select onchange="loadByCategory(this.value)">
      <option>Hyrule Compendium</option>
      ${Object.keys(zeldaList).map(function(zelda){
        return `<option>${zelda}<option>`
      }).join('')}
      </select>
    `
    //join takes the array into one single text instead of the commas and whatnot between the items
    //loop through the array through the template literal
  }

  async function loadByCategory(zelda){
    if (zelda != "Hyrule Compendium"){
        const response = await fetch(`https://botw-compendium.herokuapp.com/api/v2/all`)
        const data = await response.json()
        //console.log(data)
        createZeldaInfo(data.data)
    }
  }

  function createZeldaInfo(info){
    //console.log(info)
    document.getElementById("zelda").innerHTML = `
    <div id="zelda"></div> <div class="info" ></div>https://botw-compendium.herokuapp.com/api/v2/category/`
  }