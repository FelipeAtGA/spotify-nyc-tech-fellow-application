// variable to make an encoded_string
let charactersContainer = [],
    tempString = '';

// make encode string into an array
const decodeString = function(s) {
  // use regular expression match statement
  charactersContainer = s.match(/[a-zA-Z]+|[0-9]/g);
  console.log(charactersContainer);
};

// const createEncodedString = function(arr) {
//   // holds the encoded string
//   let encodedString = '';

//   // loop over the array
//   for (let i = 0; i < arr[0]; i+= 1) {
//     encodedString += arr[1];
//   }

//   console.log(encodedString);
// }

decodeString('4[ab]');

// add the made encoded_string to array
// charHolder.push(tempString);
// createEncodedString(charHolder);

export default decodeString;
