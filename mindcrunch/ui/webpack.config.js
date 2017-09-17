const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'js/bundle.js'
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
      { from: 'src/templates/app.html.eex', to: 'templates/app.html.eex' },
    ])
  ]
}
