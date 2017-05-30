// In webpack.config.js
let HtmlWebpackPlugin = require('html-webpack-plugin');
let HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

let FaviconsWebpackPlugin = require('favicons-webpack-plugin');

let path = require('path');
let webpack = require('webpack');

let env = process.env.NODE_ENV || 'development';

let entry = env != 'development' ? './src/index.js' : [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ];

module.exports = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    root: [path.resolve('./src')]
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.sass$/,loaders: ['style', 'css', 'sass'] }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new FaviconsWebpackPlugin(__dirname + '/src/assets/images/logo.png'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true
  }
};
