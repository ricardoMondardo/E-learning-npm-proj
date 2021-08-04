const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, './src/entry.js'),
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'e-learning.bundle.js',
      },    
  };