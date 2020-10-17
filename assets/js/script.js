// Assignment code here
// CharPool variables
var lowerCh = "abcdefghijklmnopqrstuvwxyz"
var upperCh = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numCh = "1234567890"
var specCh = " !”#$%&’()*+,-./:;<=>?@[\]^_`{|}~"



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Is this button working?
  console.log("I'm workin' here!")
  let pass = generatePassword();
  


  var passwordText = document.querySelector("#password");

  passwordText.value = pass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
