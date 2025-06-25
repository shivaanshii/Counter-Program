const passwordLength= 12; 
let finalpassword= document.getElementById("password")
let inclower= document.getElementById("inclower")
let includeLowercase;
let incupper= document.getElementById("incupper")
let includeUppercase;
let incnumber= document.getElementById("incnumber")
let includeNumbers;
let incsymbol= document.getElementById("incsymbol")
let includesymbols;





// const includeLowercase= true;
// const includeUppercase= true;
// const includeNumbers= true;
// const includesymbols= true;

//function to generate password
function passwordGenerator(passwordLength, includeLowercase,includeUppercase, includeNumbers,includesymbols ) {
    const lowerCaseChar= "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChar= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChar= "0123456789";
    const symbolChar= "!@#$%^&*+-_/~"

    let allowedChar= "";
    let password= " ";

    //select below const based on what you need in your password
    if (inclower.checked) {
        includeLowercase= true;
        allowedChar+= lowerCaseChar;
    }
    else{
        includeLowercase= false;
        allowedChar+= "";
    }
    if (incupper.checked) {
        includeUppercase= true;
        allowedChar+= upperCaseChar;
    }
    else{
        includeUppercase= false;
        allowedChar+= "";
    }
    if (incnumber.checked) {
        includeNumbers= true;
        allowedChar+= numberChar;
    }
    else{
        includeNumbers= false;
        allowedChar+= "";
    }
    if (incsymbol.checked) {
        includesymbols= true;
        allowedChar+= symbolChar;
    }
    else{
        includesymbols= false;
        allowedChar+= "";
    }
    if (passwordLength<=0) {
        return `(password length must be atleast 1)`
    }
    if (allowedChar.length === 0) {
        return `(atleast 1 set of characters need to be selected)`
    }

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex= Math.floor(Math.random()* allowedChar.length)
        password+= allowedChar[randomIndex];
    }
    
    return password;
}

function work() {
    password= passwordGenerator(passwordLength, includeLowercase,includeUppercase, includeNumbers,includesymbols );
    finalpassword.textContent=`Generated Password: ${password}`
} 