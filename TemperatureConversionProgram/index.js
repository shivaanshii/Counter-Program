const textBox= document.getElementById("textBox")
const c2f= document.getElementById("c2f")
const f2c= document.getElementById("f2c")
const result= document.getElementById("result")
let temp;

function convert() {
    if (c2f.checked) {
        temp= Number(textBox.value)
        temp= (temp* 9 / 5) +32
        result.textContent= `Temperature in Farhenheit is: ${temp.toFixed(2)}`
    }
    else if (f2c.checked) {
        temp= Number(textBox.value)
        temp= (temp-32) * 5/9
        result.textContent= `Temperature in Celsius is: ${temp.toFixed(2)}`
    }
    else{
        result.textContent= "Select conversion"
    }
}