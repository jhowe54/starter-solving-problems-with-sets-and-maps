function permutationPalindrome(word) {
  let occurancesOfChars = {};
  let tempWord = word.split("");
  tempWord.map((char) => {
    occurancesOfChars[char] = 0;
  });

  tempWord.forEach((char) => {
    occurancesOfChars[char] += 1;
  });

  if (word.length % 2 === 0) {
    for (property in occurancesOfChars) {
      if (occurancesOfChars[property] === 1) {
        return false;
      } else if (
        occurancesOfChars[property] % 2 !== 0 &&
        word.length % 2 === 0
      ) {
        return false;
      }
    }
  }

  return true;
}
