const main = (params) => {
    console.log("Number of words that are palindromes in the array:", 
        countPalindromes(makeWordsArray(10000)));
};
/*Hi, there! I was not able to finish in time, however I decided to try 
and send a solution anyway, as I am not one to give up :)
*/
var makeRandomWord = (maxLength) => {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    let word = "";
    let i = 0;
    for (i = 0; i < maxLength; i++) {
        word += chars.charAt(Math.floor(Math.random() * chars.length));
      }
    return word;
};
  
var makeWordsArray = (wordCount) => {
    let array = [];
    let wordLength = 3;
    while (array.length < wordCount) {
        array.push(makeRandomWord(wordLength));
        if (wordLength < 5) { 
            wordLength++; 
        } else {
            wordLength = 3;
        }
    }
    return array;
};

var isPalindrome = (word) => {
    let length = word.length;
    if (length < 2) return true;
    if (word[0] === word[length - 1]) return isPalindrome(word.slice(1, length - 1));
    return false;
};

var countPalindromes = (array) => {
    let count = 0;
    array.forEach((word => {
        if (isPalindrome(word)) count++;
    }));
    return count;
};

main();