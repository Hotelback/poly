const isPalindrome = (word) => {
    const reversedWord = word.split('').reverse().join('');
    return word.toLowerCase() === reversedWord.toLowerCase();
  };
  
  const word = 'level';
  const isPalindromic = isPalindrome(word);
  console.log(`Слово "${word}" является палиндромом: ${isPalindromic}`);
  