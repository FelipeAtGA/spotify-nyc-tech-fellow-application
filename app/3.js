const tempArr = []; // array of posible denominations
let tempValue = 0;  // stores temp calculations

// functions computes the number of ways to make the
// amount of money with coins of the available denominations
const changePossibilities = function(amount, arr) {
  let result = 0, // holds final result
      value  = 0, // coin denomination
      count  = 0, // keeps track of a linear calculation
      index  = 0; // index of array

  // initialize temp array for calculations
  for( let i = 0; i <= amount; i += 1) {
    tempArr.push(0);
  }

  // iterates through array of coins
  for( let i = 0; i < arr.length; i += 1 ) {
    count += 1;
    // iterates through all possible coin values
    // under the amount
    while ( value <= amount ) {
      // decides if it is a linear collection
      if( count === arr[index] ) {
        // performs a linear calculation for each value
        if( value >= arr[index]) {
          // finds the value of that index
          // and adds previous result and new result
          tempValue = value - arr[index];
          tempArr[value] += tempArr[tempValue];
        } else {
          // add one to values of zeros
          tempArr[value] = 1;
        }
        value += 1;
      } else { // this is for not linear collections
        if( value >= arr[index] ) {
          tempValue = value - arr[index];
          tempArr[value] += tempArr[tempValue];
        }
        value += 1;
      }
    }
    index += 1;
    value = 0;
  }
  console.log('number of ways to make the amount of money with coins: ',tempArr[amount]);
}

changePossibilities(4, [1,2,3]);

export default changePossibilities;
