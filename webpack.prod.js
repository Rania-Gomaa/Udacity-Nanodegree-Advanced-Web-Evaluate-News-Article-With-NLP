const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    
    mode: 'production',

    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },

    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
       
        rules: [
            
            {   // allow usage of any js version
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            
            {   //optimize and minify the style files for the sake of performance
                test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            },
            
            {   //used to view the background img
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            }
        ]
    },
    plugins: [
        
        new CleanWebpackPlugin(),
        
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        
        new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
        
        new WorkboxPlugin.GenerateSW()

    ]
}