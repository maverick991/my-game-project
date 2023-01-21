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
    console.log(zelda)
    if (zelda != "Hyrule Compendium"){
        const response = await fetch(`https://botw-compendium.herokuapp.com/api/v2/all`)
     //use .then()
        const data = await response.json()
        console.log(data.data.materials)
        createZeldaInfo(data.data[zelda])
    }
  }

  function createZeldaInfo(info){
    console.log("info",info)
    document.getElementById("zelda").innerHTML = info
  }


  //Define your problem in English
//retrieve data from the API
//click event triggers stuff on the page from the category that is selected
//print out on the page