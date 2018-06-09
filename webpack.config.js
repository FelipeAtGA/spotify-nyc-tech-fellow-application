const path = require ('path');

module.exports = {
  entry: ['./app/index.js'],
  output: {
    path: './build',
    filename: 'bundle.js',
  }
}
