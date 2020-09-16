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
function generatePassword() {
  var passwordlengthask = parseInt(prompt("How many characters do you want in your password?"));
  //does not work if you enter 0
  if (passwordlengthask >= 8 || passwordlengthask <= 128) {
    console.log(passwordlengthask);
    console.log(typeof (passwordlengthask));
  }
  else {
    alert("You password must be between 8 and 128 characters");
    return;
  }
  var number = confirm("Do you want numbers in your password?");
  var lowerCase = confirm("Do you want lowercase characters in your password?");
  var upperCase = confirm("Do you want uppercase character in your password?");
  var specialcharacter = confirm("Do you want special characters in your password?");



  //log in console to confirm we are getting the correct result
  console.log(number);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(specialcharacter);
  console.log(passwordlengthask);


  var Loweralphabetchoices = ('abcdefghijklmnopqrstuvwxyz').split("");
  var Upperalphabetchoices = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split("");
  var numberchoices = ('0,1,2,3,4,5,6,7,8,9');
  var specialcharacterchoices = ('!#$%&()*+,-./:;<=>?@[\]^_`{|}').split("");
  //var password = "";
  var choices = "";

  // if no prompts are selected, returns alert
  if (number === false && lowerCase === false && upperCase === false && specialcharacter === false) {
    alert("Can not provide password - Must select at least one type of character!");
    return;
  }
  // depending on answers picked create a string with all possible characters
  else if (!number && !lowerCase && !upperCase && !specialcharacter) {
    choices = numberchoices.concat(Loweralphabetchoices, Upperalphabetchoices, specialcharacterchoices);
  }

  // three possible answers

  else if (!number && !lowerCase && !upperCase){
    choices = numberchoices.concat(Loweralphabetchoices, Upperalphabetchoices);
  }

  else if (number && lowerCase && specialcharacterchoices) {
    choices = numberchoices.concat(Loweralphabetchoices, specialcharacterchoices);
  }

  else if(number && upperCase && specialcharacterchoices){
    choices = numberchoices.concat(Upperalphabetchoices, specialcharacterchoices);
  }

  else if(lowerCase && upperCase && specialcharacterchoices){
    choices = Loweralphabetchoices.concat(Upperalphabetchoices, specialcharacterchoices);
  }

  // two possible answers

  else if(number && lowerCase){
    choices = numberchoices.concat(Loweralphabetchoices);
  }

  else if(number && upperCase){
    choices = numberchoices.concat(Upperalphabetchoices);
  }

  else if(number && specialcharacter){
    choices = numberchoices.concat(specialcharacterchoices);
  }

  else if(lowerCase && upperCase){
    choices = Loweralphabetchoices.concat(Upperalphabetchoices);
  }

  else if(lowerCase && specialcharacter){
    choices = Loweralphabetchoices.concat(specialcharacterchoices);
  }

  else if(upperCase && specialcharacter){
    choices = Upperalphabetchoices.concat(specialcharacterchoices);
  }

  // if one possible answer

  else if(number){
    choices = numberchoices;
  }

  else if(lowerCase){
    choices = Loweralphabetchoices;
  }

  else if(upperCase){
    choices = Upperalphabetchoices;
  }

  else if(specialcharacterchoices){
    choices = specialcharacterchoices;
  }

  console.log(choices)

  //building the password

for (let i = 0; i < passwordlengthask; i++) {
  var password = choices[Math.floor(Math.random() * choices.lenght)];
  return password
}

//convert to a string

//var stringpassword = password.join("");
//return stringpassword;

}