const decBut= document.getElementById("decBut");
const resetBut= document.getElementById("resetBut");
const incBut= document.getElementById("incBut");
const countLabel= document.getElementById("countLabel");
let count= 0;

//inc function
incBut.onclick= function(){
    count++;
    countLabel.textContent= count;
}

//dec function
decBut.onclick= function(){
    count--;
    countLabel.textContent= count;
}

//reset function
resetBut.onclick= function(){
    count=0;
    countLabel.textContent= count;
}