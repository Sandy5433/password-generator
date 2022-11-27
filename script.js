// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
    // STEP 1: Getting user input
    var passLength = prompt("How many characters would you like your password to contain?");

    // validate the passLength if its > 8 or < 128
    if(passLength <8) {
        window.alert("Password length must be at least 8 characters")
        return generatePassword()
    }
    if(passLength >128) {
        window.alert("Password length must be less than 129 characters")
        return generatePassword()
    }

    var includeLower = confirm("Click OK to confirm including lowercase characters");
    var includeUpper = confirm("Click OK to confirm including uppercase characters");
    // ask confirm question for numeric
    var includenumeric = confirm("Click OK to confirm including numeric characters")
    // ask confirm question for special characters
    var includespecial = confirm("Click OK to confirm including special characters");

    console.log(passLength)
    console.log(includeLower)
    console.log(includeUpper)
    console.log(includenumeric)
    console.log(includespecial)

    // STEP 2: determining what to include in the password
    var lowerCharSet = "abcdefghijklmnopqrstuvwxyz";
    var upperCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericSet = "0123456789";
    var specialCharSet = "";
    var selections = "";

    if(includeLower) {
        selections = selections + lowerCharSet
    }

    if(includeUpper) {
        selections = selections + upperCharSet
    }
    if(includenumeric) {
        selections = selections + numericSet
    }

    if(includespecial) {
        selections = selections + specialCharSet
    }

    if ((includeLower && includeUpper && includenumeric && includespecial) == false) {
        window.alert("You must select at least one character type")
        return generatePassword()
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