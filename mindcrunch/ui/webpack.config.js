const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'js/mindcrunch_bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/,
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/index.html', to: 'index.html' },
    ])
  ]
}
