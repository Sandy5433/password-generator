// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
    // STEP 1: Getting user input
    var passLength = prompt("What is the length of the password?");

    // validate the passLength if its > 8 or < 128

    var includeLower = confirm("Do you want to include lowercase?");
    var includeUpper = confirm("Do you want to include uppercase?");
    // ask confirm question for numeric
    // ask confirm question for special characters

    console.log(includeLower)
    console.log(includeUpper)
    console.log(passLength)

    // STEP 2: determining what to include in the password
    var lowerCharSet = "abcde";
    var upperCharSet = "ABCDE";
    var selections = "";

    if(includeLower) {
        selections = selections + lowerCharSet
    }

    if(includeUpper) {
        selections = selections + upperCharSet
    }
    console.log(selections)

    // STEP 3: Generating the random password based on the selections
    var randomPassword = "";

    for(i = 0; i < passLength; i++){
        var randomNum = Math.floor(Math.random() * selections.length);
        var randomChar = selections.charAt(randomNum)
        randomPassword = randomPassword + randomChar;
    }

    return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);