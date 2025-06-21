const myLabel= document.getElementById("myLabel")
const myText= document.getElementById("myText")
const mySubmit= document.getElementById("mySubmit")
let result= document.getElementById("result")
let age;

mySubmit.onclick= function(){
    age= myText.value;
    age= Number(age)

    if(age>=100){
        result.textContent= `You are too old to enter this site`
    }
    else if(age>=18){
        result.textContent= `HELLOO USER`
    }
    else if(age<=0){
        result.textContent= `YOU ARE NOT EVEN BORN YET!!!`
    }
    else{
        result.textContent= `You must be 18+ to use this site`
    }
}