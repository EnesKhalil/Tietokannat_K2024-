const ps = require('prompt-sync');
const prompt = ps();

var insertedWord = prompt("Enter a word: ");
var reversed = insertedWord.split("").reverse().join("");

if(reversed === insertedWord){
    console.log("'" + insertedWord + "' is palindrome.");
}
else{
    console.log("'" + insertedWord + "' is NOT palindrome.");
}