let newWord = ''; // this variable collects the desired output

const sortByStrings = function(s, t) {
  let sortAs = s.split('');
  let sortBy = t.split('');
  // loop through each word and compare them
  for (let i = 0; i < sortBy.length; i += 1) {
    // store a letter in variable
    const letter = sortBy[i];
    // second loop will check for each letter
    for (let i =0; i <= sortAs.length; i += 1) {
      // store a letter in a variable
      const letter2 = sortAs[i];
      // compare each letter
      if (letter === letter2) {
        // concatenate new word as letters show up
        newWord += letter2;
      }
    }
  }
};

sortByStrings('weather', 'therapyw');
console.log(newWord);

export default sortByStrings;
