// Assignment code here
// CharPool variables
var lowerCh = "abcdefghijklmnopqrstuvwxyz"
var upperCh = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numCh = "1234567890"
var specCh = " !”#$%&’()*+,-./:;<=>?@[\]^_`{|}~"
var characters = ""

var generatePassword = function(){
  // conditionals to control CharPool array
  var setCharPool = function() { 
    var confirmLower = confirm("Would you like to use lowercase characters?") 
        if (confirmLower) {
          characters = characters + lowerCh;
        };
    var confirmUpper = confirm("Would you like to use uppercase characters?") 
        if (confirmUpper) {
        characters = characters + upperCh;
        };
    var confirmNum = confirm("Would you like to use numeric characters?") 
        if (confirmNum) {
        characters = characters + numCh;
        };
    var confirmSpec = confirm("Would you like to use special characters (* % / + etc.)?") 
        if (confirmSpec) {
        characters = characters + specCh;
        };    
    if (characters === "" || characters === null) {
      alert("You must choose at least 1 character option. Please try again.")
      setCharPool();
    }
  };

  setCharPool();
}
  // converts string to array  
  var passArray = characters.split(""); 
  console.log(`CharPool: ${characters}`);

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
