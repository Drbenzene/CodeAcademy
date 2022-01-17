const input = 'turpentine and turtles'
const vowels = ['a', 'e', 'i', 'o', 'u'];
// console.log(vowels);
const resultArray = [];
for (let i = 0; i < input.length; i++) {
  for (let vowel = 0; vowel < vowels.length; vowel++) {
    if(input[i] === vowels[vowel] ) {
      if (input[i] === 'e') {
        double = 
        resultArray.push('ee'); 
      }else if (input[i] === 'u') {
        resultArray.push('uu');
      }else {
        resultArray.push(input[i]);
      }
      }
    }
  }

console.log(resultArray.join('').toUpperCase());