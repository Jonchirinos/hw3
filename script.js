let generateBtn = document.querySelector("#generate");
// 1b. create array of letters
let lcLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "x", "t", "u", "v", "w", "x", "y", "z"];
// generatePassword
// return a final password as a string
function generatePassword() {
    // 1. assign a variable to the length of the password
    let pwLength = prompt("how long has this been going on?");
    let password = [];
    // 1a. create a password with that length
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
