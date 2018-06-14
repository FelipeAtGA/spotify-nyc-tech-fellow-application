// functions computes the number of ways to make the
// amount of money with coins of the available denominations
const changePossibilities = function(amount, arr) {
  let result = 0, // holds final result
      value  = 0, // coin denomination
      index  = 0; // index of array

  // iterates through array of coins
  for( let i=0; i < arr.length; i += 1 ) {
    // iterates through all possible values under the amount
    while ( value <= amount ) {
      console.log(value);
    }
    value += 1;
  }
}

changePossibilities(4, [1,2,3]);

export default changePossibilities;
