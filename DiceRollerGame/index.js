function rollDice() {
    const numOfDice= document.getElementById("numOfDice").value;
    const diceResult= document.getElementById("diceResult")
    const diceImages= document.getElementById("diceImages")
    let values=[];
    let images= [];

    for (let i = 0; i < numOfDice; i++) {
        let dicevalue= Math.floor((Math.random()*6) +1);
        values.push(dicevalue)
        images.push(`<img src="diceimages/${dicevalue}.png" alt="Dice: ${dicevalue}" >`)
    }
    diceResult.textContent= `Dice: ${values.join(", ")}`,
    diceImages.innerHTML= images.join(" ");
}