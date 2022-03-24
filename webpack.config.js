const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/index.ts",
    target: ["web", "es5"],
    devtool: "source-map", // Generate map files
    plugins: [
        new HtmlWebpackPlugin({ // Generate an index.html file in build directory from the one in src directory
            filename: "index.html",
            template: "./src/index.html",
        }),
    ],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Delete old files before creating new ones
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
}
