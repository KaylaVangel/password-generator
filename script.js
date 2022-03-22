// Assignment code here
function lengthPrompt() {
  let size = prompt("Please enter number of characters in password (between 8-128 characters)");
  if (isNaN(Number(size))) {
    alert("Please enter numerical value");
    size = lengthPrompt();
  }
  if (size < 8 || size > 128) {
    alert("Please enter value between 8-128 cahracters");
    size = lengthPrompt();
  }
  return size;
}


function tinyTextConfirm() {
  return confirm("Click ok to include lowercase characters");
}

function bigTextConfirm() {
  return confirm("Click ok to include uppercase characters");
}

function numbersConfirm() {
  return confirm("Click ok to include numbers as characters");
}

function specialConfirm() {
  return confirm("Click ok to include special characters");
}

function generatePassword() {
  var passwordLength = lengthPrompt();
  console.log(passwordLength);

  var lowercase = tinyTextConfirm();
  console.log(lowercase);

  var uppercase = bigTextConfirm();
  console.log(uppercase);

  var numbers = numbersConfirm();
  console.log(numbers);

  var special = specialConfirm();
  console.log(special);

  while (lowercase === false && uppercase === false && numbers === false && special === false) {
    alert("Please choose one input source");
    lowercase = tinyTextConfirm();
    uppercase = bigTextConfirm();
    numbers = numbersConfirm();
    special = specialConfirm();
  }

  const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  const numbercharacters = "0123456789";
  const specialcharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  let characters = "";
  if (uppercase === true) {
    characters += uppercaseCharacters;
  }
  if (lowercase === true) {
    characters += lowercaseCharacters;
  }
  if (numbers === true) {
    characters += numbercharacters;
  }
  if (special === true) {
    characters += specialcharacters;
  }

console.log(characters);

let password = "";
for (let i = 0; i < passwordLength; i++) {
  password += characters.charAt(Math.floor(Math.random()*characters.length));
}
  return password;
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


