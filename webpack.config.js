const path = require('path');

module.exports = {
    mode: "development", // development, production
    devtool: "hidden-source-map", // hidden-source-map, inline-source-map
    entry: {
        main: "./src/app.ts",
    },
    output: {
        path: path.resolve(__dirname, './assets/build'),
        filename: "app.js" // <--- Will be compiled to this single file
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    }
};