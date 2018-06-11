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
      }
      //console.log(char);
    }
  }
};

decodeString('4[ab]');

export default decodeString;
