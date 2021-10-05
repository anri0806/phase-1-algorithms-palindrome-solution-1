function reverseWord(word) {
  const reversed = word.split('').reverse().join('')
  return reversed
}

function isPalindrome(word) {
  // Write your algorithm here
  const reverse = reverseWord(word)

  return word === reverse
}

/* 
  Add your pseudocode here
  variable assigned with split, reverse, and join the word

  if statement to check if word is same as above variable
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
