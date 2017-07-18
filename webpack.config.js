"use strict"

var path = require("path");


module.exports= {
    //entry,是告诉webpack打包的入口文件路径
    entry:[path.resolve(__dirname,"./public/main")],
    //output是输入打包好的文件
    output:{
        filename:"main.bundle.js",
        path:path.resolve(__dirname,"build")
    },
    module:{ //babel-preset-react jsx
        rules:[
            {test:/\.css$/,loader:"style-loader!css-loader",exclude:/node_modules/},
            {test:/\.js$/,loader:"babel-loader",query:{presets:["es2015","react"]},exclude:/node_modules/},
            {test:/\.jsx$/,loader:"babel-loader",query:{presets:["es2015","react"]},exclude:/node_modules/},
            {test:/\.(png|jpg|gif|jpeg|webp)$/,loader:"url-loader"},
            {test:/\.(woff|woff2|ttf|svg|eot)$/,loader:"file-loader"}
        ]
    }
}