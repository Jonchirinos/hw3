// link logic to button
let generateBtn = document.querySelector("#generate");
// array of all available password characters

// array of possible lowercase letters for password
let lcLetters = ["abcdefghijklmnopqrstuvwxyz"];
// array of possible uppercase letter for password
let ucLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
// array of possible numbers letter for password
let pwNumber = ["0123456789"];
// array of possible symbols letter for password
let pwSymbol = ["`!@#$%^&*?/<>}{)(=+-_"];

// initialize generatePassword function
function generatePassword() {
    // establish password length
    let pwLength = parseInt(prompt("Select Password Length Between 8-128 characters"));
    // empty array to hold possible password characters
    let possibleCharacters = [];
    // if statement to ensure correct password length
    if (pwLength < 8 || pwLength > 128) {
        // generate alert
        alert("Please meet selected criteria");
        // continue if validation passed
    } else {
        // prompt asking user if they want to include lowercase letters
        let useLower = confirm("Would you like lowercase letters included?");
        // prompt asking user if they want to include uppercase letters
        let useUpper = confirm("Would you like uppercase letters included?");
        // prompt asking user if they want to include numbers letters
        let useNumber = confirm("Would you like numbers included?");
        // prompt asking user if they want to include symbols letters
        let useSymbol = confirm("Would you like symbols included?");
        // if user elects to include lowercase letters in password
        if (useLower === true) {
            // append lowercase letter to array
            possibleCharacters = possibleCharacters.concat(lcLetters);
        }
        // if user elects to include uppercase letters in password
        if (useUpper === true) {
            // append uppercase letters to empty array
            possibleCharacters = possibleCharacters.concat(ucLetters);
        }
        // if user elects to include numbers letters in password
        if (useNumber === true) {
            // append numbers to array
            possibleCharacters = possibleCharacters.concat(pwNumber);
        }
        // if user elects to include symbols letters in password
        if (useSymbol === true) {
            // append symbols to array
            possibleCharacters = possibleCharacters.concat(pwSymbol);
        }
        // combine possible character strings into one
        let possibleCharactersString = possibleCharacters.join();
        // If user doesn't select any options
        if (useLower === false && useUpper == false && useNumber == false && useSymbol == false) {
            // display alert
            alert("Your password must contain one of the aforementioned criteria");
            // continue if validation passed
        } else {
            // empty string to hold password
            let pass = "";
            // loop through length of password
            for (var i = 0; i < pwLength; i++) {
                // select random character from possibleCharactersString
                var randomCharacter = Math.floor(Math.random() * possibleCharactersString.length);
                // appending selected character above to password
                pass += possibleCharactersString.substring(randomCharacter, randomCharacter + 1);
            }
            // populate password in text box
            document.getElementById("password").value = pass;
        }
    }
}
// event listener to initiate generatePassword function
generateBtn.addEventListener("click", generatePassword);
