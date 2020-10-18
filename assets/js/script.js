// Assignment code here

// CharPool
var lowerCh = "abcdefghijklmnopqrstuvwxyz"
var upperCh = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numCh = "1234567890"
var specCh = " !”#$%&’()*+,-./:;<=>?@[\]^_`{|}~"

let characters




var generatePassword = function(){
    
    // conditionals to control array content
    var setCharPool = function() { 
      characters = ""
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
      else {
        return characters
      }
    };

    setCharPool();
  
    console.log(`CharPool: ${characters}`);
   
    // initializes password var
    let pass = ""
    
    
    // Controls password length
    var setPass = function() {
    let passLength = 0;
    passLength = prompt("How long would you like your password to be? Please enter a number between 8 and 128.");
        console.log("passLength ", passLength);
        parseInt(passLength);
        console.log("parsed passLength ", parseInt(passLength));
        if (passLength === null){
          alert("Have a nice day!");
        } else if (isNaN(passLength) || passLength < 8 || passLength > 128 || passLength === ""){
          alert("Invalid input.");
          passLength = 0;
          setPass();
        } 
        
       
        for (i = 0; i < passLength; i++) {
          var randomCh = characters[Math.floor(Math.random() * characters.length)];
              pass = pass + randomCh;
              
        }
        return pass
        
    };
    // sets password length to user input
   
    setPass();

    // assembles password (originally had passArray in place of characters)
    
    
    
    console.log(`The password is (drumroll...): ${pass}`)
      if (pass === ""){
        console.log("Hey, you quit. No Password here man.")
      }
    return pass;
    
};






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
