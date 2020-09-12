// Assignment Code
var alphabetchoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialcharacter = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
var loweralphatbet = alphabetchoices.tolowercase()
var upperalphatbet = alphabetchoices.touppercase()
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Generate password
function generatePassword(){
var passwordlength = prompt("How many characters do you want in your password?");
var lowerCase = confirm("Do you want lowercase characters in your password?");
var upperCase = confirm("Do you want uppercase character in your password?");
var specialcharacter = confirm("Do you want special characters in your password?");

//log in console to confirm we are getting the correct result
console.log(passworldlength);
console.log(lowerCase);
console.log(upperCase);
console.log(specialcharacter);

//confirming password lenght is between 8 and 128 characters
if (passwordlength > 8 || passwordlength < 128){}
else {
  alert("You password length is not between 8 and 128 characters")
}


//if all are password request are true 

for (let i = 0; i < passwordlength.length; index++) {
  if (lowerCase === true && upperCase === true && specialcharacter === true){
  const lowerCaseSelect = loweralphatbet[math.floor(math.random()* loweralphatbet.length)];
  const upperCaseSelect = upperalphatbet[math.floor(math.random()*upperalphatbet.length)]
  const specialcharacterSelect = specialcharacter[math.floor(math.random()*specialcharacter.length)]

  const password = lowerCaseSelect + upperCaseSelect + specialcharacterSelect
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
}