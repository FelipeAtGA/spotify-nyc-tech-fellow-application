let newWord = ''; // this variable collects the desired output

const sortByStrings = function(s, t) {
  let sortAs = s.split(''),
      sortBy = t.split(''),
      letterSortAS,
      letterSortBy;

  // loop through each word and compare them
  for (let i = 0; i < sortBy.length; i += 1) {
    // store a letter in variable
    letterSortBy = sortBy[i];
    // second loop will check for each letter
    for (let i =0; i <= sortAs.length; i += 1) {
      // store a letter in a variable
      letterSortAS = sortAs[i];
      // compare each letter
      if (letterSortBy === letterSortAS) {
        // concatenate new word as letters show up
        newWord += letterSortAS;
      }
    }
  }
};

sortByStrings('weather', 'therapyw');
console.log(newWord);

export default sortByStrings;
