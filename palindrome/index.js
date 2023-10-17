// palindrome("abcba") => true
// palindrome("abcd") => false

// function palindrome(str){
//     const reversed = str.split('').reverse().join('')

//     return reversed === str
// }

function palindrome(str) {
  return str.split("").every((char, index) => {
    return char === str[str.length - index - 1];
  });
}

module.exports = palindrome;
