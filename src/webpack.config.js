const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins


/**@type {import("webpack").Configuration} */
module.exports ={
    mode: "production",
    entry:"./src/index.js",
    output: {
        path:path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        publicPath: ""
    },   
    
    module:{
        rules:[
          {
            use:"babel-loader",
            test: /\.txt$/, use: 'raw-loader' ,
            exclude:/node_modules/
          },
          
        ],
    },
    resolve: {
        extensions: [".js",".jsx",".json"]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:"./public/index.html",
        }),
    ],

};


