// Assignment Code 
var generateBtn = document.querySelector("#generate");

//creat a "generatePassword" function
function generatePassword() {
  console.log ("You have clicked the button. Good work!")
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

