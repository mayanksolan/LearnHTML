const path = require("path");
const HtmlWebpackPlugin =require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    'regenerator-runtime/runtime',
    "./src/index.js"
  ],
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test:/\.(mjs|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ['sass-loader']
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        use: [
        {
        loader: 'url-loader',
        options: {
        limit: 100000,
        publicPath: '/public/assets/',
        name: '[name].[ext]'
        }
        }
        ]
        },
    ]
  },
  
  plugins:[
    new HtmlWebpackPlugin({
      template:"./src/index.html",
      filename:"./index.html"
    })
  ]
  
};