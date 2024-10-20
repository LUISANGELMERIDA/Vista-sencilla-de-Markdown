const resolve = require("path");
/**@type {import("webpack").configuration} */
module.exports ={
    entry:"./src/index.js",
    output: {
        path:path.resolve(__dirname, "dist"),
        name: "[name].[contenthash].js",
        publicPath: ""
    },
    mode: "production",
    modules:{
        rules:[
          {
            use:"babel-loader",
            test:/.(js jsx)$/,
            exclude:/node_modules/
          }
        ]
    }

}