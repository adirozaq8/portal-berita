const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
  entry: {
    main: "./src/index.js",
    ekonomi: "./src/ekonomi.js",
    covid19: "./src/fokus-covid.js",
    olahraga: "./src/olahraga.js",
    teknologi: "./src/teknologi.js",
    search: "./src/search.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      chunks: ['main'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/ekonomi.html',
      inject: true,
      chunks: ['ekonomi'],
      filename: 'ekonomi.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/covid19.html',
      inject: true,
      chunks: ['covid19'],
      filename: 'covid19.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/olahraga.html',
      inject: true,
      chunks: ['olahraga'],
      filename: 'olahraga.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/teknologi.html',
      inject: true,
      chunks: ['teknologi'],
      filename: 'teknologi.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/search.html',
      inject: true,
      chunks: ['search'],
      filename: 'search.html'
    })
  ] 
}