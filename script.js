// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generate Password() {

}

// Ask user to enter number of characters of their password
var pwLength = window.prompt("How many characters would you like your password to contain?")

function min8 = window.alert("Password length must be at least 8 characters");
function max129 = window.alert("Password length must be less than 129 characters");
function specialCharacter = window.alert("Click OK to confirm including special characters"); //True or False
function numericNo = window.alert("Click OK to confirm including numeric characters"); //True or False
function lowerCharacter = window.alert("Click OK to confirm including lowercase characters"); //True or False
function upperCharacter = window.alert("Click OK to confirm including uppercase characters"); //True or False

//Aray of numeric options for computer to pick from
var numOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]



if (pwLength < 8) {
  function min8
} 