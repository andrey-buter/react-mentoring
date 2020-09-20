const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TersetWebpackPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

module.exports = {
	context: path.resolve(__dirname, "src"),
	mode: "development",
	entry: {
		main: ["@babel/polyfill", "./index.tsx"],
		// nextBundle: "./next-script.ts",
		// test: "./babel.js",
	},
	output: {
		// https://webpack.js.org/configuration/output/#outputdevtoolmodulefilenametemplate
		filename: isDev ? "[name].js" : "[name].[hash].js",
		path: path.resolve(__dirname, "dist"),
	},
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
		alias: {
			"@Models": path.resolve(__dirname, "src/models"),
			"@Components": path.resolve(__dirname, "src/Components"),
			"@StyledComponents": path.resolve(__dirname, "src/StyledComponents"),
			"@Services": path.resolve(__dirname, "src/Services"),
			"@Data": path.resolve(__dirname, "src/Assets/data"),
			"@Context": path.resolve(__dirname, "src/Context"),
			"@": path.resolve(__dirname, "src"),
		},
	},
	optimization: {
		splitChunks: {
			chunks: "all",
		},
		minimizer: isDev ? [] : [new OptimizeCssAssetsWebpackPlugin(), new TersetWebpackPlugin()],
	},
	devServer: {
		port: 4200,
		hot: isDev,
		contentBase: 'dist',
		compress: true,
	},
	devtool: isDev ? "source-map" : "",
	plugins: [
		new HTMLWebpackPlugin({
			template: "./index.html",
			minify: {
				collapseWhitespace: isProd,
				removeComments: isProd,
				removeRedundantAttributes: isProd,
				useShortDoctype: isProd,
			},
		}),
		new CleanWebpackPlugin(),
		// new CopyWebpackPlugin({
		// 	patterns: [
		// 		// {
		// 		// 	from: path.resolve(__dirname, 'src/favicon.icon'),
		// 		// 	to: path.resolve(__dirname, 'dist')
		// 		// }
		// 		// {
		// 		// 	from: path.resolve(__dirname, 'src/Assets/images'),
		// 		// 	to: path.resolve(__dirname, 'dist/images')
		// 		// }
		// 	]
		// }),
		new MiniCssExtractPlugin({
			filename: isDev ? "[name].css" : "[name].[contenthash].css",
		}),
		// isDev ? new BundleAnalyzerPlugin() : null,
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hrm: isDev,
							reloadAll: true,
						},
					},
					"css-loader",
				],
			},
			{
				test: /\.s[ac]ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hrm: isDev,
							reloadAll: true,
						},
					},
					"css-loader",
					"sass-loader",
				],
			},
			// {
			// 	test: /\.(png|jpg|jpeg|svg|gif)$/,
			// 	use: {
			// 		loader: "url-loader",
			// 		options: {
			// 			limit: 25000,
			// 		},
			// 	},
			// },
			// https://react-svgr.com/docs/webpack/
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: isDev ? "[path][name].[ext]" : "[path][name].[hash].[ext]",
					},
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"],
							plugins: ["@babel/plugin-proposal-class-properties"],
						},
					},
					isDev ? "eslint-loader" : null,
				],
			},
			{
				test: /\.ts$/,
				enforce: 'pre',
				loader: 'tslint-loader',
				options: {
					/* Loader options go here */
				},
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					onlyCompileBundledFiles: true,
				},
			},
			// {
			//   test: /\.tsx?$/,
			//   exclude: /node_modules/,
			//   loader: {
			//     loader: "babel-loader",
			//     options: {
			//       presets: ["@babel/preset-env", "@babel/preset-typescript"],
			//       plugins: ["@babel/plugin-proposal-class-properties"],
			//     },
			//   },
			// },
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
						plugins: ["@babel/plugin-proposal-class-properties"],
					},
				},
			},
		],
	},
};