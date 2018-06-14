const tempArr = []; // array of posible denominations
let tempValue = 0;  // stores temp calculations

// functions computes the number of ways to make the
// amount of money with coins of the available denominations
const changePossibilities = function(amount, arr) {
  let result = 0, // holds final result
      value  = 0, // coin denomination
      index  = 0; // index of array

  // iterates through array of coins
  for( let i=0; i < arr.length; i += 1 ) {
    // iterates through all possible coin values
    // under the amount
    while ( value <= amount ) {
      // performs a linear calculation for each value
      if( value >= arr[index]) {
        // finds the value of that index
        // and adds previous result and new result
        tempValue = value - arr[index];
        tempArr[value] += tempArr[tempValue];
      }
      value += 1;
    }
  }
}

changePossibilities(4, [1,2,3]);

export default changePossibilities;
