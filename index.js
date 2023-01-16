function reverseString(word) {
  // convert string to array
  const wordArr = word.split("");
  // reverse the array values
  const reverseWordArr = wordArr.reverse();
  // reverse the array to a string
  const reverseWord = reverseWordArr.join("");
  // return the reversed string
  return reverseWord;
}

function isPalindrome(word) {
  // reverse the string
  const reverseWord = reverseString(word);
  // if the reversed string is the same as the input
  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  */
'Convert the string to an Array, Reverse array values, Reverse the array to a string, return the reversed string,if the reversed string is the same as the input string, return true else return false'
/*
  Add written explanation of your solution here
*/
'I am required to write a function that takes a string as an argument. I therefore will declare another function that takes in the string as an argument. This function is to convert the string into an array, reverse the array values and create a string from the reversed values. \
If the reversed string is equal to our input string then my isPalindrome function should return true else it should return false'
// You can run `node index.js` to view these console log
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");
 
  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

}

module.exports = isPalindrome;
