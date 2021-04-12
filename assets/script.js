// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var length = "";
  length = prompt("Select password length. Enter a number between 8-128");
  
  if (length > 8 && length < 128) {
    inputs();
  } else {
    writePassword()
  }
  console.log(length)
  //inputs();
  // return length;

  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;
};

function inputs() {
  var lowercase = confirm("Do you want lower case letters?"); 
  var uppercase = confirm("Do you want upper case letters?");
  var numeric = confirm("Do you want numeric values?");
  var special = confirm("Do you want special characters?");
  
  console.log(lowercase)
  if (uppercase && lowercase && numeric && special != null) {
    console.log(uppercase)
    console.log(lowercase)
    console.log(numeric)
    console.log(special)
  }

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
