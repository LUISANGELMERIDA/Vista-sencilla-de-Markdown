const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins


/**@type {import("webpack").Configuration} */
module.exports ={
    mode: "production",
    entry:"./src/index.js",
    output: {        
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),        
        publicPath: ""
    },   
    
    module:{
        rules:[
          {
            
            test: /\.m?js$/, use: 'raw-loader' ,
            exclude:/node_modules/,
            use:"babel-loader",
            options:{
                presets: ["@babel/preset-env","@babel/preset-react"]
            }
          }
          
        ]
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


