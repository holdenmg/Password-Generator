// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays used to store possible password characters

const lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"," m", "n", "o", "p", "q" , "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const capitalArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const specialArray = [ "!", "#", "$", "%", "&","*","+","-","/",":",";","<","=",">","?","@","[","]","^","~"]

function generatePassword() {
  // empty password array to contain future choice
  var passArray = [];
  // ask how many characters and stores in numberCharacters
  var numberCharacters = prompt("How many characters? Passwords must be 8 to 120 characters long")
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
  alert("NOTE: You must pick at least one character type from the following selections");
    //ask if you want to use upper or lower case or special characters or numbers and stores in coresponding variable
    //Then concat corespoinding array to password array.
  capitalChoice =confirm("Do you want to use uppercase letters? ( click 'Ok' for yes, 'Cancel' for no)");
    if(capitalChoice == true){
      passArray = passArray.concat(capitalArray);
    }
  lowerChoice = confirm("Do you want to use lower case letters? (click 'Ok' for yes, 'Cancel' for no)");
    if(lowerChoice == true){
      passArray = passArray.concat(lowerArray);
    }
  specialChoice = confirm("Do you want to use special characters? (click 'Ok' for yes, 'Cancel' for no)");
    if(specialChoice ===true){
      passArray = passArray.concat(specialArray);
    }
  numberChoice = confirm("Do you want to use numbers? (click 'Ok' for yes, 'Cancel' for no)");
    if(numberChoice == true){
      passArray = passArray.concat(numberArray);
    }
  //check if at least one selection was made. if not, tell to try again

    if((capitalChoice || lowerChoice || specialChoice || numberChoice) === !true){
      alert("You must pick at least one character type. Try again.");
      return;
    }
    
    
  //define new function to create password string from array. This will alow repeating of following steps
  //if password criteria final check is unsat.
  function passwordGenerator() {
  //pick a randmom selection from password array and push to final array so password is correct number of characters
    const finalArray = [];
     
    while(finalArray.length < +numberCharacters){
      pChar = passArray[Math.floor(Math.random()*passArray.length)];
     
      finalArray.push(pChar);
    }
    var pass = finalArray.join('');
    
    //check if password contains at least one character from each desired category, if not run passwordGenerator again
    // do this by using regular expressions to check for existence of specific characters in var pass
  
    if (capitalChoice == true) {
      if (/[A-Z]/.test(pass)!= true) {
        passwordGenerator();
      }
    }
    if (lowerChoice == true) {
      if (/[a-z]/. test(pass) != true) {
          passwordGenerator();
      }
    }
    if (specialChoice == true) {
      if (/\W/.test(pass) != true) {
        passwordGenerator();
      } 
    }
    if (numberChoice == true) {
      if (/[0-9]/.test(pass) != true) {
        passwordGenerator();
      } 
    }
    return pass;
  }
 return passwordGenerator();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
