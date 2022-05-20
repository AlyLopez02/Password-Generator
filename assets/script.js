
// Personal Code Start
var specialCharacters = ["!", "\"", "#", " ",  "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~",]

var numericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


function collectInput () {
    var passwordLength = window.prompt("Please enter how long you want your password to be.");
    if (passwordLength === null || passwordLength === "") { 
      return;
    }

    passwordLength = parseInt(passwordLength)
    if (passwordLength < 8 || passwordLength > 128) {
      alert("The password length needs to be greater than or equal to 8 characters and less than or equal 128 characters.")
      return null;
    }

    // Special Character Confirmation
    var specialDecision = window.confirm("Do you want to have special characters in your password?");
    console.log(specialDecision)

    if (specialDecision === true) {
      console.log("yes")
    }

    // Numeric Character Confirmation
    var numericDecision = window.confirm("Do you want to have numeric characters in your password?");
    if (numericDecision === true) {
      console.log("yes")
    }

    // Lowercase Character Confirmation
    var lowerDecision = window.confirm("Do you want to have lowercase characters in your password?");
    if (lowerDecision === true) {
      console.log("yes")
    }

    // Uppercase Character Confirmation
    var upperDecision = window.confirm("Do you want to have uppercase characters in your password?");
    if (upperDecision === true) {
      console.log("yes")
    } 

    // Object that all input values go into
    var allInputValues = {
      length: passwordLength,
      special: specialDecision,
      numeric: numericDecision,
      lowercase: lowerDecision,
      uppercase: upperDecision
    }
    console.log(allInputValues);
    return allInputValues;
  }

// WORK ON THIS FUNCTIONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
function generatePassword () {
  var userInput = collectInput();
  console.log(userInput);

  if (userInput === undefined) {
    return null;
  }
  var possibleCharacters = []
  var guaranteedCharacters = []
  var endPassword = []
  
  if (userInput.special === true) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(specialCharacters[Math.floor(Math.random()*specialCharacters.length)]);
  }

  if (userInput.numeric === true) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(numericCharacters[Math.floor(Math.random()*numericCharacters.length)]);
  }

  if (userInput.lowercase === true) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
    guaranteedCharacters.push(lowercaseCharacters[Math.floor(Math.random()*lowercaseCharacters.length)]);
  }

  if (userInput.uppercase === true) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
    guaranteedCharacters.push(uppercaseCharacters[Math.floor(Math.random()*uppercaseCharacters.length)]);
    console.log(guaranteedCharacters);
  }

  for (var i = 0; i < userInput.length; i++) {
    endPassword.push(possibleCharacters[Math.floor(Math.random()*possibleCharacters.length)]);
    console.log(endPassword);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    endPassword = endPassword.slice(guaranteedCharacters.length);
    console.log(endPassword);
    endPassword = guaranteedCharacters.concat(endPassword);
    console.log(endPassword);
  }
  endPassword = endPassword.join("");
  console.log(endPassword);

  window.alert("Your password is " + endPassword);
}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

