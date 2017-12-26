const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    library: "simple-custom-errors",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
      include: __dirname
    }]
  },
  watchOptions: {
    aggregateTimeout: 300, // Delay the rebuilt after the first change. Value is a time in ms.
    poll: 1000
  }
};
