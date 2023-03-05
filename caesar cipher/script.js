function caesarCipher(str, num) {
  num = num % 26;
  let lString = str.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let newStr = "";
  for (let i = 0; i < lString.length; i++) {
    let currLetter = lString[i];
    if (currLetter === " ") {
      newStr += currLetter;
      continue;
    }
    let currIndex = alphabet.indexOf(currLetter);
    let newIndex = currIndex + num;
    if (newIndex > 25) newIndex -= 26;
    if (newIndex < 0) newIndex += 26;
    if (str[i] === str[i].toUpperCase())
      newStr += alphabet[newIndex].toUpperCase();
    else newStr += alphabet[newIndex];
  }
  return newStr;
}
console.log(caesarCipher("hello", 3)); // khoor
console.log(caesarCipher("ravi", 200)); // jsna
