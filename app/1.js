const sortByStrings = function(s, t) {
  let sortAs = s.split('');
  let sortBy = t.split('');
  return (`${sortAs}, ${sortBy}`);
};

const output = sortByStrings('weather', 'car');
console.log(output);

export default sortByStrings;
