# Notes

- https://github.com/fadilxcoder/typescript/tree/master (Udemy branch)

---

- Install typescript

```
npm i typescript 
```

- Init the tsconfig and configure it

```
tsc --init
```
- tsconfig.json

```
{
    "outDir": "./dist",
    "rootDir": "./src", 
}
```

- Configure Webpack
- RUN : `npm i -D webpack webpack-cli typescript ts-loader`
- NOTE : **("npm i -D X" is the shorthand for "npm install --save-dev X")**
- Configure `webpack.config.js` according to project

```js
const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/app.ts",
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "app-bundle.js" // <--- Will be compiled to this single file
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
```

- Compile everything with `npx webpack`


### Reference

- https://dev.to/silvenleaf/simplest-way-to-compile-all-typescript-into-one-single-js-file-19bj (HTML / Typescript / Webpack)
