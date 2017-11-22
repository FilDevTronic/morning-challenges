// Palindrome
//
// Write a method that will take a word as a string and
// return a boolean indicating whether or not the word
// is a palindrome.


const palindrome = (string) => {
    reversedString = string.split("").reverse().join("");
    return string === reversedString;
}

console.log(palindrome('racecar'))
