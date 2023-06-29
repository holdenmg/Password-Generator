// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays used to store possible password characters

letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"," m", "n", "o", "p", "q" , "r", "s", "t", "u", "v", "w", "x", "y", "z"];
numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
specialArraay = [ "!", "#", "$", "%", "&","*","+","-","/",":",";","<","=",">","?","@","[","]","^","~"]

function generatePassword() {

  // ask how many characters and stores in numberCharacters
  var numberCharacters = prompt("How many characters?")
  //check for cancel
    if (numberCharacters === null) {
      return;
    }
    //check if number too large
    else if (numberCharacters >128){
      alert("Too many characters! Passwords must be 8 to 120 characters long." )
     return;
    }
    //check if number too small
    else if (numberCharacters < 8){
      alert("Not enough characters! Passwords must be 8 to 120 characters long.")
      return;
    }
    //check if input is a valid number
    else if(isNaN(numberCharacters) != false ){
    alert("Invalid selection, please try again");
      return;
    }
    //ask if you want to use upper or lower case or special characters or numbers and stores in coresponding variable
  capitalChoice =confirm("Do you want to use uppercase letters? ( click 'Ok' for yes, 'Cancel' for no)");
   
  lowerChoice = confirm("Do you want to use lower case letters? (click 'Ok' for yes, 'Cancel' for no)");
   
  specialChoice = confirm("Do you want to use special characters? (click 'Ok' for yes, 'Cancel' for no)");

  numberChoice = confirm("Do you want to use numbers? (click 'Ok' for yes, 'Cancel' for no)");
   
  //check if at least one selection was made. if not, tell to try again
  if((capitalChoice && lowerChoice && specialChoice && numberChoice) === !true){
    alert("You must pick at least one character type");
    return;
  }
  //check for true for each character type. If true, splice a random selection from each until 

}










// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
