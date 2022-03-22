// Assignment code here
function lengthPrompt() {
  return prompt ("Please enter number of characters in password (between 8-128 characters)");
}

function tinyTextConfirm() {
  return confirm ("Click ok to include lowercase characters"); 
}

function bigTextConfirm() {
  return confirm ("Click ok to include uppercase characters");
}

function numbersConfirm() {
  return confirm ("Click ok to inculde numbers as characters");
}

function specialConfirm() {
  return confirm ("Click ok to include special characters");
}

function generatePassword() {
  var passwordLength = lengthPrompt();
  console.log(passwordLength);

  var lowercase = tinyTextConfirm();
  console.log(lowercase);

  var uppercase = bigTextConfirm();
  console.log(uppercase);

  var numbers= numbersConfirm();
  console.log(numbers);

  var special= specialConfirm();
  console.log(special);


  return "bad password";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


