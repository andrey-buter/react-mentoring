const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
    nextBundle: "./src/next-script.js",
  },
  output: {
    // https://webpack.js.org/configuration/output/#outputdevtoolmodulefilenametemplate
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
	  new HTMLWebpackPlugin({
		  title: 'Test title'
	  })
  ]
};