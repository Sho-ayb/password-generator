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

- the generatePassword function: should first invoke the getPasswordOptions function which returns an object of arrays of users options - once this function has completed execution the generatePassword function should 
get access to this password options object and generate a string to return.

  - we can pass getPasswordOptions function as an argument to this function and assign the argument to a variable named optObj - this variable becomes an anonymous function where we are able to access the objects properties using dot notation.

  - once we can get access to the optObj properties we need to generate an array of these chars in to single array by joining each array together and then shuffle the entire array using a sorting method.

  - finally we should take this shuffled array and return it as a single string of characters to the function itself. 


- the getPasswordOptions function: should do validation on all the users password options choices including: length of the password, upper/lower case, whether the user chose numbers and special chars. 

  - if the user has chosen a certain length of password then the array 
  should only allow for the specific number of chars in password. 

  - if the user has chosen upper and lower case chars then this function should invoke the getRandom(arr) function passing in either lowercasedCharacters array or the uppercasedCharacters array or both if the user has chosen to have lowercase and uppercase chars. 
  
  - if the user has chosen number then this function should invoke the getRandom(arr) function passing in numericCharacters array and if the user has chosen special chars then pass in specialCharacters array. 

Once all prompts have been completed and user choices confirmed, this function should store these options and the randomised number of chars for each chosen option as properties of an options object. 

In order to ascertain the length of the password, this function will prompt the user to input an integer number between 0 - 128 - we will need to use parseInt to convert the string returned from the prompt to an number.

  - this function should validate if the user has inputted a correct number for password length.

  - in order to only return a length of a password the user has inputed, we will pass the validated number to a variable and then using this number as the length of  a loop - either for loop or while loop we can invoke the getRandom(arr) function to return a char from the array being passed to it. At each iteration of the loop the randomised function will return a single char we need to push to an array stored as a property of an options object. 

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
function getPasswordOptions() {}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {}

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
