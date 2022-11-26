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


// Ask user to enter number of characters of their password
function generatePassword() {
   window.prompt("How many characters would you like your password to contain?")
  
  } 

  var chosenLength = {
  pwLength = 8 - 128,
  min8: function () {
    window.alert("Password length must be at least 8 characters")
  },
  max129: function() {
    window.alert("Password length must be less than 129 characters")
  },
}

function specialCharacter (){
    window.alert("Click OK to confirm including special characters")
  }; //True or False
  

  if (generatePassword.pwLength < 8) {
    var min8()
  } else if (generatePassword.pwLength > 128) {
    var max129()
  } else { var specialCharacter()
  };


//Ask user to choose whether to include special character

if (var specialCharacter()) {

}




var numericNo = window.alert("Click OK to confirm including numeric characters"); //True or False
var lowerCharacter = window.alert("Click OK to confirm including lowercase characters"); //True or False
var upperCharacter = window.alert("Click OK to confirm including uppercase characters"); //True or False

//Aray of numeric options for computer to pick from
var numOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Get random numeric number from array of options
var numIndex = Math.floor(Math.random() * numOptions.length);
var numChoice = numOption[numIndex];

//Aray of uppercase character options for computer to pick from
var upCharOption = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Get random uppercase character from array of options
var upCharIndex = Math.floor(Math.random() * upCharOption.length);
var upCharChoice = upCharOption[upCharIndex]

//Aray of lowercase character options for computer to pick from
var loCharOption = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Get random lowercase character from array of options
var loCharIndex = Math.floor(Math.random() * loCharOption.length);
var loCharChoice = loCharOption[loCharIndex];

//Aray of special character options for computer to pick from
var specialCharOption = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", ";", ":", "'", ",", ".", "/", "<", ">", "?"];
// Get random special character from array of options
var specialCharIndex = Math.floor(Math.random() * specialCharOption.length);
var specialCharChoice = specialCharOption[specialCharIndex];


