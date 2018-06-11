// create a function that take one parameter
const decodeString = function(s) {

  // loop through the string
  for(let i = 0; i < s.length; i += 1) {

    // assign character to a variable
    let letter = s[i];

    // eliminate brackets
    if (letter !== '[' && letter !== ']') {
      console.log(letter);
    }
  }
};

decodeString('4[ab]');

export default decodeString;
