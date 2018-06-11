// variable to make an encoded_string
let tempString = '';
const charHolder = [];

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

        // pupulate array
        charHolder.push(char);
        // console.log (i,char);
      } else if ( char.match(/^[A-Za-z]+$/) ) {
        tempString += char;
        // console.log(i,tempString);
      }
    }
  }
};

const createEncodedString = function(arr) {

  // loop over the array
  for (let i = 0; i < arr[0]; i+= 1) {
    console.log(i, arr[1]);
  }
}

decodeString('4[ab]');

// add the made encoded_string to array
charHolder.push(tempString);
createEncodedString(charHolder);

export default decodeString;
