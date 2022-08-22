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

- Launch app with `http-server`
- Compile everything with `npx webpack`

## Run typescript without compiling to JS

- Install `npm i @digitak/esrun -g`
- RUN `esrun ./src/app.ts `

```
$ esrun ./src/app.ts
-------------------------------
{
  id: 1,
  full_name: 'full_name',
  email: 'email',
  phone_number: 'phone_number',
  address: 'address',
  job: 'job',
  company: 'company',
  card_type: 'card_type',
  account_number: 'account_number'
}
```

### Reference

- https://dev.to/silvenleaf/simplest-way-to-compile-all-typescript-into-one-single-js-file-19bj (HTML / Typescript / Webpack)
- https://webpack.js.org/configuration/ (webpack.config.js configuration)
