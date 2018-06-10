const sortByStrings = function(s, t) {
  let sortAs = s.split('');
  let sortBy = t.split('');
  let count = 0;

  // loop through each word and compare them
  for (let i = 0; i < sortAs.length; i += 1) {
    // store a letter in variable
    const letter = sortAs[i];

    // second loop will check for each letter
    for (let i =0; i <= sortAs.length; i += 1) {
      // store a letter in a variable
      const letter2 = sortBy[i];

      // compare each letter
      if (letter === letter2) {
        count += 1;
      }
    }
  }

  return count;
  //return (`${sortAs}, ${sortBy}`);
};

const output = sortByStrings('weather', 'therapywwt');
console.log(output);

export default sortByStrings;
