/*

# Module 5 Challenge: Password Generator

## Overview

This week’s challenge requires you to create an application that an employee can use to generate a random password based on criteria they’ve selected by modifying starter code. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of Password Special Characters from the OWASP Foundation](https://www.owasp.org/index.php/Password_special_characters).

## Instructions

The following image shows the web application's appearance and functionality:

![password generator demo](./assets/05-javascript-challenge-demo.png)


* Generate a password when the button is clicked
  * Present a series of prompts for password criteria
    * Length of password
      * At least 10 characters but no more than 64.
    * Character types
      * Lowercase
      * Uppercase
      * Numeric
      * Special characters ($@%&*, etc)
  * Code should validate for each input and at least one character type should be selected
  * Once prompts are answered then the password should be generated and displayed in an alert or written to the page

## Grading Requirements

This challenge is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * The challenge should not produce any errors in the console when you inspect it using Chrome DevTools.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality README file with description, screenshot, and link to deployed application.


## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

---

*/

/*

Psuedocode 
--- 

- when the generate password button is clicked the event listener executes 
writePassword() function - this function invokes generatePassword function to a variable password - becomming the anonymous function that 
returns a string of the password. 

- the generatePassword function: should first invoke the getPasswordOptions function which returns an object users options - once this function has completed execution the generatePassword function should 
get access to this password options object and generate a string to return.

  - we can assign getPasswordOptions to a variable "optSelected" - this variable becomes an anonymous function where we are able to access the objects properties using dot notation from within generatePassword function.

  - once the "optObj" object is accessible:  assigned to a variable "optSelected",  we need to conditionally accept each users choice that involves: lowercase, numbers, specials and uppercase object properties and invoke the getRandom(arr) function and return each result to an array variable "generatedPassArr". These conditionals will need to wrapped inside of a loop. 

  - in order to only return a length of a password the user has inputed, we will use "passwordLength" variable as the length of  a loop - either a for loop or while loop, we can invoke the getRandom(arr) function to return a char from the array being passed to it. At each iteration of the loop the getRandom(arr) function will return a single character which is pushed to an array variable "generatedPassArr".  

   - we need to shuffle up the array "generatedPassArr" using a sorting method and return a single string of characters to the function itself. 


- the getPasswordOptions function: should do validation on all the users password options choices including: length of the password, upper/lower case, whether the user chose numbers and special chars. 

   - this function should prompt the user to specify the password length between 0 - 128 and return it to a variable named "passwordLength" converted to a Number using Number.parseInt(). We need to check whether the user has entered a number between 0 - 128 - the default is 8 or whether the user has clicked on cancel button which returns NaN, to check this we can use Number.isNaN() method. If the user has clicked on cancel then alert message should be thrown to advise the user to enter a password length. 

   - this function should use window.confirm() method to request the user to confirm the following options: if the user wants lowercase, uppercase, numbers and special characters in the generated password. These options should be stored within an options object within the function. 


- getRandom(arr) function: this function is responsible for randomising and returning a single character from the array passed to it as an argument. Each invocation to this function will return - if the user has confirmed via prompts in the getPasswordOptions function: a single uppercase char, a lowercase char, a numeric char and a special char. 

*/

// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength = Number.parseInt(
    window.prompt(
      "Please enter a length of the password between 0 - 128 minimum length is 8",
      8
    )
  );

  // lets check if the user has confirmed a number for password length, if not we should invoke the window.prompt() method again.

  if (
    passwordLength > 128 ||
    passwordLength < 8 ||
    Number.isNaN(passwordLength)
  ) {
    alert("Please enter a number between 0 - 128");
    passwordLength = Number.parseInt(
      window.prompt(
        "Please enter a length of the password between 0 - 128 minimum length is 8",
        8
      )
    );
  }

  const uppercase = window.confirm(
    "Do you want your generated password to contain uppercase letters ?"
  );

  const lowercase = window.confirm(
    "Do you want your generated password to contain lowercase letters ?"
  );

  const numbers = window.confirm(
    "Do you want your generated password to contain numbers ?"
  );

  const specialCharacters = window.confirm(
    "Do you want your generated password to contain special characters ?"
  );

  console.log(passwordLength);
  console.log(uppercase);
  console.log(lowercase);
  console.log(numbers);
  console.log(specialCharacters);

  // lets assign all the users choices to a options object

  const optObj = {
    lowercase: lowercase,
    numbers: numbers,
    passwordLength: passwordLength,
    specials: specialCharacters,
    uppercase: uppercase,
  };

  console.log(optObj);

  return optObj;
}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {
  // lets get access to the users options

  const optSelected = getPasswordOptions();

  // lets create an empty array to store all the characters returned from the loop

  let generatedPassArr = [];

  // now that we have the passwordLength we should use this property as the length of a loop

  // first need to pass this object property to a variable

  const passwordLength = optSelected.passwordLength;

  console.log(passwordLength);

  let counter = 0;

  do {
    counter++;
    console.log("counting " + counter);

    generatedPassArr.push(counter);
  } while (counter < passwordLength);

  console.log(generatedPassArr);
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
