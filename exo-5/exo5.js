const input = prompt("Message à traduire en baleine.").toLowerCase();

const vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  let findVowel = vowels.indexOf(input[i]);

  if (findVowel != -1) {
    let vowel = vowels[findVowel].toUpperCase();
    resultArray.push(vowel);
  }
}
console.log(resultArray.join(""));
