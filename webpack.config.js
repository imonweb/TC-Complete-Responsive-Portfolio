const path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const glob = require('glob');
const PurgeFontawesomePlugin = require('purge-fontawesome/webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: "source-map",
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './docs'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()]
  },
  devServer: {
    before: function(src,server){
      server._watch('./src/*.html')
    },
    contentBase: path.join(__dirname,'src'),
    hot: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"]
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource'
      },  
    ]
  }, 
  plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
          filename: './index.html',
          template: './src/index.html'
        }),
          new CopyPlugin({
          patterns: [
            { from: "src/images/", to: "images" },
            // { from: "other", to: "public" },
    ], }),
          new PurgeFontawesomePlugin({
            paths: [
                glob.sync(path.join(__dirname, 'src/**/*'),  { nodir: true }),
            ],
        }) 
    ],

}
 

