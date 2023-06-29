// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var numberCharacters = prompt("How many characters?")
  if (numberCharacters === null) {
    return;
  }
  else if (numberCharacters >128){
    alert("Too many characters! Passwords must be 8 to 120 characters long." )
    generatePassword();
  }
  else if (numberCharacters < 8){
    alert("Not enough characters! Passwords must be 8 to 120 characters long.")
    generatePassword();
  }
  capitalChoice =prompt("Do you want to use capital letters? type yes or no")
  if (capitalChoice === null) {
    return;
  }
  else if (capitalChoice == "yes") {
    //write code to add upper case to array//
  }
  else if (capitalChoice != "no") {
  alert("Invalid selection, please try again");
  generatePassword();

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
