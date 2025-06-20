const myButton= document.getElementById("myButton");
const myLabel= document.getElementById("myLabel");
let min=1;
let max=6;
let randomNum;

myButton.onclick= function(){
    randomNum= Math.floor(Math.random()*(max)+min)
    myLabel.textContent= randomNum
}