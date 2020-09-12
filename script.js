// Assignment Code
var alphabetchoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialcharacter = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
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
function generatePassword(){
  var passwordlength = prompt("How many characters do you want in your password?");
    if (passwordlength >= "8" || passwordlength <= "128"){}
    else{
      alert("You password must be between 8 and 128 characters");
      return
    }
    var lowerCase = confirm("Do you want lowercase characters in your password?");
    var upperCase = confirm("Do you want uppercase character in your password?");
    var specialcharacter = confirm("Do you want special characters in your password?");

    if (lowerCase === true && upperCase === true && specialcharacter === true){
      for (let i = 0; i < passwordlength.length; i++) {

        
        let password = alphabetchoices[math.floor(math.random()* loweralphatbet.length)];
        let password =+ alphabetchoices.toUpperCase()[math.floor(math.random)*alphabetchoices.length];
        let password =+ specialcharacter[math.floor(math.random()*specialcharacter.length)]
        return (password)
      }
    }
  }









