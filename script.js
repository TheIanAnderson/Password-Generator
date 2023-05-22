var lowercaseLetters = [
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
var uppercaseLetters = [
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
var specialCharacters = ["!", "@", "#", "$", "%", ")", "(", "."];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var char =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_";

function generatePassword() {
  var passwordOptions = createPasswordOptions();
  return passwordOptions;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function createPasswordOptions() {
  var passwordLength = prompt(
    "How long would you like the length of your password to be? (Must be 8 - 128 characters"
  );
  localStorage.setItem("password length", passwordLength);

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please try again, password must be 8 - 128");
  } else if (confirm("Click OK to confirm uppercase letters."));
  confirm("Click OK to confirm lowercase characters.");
  confirm("Click OK to confirm special characters.");
  confirm("Click OK to confirm numeric characters.");

  var subsetSize = passwordLength;
  const subset = [];
  while (subset.length <= subsetSize) {
    const randomIndex = Math.floor(
      Math.random() *
        specialCharacters.length *
        uppercaseLetters.length *
        lowercaseLetters.length *
        numbers.length
    );
    const randomValue = char[randomIndex];
    if (!subset.includes(randomValue)) {
      subset.push(randomValue);
    }
  }

  return subset.toString().replace(/,/g, "");
}

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);
