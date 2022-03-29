// Assignment Code 
var generateBtn = document.querySelector("#generate");
var characterLength = 8;
var chosenAry = [];

var specialCharAry = ['`','~','!','@','#','$','%','^','&','*','(',')','-','_','+','=','|','?','/','<','>',';',':'];
var lowercaseAry = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseAry = ['A','B','C','D','E','F','G','H','I','J','K','L','M','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberAry = ['1','2','3','4','5','6','7','8','9','0'];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var prompts = getPrompt()
  var passwordText = document.querySelector("#password");


  if (prompts) {
    var password = generatePassword();
    passwordText.value = password;
  } else {
    passwordTest.value = "";
  }
}

// choose prompts 
function getPrompt() {
  chosenAry = [];

  characterLength = prompt("Between 8-128, How many characters do you want for the password?")

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    // false alart
    alert("Please choose character length between 8 - 128. Let's try again. " );
    return false; 
  } 

  if(confirm("Lowercase letters in the password?")) {
    chosenAry = chosenAry.concat(lowercaseAry);
  }
  if(confirm("Uppercase letters in the password?")) {
    chosenAry = chosenAry.concat(uppercaseAry);
  }
  if(confirm("spcial characters in the password?")) {
    chosenAry = chosenAry.concat(specialCharAry);
  }
  if(confirm("How about numbers?")) {
    chosenAry = chosenAry.concat(numberAry);
  }
  return true;
  
}  

function generatePassword() {
  var finalPassword = "";
for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * chosenAry.length);
    finalPassword = finalPassword + chosenAry[randomIndex];
}
return finalPassword;

}



