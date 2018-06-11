// variable to make an encoded_string
let tempString = '';

// create a function that take one parameter
const decodeString = function(s) {

  // loop through the string
  for(let i = 0; i < s.length; i += 1) {

    // assign character to a variable
    let char = s[i];

    // eliminate brackets
    if (char !== '[' && char !== ']') {

      // separate first k times
      if ( !isNaN(char) ) {
        console.log (i,char);
      } else if ( char.match(/^[A-Za-z]+$/) ) {
        tempString += char;
        console.log(i,tempString);
      }
    }
  }
};

decodeString('4[ab]');

export default decodeString;
