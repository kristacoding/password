// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generate password
function buildPassword() {
  var passwordLengthAsk = parseInt(prompt("How many characters do you want in your password?"));
  //does not work if you enter 0
  if (passwordLengthAsk >= 8 && passwordLengthAsk <= 128) {
    console.log(passwordLengthAsk);
    console.log(typeof (passwordLengthAsk));
  }
  else {
    alert("You password must be between 8 and 128 characters");
    return;
  }
  var number = confirm("Do you want numbers in your password?");
  var lowerCase = confirm("Do you want lowercase characters in your password?");
  var upperCase = confirm("Do you want uppercase character in your password?");
  var specialCharacter = confirm("Do you want special characters in your password?");

    //log in console to confirm we are getting the correct result
    console.log(number);
    console.log(lowerCase);
    console.log(upperCase);
    console.log(specialCharacter);
    console.log(passwordLengthAsk);

  // if no prompts are selected, returns alert
  if (number === false && lowerCase === false && upperCase === false && specialCharacter === false) {
    alert("Can not provide password - Must select at least one type of character!");
    return;
  }

  //Object holding password options
  var passwordOptions = {
    length: passwordLengthAsk,
    number: number,
    lowerCase: lowerCase,
    upperCase: upperCase,
    specialcharacter: specialCharacter
  };
  return passwordOptions;
}


function generatePassword() {
  //will run through writePassword function
  var options = buildPassword();
  
  var lowerAlphabetChoices = ('abcdefghijklmnopqrstuvwxyz').split("");
  console.log(lowerAlphabetChoices); //check that it is returning an array
  var upperAlphabetChoices = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split("");
  var numberChoices = ('0,1,2,3,4,5,6,7,8,9').split("");
  var specialCharacterChoices = ('!#$%&()*+,-./:;<=>?@[\]^_`{|}').split("");
  var password = [];//equals an array
  var possibleCharacters = [];
  var choices = [];

  if (options.specialCharacter){
    possibleCharacters = possibleCharacters.concat(specialCharacterChoices);
    choices.push(randomletters(specialCharacterChoices));
  }

  if (options.lowerCase){
    possibleCharacters = possibleCharacters.concat(lowerAlphabetChoices);
    choices.push(randomletters(lowerAlphabetChoices));
  }

  if (options.upperCase){
    possibleCharacters = possibleCharacters.concat(upperAlphabetChoices);
    choices.push(randomletters(upperAlphabetChoices));
  }

  if (options.number){
    possibleCharacters = possibleCharacters.concat(numberChoices);
    choices.push(randomletters(numberChoices));
  }

  //all the 71 -73 need to before
  for (let i = 0; i < options.length; i++) {
    var possibleCharacter = randomletters(possibleCharacters);
    password.push(possibleCharacter);   
  }

  for (let i = 0; i < choices.length; i++) {
    password[i] = choices[i];   
  }
  
  return password.join("");

  function randomletters(array){
    var randomIndex = Math.floor(Math.random() * array.length);
    var randElement = array[randomIndex];
    return randElement    
  }
}