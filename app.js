/*defined function*/
console.log("app started");
var letters = [
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
  "z"
];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var pwLen = prompt("What is your password length?");
var isSymbols = confirm("Would you like to use a symbol?");
var isNumbers = confirm("Would you like to use a number?");

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
/* defined function to create password */
function createPassword() {
  var pw = [];
  if (pwLen > 10) {
    pwLen = prompt("Your password has too many characters");
    createPassword();
  }
  for (i = 0; i < pwLen; i++) {
    if (isSymbols === true && i === 0) {
      var randomSymNo = Math.floor(Math.random() * symbols.length);
      /* inject a symbol into the string*/
      pw.push(symbols[randomSymNo]);
    } else if (isNumbers === true && i === 1) {
      console.log("in numbers");
      /*inject a letter into the string*/
      var randomNo = Math.floor(Math.random() * numbers.length);
      pw.push(numbers[randomNo]);
    } else {
      console.log("in letters");

      var randomLet = Math.floor(Math.random() * letters.length);
      pw.push(letters[randomLet]);
    }
  }
  /*randomize array*/
  pwShuffle = shuffle(pw);
  pwBox.innerHTML = pwShuffle.toString();
}
/* defined function to copy password*/
function copyPassword() {
  /*get the password field*/
  var copyPass = document.getElementById("pwBox");
  /*select the password field*/
  copyPass.select();
  copyPass.setSelectionRange(0, 9999); /*for mobile devices*/

  /*Copy the password inside the password field*/
  document.execCommand("copy");
  /*alert the copied text*/
  alert("Copied the password: " + copyPass.value);
}
/* first event */
/* change this pw into a dynamic random pw */
/* document.write(pw */
