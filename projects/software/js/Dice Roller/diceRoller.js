// Dice Roller Program

function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value; //grabs just the value in the box
    const diceResult = document.getElementById("diceResult"); 
    const diceResultImage = document.getElementById("diceResultImage");
    const values = [];
    const images = [];

    for(let i=0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        const altText = `Dice ${value},`
        // console.log(value);
        values.push(value);
        images.push(`<img src="images/D6-${value}.png" alt="Dice ${value} ">`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceResultImage.innerHTML = images.join('');
}

