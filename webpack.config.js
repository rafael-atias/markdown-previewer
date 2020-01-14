const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    mode: "development",
    module: {
        rules: [{
            use: "babel-loader",
            test: /\.(js|jsx)$/,
            exclude: /node_modules/
        }]
    }
};