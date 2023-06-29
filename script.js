// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var numberCharacters = prompt("How many characters?")
  
    if (numberCharacters === null) {
      return;
    }
    else if (numberCharacters >128){
      alert("Too many characters! Passwords must be 8 to 120 characters long." )
     return;
    }
    else if (numberCharacters < 8){
      alert("Not enough characters! Passwords must be 8 to 120 characters long.")
      return;
    }
    else if(isNaN(numberCharacters) != false ){
    alert("Invalid selection, please try again");
      return;
    }

  capitalChoice =prompt("Do you want to use capital letters? type yes or no")
    if (capitalChoice === null) {
      return;
    }
    else if (capitalChoice != "no" && capitalChoice != "yes") {
      alert("Invalid selection, please try again");
      return;
    }

  lowerChoice = prompt("Do you want to use lower case letters? type yes or no")
    if (lowerChoice === null) {
      return;
    }
    else if (lowerChoice != "no" && lowerChoice != "yes") {
      alert("Invalid selection, please try again");
      return;
    }


}










// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
