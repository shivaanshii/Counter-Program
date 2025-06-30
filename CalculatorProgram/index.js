//CALCULATOR PROGRAM

const display= document.getElementById("display")

function appendToDisplay(input){
    display.value +=input;
}

function cleardisplay() {
    display.value= ""
}

function calculate() {
    try{
    display.value=eval(display.value)
    }
    catch(e){
        display.value="Error"
    }
}