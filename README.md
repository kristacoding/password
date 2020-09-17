# Generate Password
 
# Overview 
    Using different if statements, objects, and functions, I created a webpage that will generate a password for the user based on the set criteria that it is given. The user is able to build a password between 8 and 128 characters with the option of using lowercase alphabet characters, uppercase alphabet characters, numbers, and special characters. 
 
# Description 
    Page URL: https://kristacoding.github.io/password-generator/
    Picture of Page: https://1drv.ms/u/s!AiHjcdKLh6idgwRYFlR80e0t7Ss7?e=l4XCdz
 
    To build a password, the page allows the user to click the 'generate password' button that leads the users through multiple prompts to determine what they would like numbers, lowercase characters, uppercase characters, or special characters in their password. These prompts are built using confirm and prompt tools from javascript. The password character count prompt is converted to a 'number' so that it can be used throughout the code to limit the length of the password. If no prompts are selected, an if/else statement is used to return an alert.  All the prompts are listed in the console log to be used as a reference to confirm that the page is reading all the selected options. 
 
    Next, an object "passwordOptions" is created to house the user's request from the prompts. This object allows me to refer to the user's request in other functions throughout the code, such as the next function 'generatePassword'. This function starts with listing all the possible characters (numbers, lowercase characters, uppercase characters, or special characters) in separate corresponding arrays. Additionally, I added three empty arrays that will be filled with different elements to create the password. 
 
    The if-statements are added to confirm that the specific array was selected into the password created. To select a random character from the array, I created another function called 'randomLetters' that produces a random character. This function is used in the 'generatePassword' function in two ways: one, is to select a random character from each of the specific arrays, and the second is to take the group of random allowed characters or numbers to create a random password with the correct length. To produce the correct password length requested by the user, I added a for-loop that will pass through only the requested amount of times using the length attribute from the object, 'passwordOptions'.  The last for-loop is created to join all the choices and produce a password with the requested lengths, numbers, lowercase characters, uppercase characters, or special characters. Then all the possibles arrays are joined to create the password that is returned. 


