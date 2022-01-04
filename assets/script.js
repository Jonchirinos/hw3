let generateBtn = document.querySelector("#generate");
// array of all available password characters
let lcLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "x", "t", "u", "v", "w", "x", "y", "z"];
let ucLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let pwNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let pwSymbol = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "<", ">", "?", "/", "+", "-"];
// generatePassword
// return a final password as a string
// start of function
function generatePassword() {
    // 1. assign a variable to the length of the password
    // asking for user input
    let pwLength = prompt("Select Password Length Between 8-128 characters");
    let password = [];
    let choice = [];
    // 1a. create a password with that length
    if (pwLength < 8 || pwLength > 128) {
        alert("Please meet selected criteria");
        generatePassword();
    } else {
        // validated input from user
        let useLower = confirm("Would you like lowercase letters included?");
        let useUpper = confirm("Would you like uppercase letters included?");
        let useNumber = confirm("Would you like numbers included?");
        let useSymbol = confirm("Would you like symbols included?");

        if (useLower === true) {
            password = password.concat(lcLetters);
            let randomItem = lcLetters;
        }
        if (useUpper === true) {
            password = password.concat(ucLetters);
        }
        if (useNumber === true) {
            password = password.concat(useNumber);
        }
        if (useSymbol === true) {
            password = password.concat(useSymbol);
        }
        // If user doesn't select any options
        if (useLower === false && useUpper == false && useNumber == false && useSymbol == false) {
            alert("Your password must contain one of the aforementioned criteria");
            generatePassword();
        } else {
            // 1c. loop through array of letters
            for (let i = 0; i < pwLength; i++) {
                let pickChoice = choice[Math.floor(Math.random() * choice.length)];
                // 1d. push each letter array into password array
                password.push(choice[i]);
            }
        }
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
choice;
