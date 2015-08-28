var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	entry: [
			'./src/app' // input file
	],
	output: {
		path: __dirname,
		filename: 'script.js', // output file
	},
	resolve: {
		modulesDirectories: ['node_modules', 'bower_components']
	},
	module: {
		loaders: [
		{
			test: /\.jsx?$/,
			loaders: ['babel']
		},
		{
			test:  /\.css$/,
			loader: "style-loader!css-loader"
		}
		]
	},
	plugins: [
		new BrowserSyncPlugin({
			files: "script.js",
			proxy: "http://localhost/QvAJAXZfc/opendoc.htm?document=NewDoc.qvw"
		})
	]
}