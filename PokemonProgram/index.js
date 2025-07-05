fetchData()
async function fetchData() {
    try{
        const pokemonName= document.getElementById("pokemonName").value.toLowerCase();

        const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if (!response.ok) {
            throw new Error("Error in fetching")
        }
        const data= await response.json()
        const pokemonSprite= data.sprites.front_default;
        const imgElement= document.getElementById("pokemonSprite")
        imgElement.src= pokemonSprite
        imgElement.style.display= "block"
    }
    catch(error){
        console.log(error)
    }
}

const nameHere= document.getElementById("nameHere");
const listButton= document.getElementById("listButton")
listButton.addEventListener("click",event=> {
    if(getComputedStyle(nameHere).display== "none"){
        nameHere.style.display= "block"
        nameHere.textContent= "Bulbasaur   Ivysaur   Venusaur   Charmander   Charmeleon   Charizard   Squirtle   Wartortle   Blastoise   Caterpie   Metapod   Butterfree   Weedle   Kakuna   Beedrill   Pidgey   Pidgeotto   Pidgeot   Rattata   Raticate   Spearow   Fearow   Ekans   Arbok   Pikachu   Raichu   Sandshrew   Sandslash   Nidoran-F   Nidorina   Nidoqueen   Nidoran-M   Nidorino   Nidoking   Clefairy   Clefable   Vulpix   Ninetales   Jigglypuff   Wigglytuff   Zubat   Golbat   Oddish   Gloom   Vileplume   Paras   Parasect   Venonat   Venomoth   Diglett   Dugtrio   Meowth   Persian   Psyduck   Golduck   Mankey   Primeape   Growlithe   Arcanine   Poliwag   Poliwhirl   Poliwrath   Abra   Kadabra   Alakazam   Machop   Machoke   Machamp   Bellsprout   Weepinbell   Victreebel   Tentacool   Tentacruel   Geodude   Graveler   Golem   Ponyta   Rapidash   Slowpoke   Slowbro   Magnemite   Magneton   Farfetchd   Doduo   Dodrio   Seel   Dewgong   Grimer   Muk   Shellder   Cloyster   Gastly   Haunter   Gengar   Onix   Drowzee   Hypno   Krabby   Kingler   Voltorb"    
        listButton.textContent= "Hide"
    }
    else{
        nameHere.style.display= "none"
        nameHere.textContent="";
        listButton.textContent= "Show"
    }
})
