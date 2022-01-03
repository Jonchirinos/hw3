let generateBtn = document.querySelector("#generate");
// 1b. create array of letters
let lcLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "x", "t", "u", "v", "w", "x", "y", "z"];
let ucLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let pwNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let pwSymbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "<", ">", "?", "/", "+", "-"];
// generatePassword
// return a final password as a string
function generatePassword() {
    // 1. assign a variable to the length of the password
    let pwLength = prompt("Select Password Length Between 8-126 characters");
    let password = [];
    // 1a. create a password with that length
    if (pwLength < 8 || pwLength > 126) {
        alert("Please meet selected criteria");
    } else {
        let useLower = confirm("Would you like lowercase letters included?");
    }
    if (useLower === true) {
        pwBank = pwBank.concat(lcLetters);
    }
    // 1c. loop through array of letters
    for (let i = 0; i < pwLength; i++) {
        // 1d. push each letter array into password array
        password.push(lcLetters[i]);
    }

    // 1e. create a random 10 letter password
    // 2 ask user for length
    // 1e. convert password array back to string
    return password.join("");
}
// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
}
// Add event listener to generate button
// kicks off the generator
generateBtn.addEventListener("click", writePassword);
localStorage;
