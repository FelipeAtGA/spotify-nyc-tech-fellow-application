// variable to make an encoded_string
let charactersContainer = [],
    tempString = '';

// make encode string into an array
const decodeString = function(s) {
  // use regular expression match statement
  charactersContainer = s.match(/[a-zA-Z]+|[0-9]/g);
  console.log(charactersContainer);
};

const createEncodedString = function(arr) {
  // some initial variables and values
  let index   = arr.length -1; // keeps track of the index in charactersContainer
  let letter  = arr[index];    // keeps track of letters only
  let times   = arr[index -1]; // keeps track of k numbers
  let oddEven = arr.length;    // to decide what tipe of algo
}

decodeString('4[ab]');

// add the made encoded_string to array
// charHolder.push(tempString);
// createEncodedString(charHolder);

export default decodeString;
