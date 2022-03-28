// Assignment Code 
var generateBtn = document.querySelector("#generate");
var charLength = 8;
var choiceAry = [];

var specialCharAry = ['`','~','!','@','#','$','%','^','&','*','(',')','-','_','+','=','|','?','/','<','>',';',':'];
var lowercaseAry = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseAry = ['A','B','C','D','E','F','G','H','I','J','K','L','M','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberAry = ['1','2','3','4','5','6','7','8','9','0'];

//creat a "generatePassword" function
function generatePassword() {
  console.log("Good work!");


// prompt the user 
// 1. password length 8 < 128
// 2. choose to have lowercase,
// 3. uppercase
// 4. numeric
// 5. special characters
// validate input 
// display password based on ceriteria
  return "Generated password will be shown here.";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getPrompt() {
  characterLength = prompt("Between 8-128, How many characters do you want for the password?")

  if(isNaN(characterLength) || characterLength < 8 || charLength > 128) {
    alert("Please choose character length between 8 - 128. Let's try again. " );
    return false; 
  } 

  if(confirm("Lowercase letters in the password?")) {
    choiceAry = choiceAry.concat(lowercaseAry);
  }
  if(confirm("Uppercase letters in the password?")) {
    choiceAry = choiceAry.concat(uppercaseAry);
  }
  if(confirm("spcial characters in the password?")) {
    choiceAry = choiceAry.concat(specialCharAry);
  }
  if(confirm("How about numbers?")) {
    choiceAry = choiceAry.concat(numberAry);
  }
  return true;
} 