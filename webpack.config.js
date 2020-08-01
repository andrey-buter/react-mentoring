const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, 'src')
	mode: "development",
	entry: {
		main: "./index.js",
		nextBundle: "./next-script.js",
	},
	output: {
		// https://webpack.js.org/configuration/output/#outputdevtoolmodulefilenametemplate
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "./index.html",
		}),
		new CleanWebpackPlugin(),
	],
};