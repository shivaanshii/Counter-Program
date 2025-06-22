window.onload= function(){
    const myButton= document.getElementById("myButton");
    const myLabel= document.getElementById("myLabel");
    const textguess= document.getElementById("textguess")
    let min=1;
    let max=100;
    let answer= Math.floor((Math.random()* (max-min+1))+ min);
    let attempts= 0;
    let guess;
    
    myButton.onclick= function(){
        guess= Number(textguess.value)
        attempts++;
    
        if (isNaN(guess)) {
            myLabel.textContent = "Please enter a valid number.";
        } else if (guess < answer) {
            myLabel.textContent = "Too low! Try again.";
        } else if (guess > answer) {
            myLabel.textContent = "Too high! Try again.";
        } else {
            myLabel.textContent = `Correct! The number was ${answer}. You guessed it in ${attempts} tries.`;
            myButton.disabled = true; // disable button after winning
        }
    }
};

