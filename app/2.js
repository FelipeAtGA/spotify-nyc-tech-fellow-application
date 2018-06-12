// variable to make an encoded_string
let charactersContainer = [],
    tempString = '',
    encodedString = '';

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

  // loop through charactersContainer
  for (let i =0; i < arr.length -1; i += 1) {
    // this uses the most inner characters in
    // charactersContainer needed only once
    if(i === 0) {
      // to create the initial encoded string
      for(let i = 0; i < times; i += 1) {
        encodedString += letter;
      }
      // advance indexes in charactersContainer
      index   -= 1;
      oddEven -= 1;
      letter  = arr[index-1];
      times   = parseInt(arr[index - 2], 10);

    } else if (oddEven % 2 !== 0) {
      tempString = letter + encodedString;
      index     -= 1;
      oddEven   -= 1;
    }
  }
}

decodeString('4[b3[a]]');

// add the made encoded_string to array
// charHolder.push(tempString);
createEncodedString(charactersContainer);

export default decodeString;
