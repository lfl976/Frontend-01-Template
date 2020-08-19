module.exports = {
  entry: "./src/main.js",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              ["@babel/plugin-transform-react-jsx", { pragma: "createElement" }],
            ],
          },
        },
      },
    ],
  },
  plugins: [new (require('html-webpack-plugin'))],
  mode: "development",
  "devServer": {
    "open": true,
    "compress": false,
    "contentBase": "./src"
  }
};
