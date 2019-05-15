const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
	  	app: './src/index.js'
	},
  	devtool: 'inline-source-map',
  	plugins: [
	  	new CleanWebPackPlugin(),
	  	new HtmlWebpackPlugin({
	  		template: './src/index.html',
	  		filename: './index.html'
	  	})
  	],
  	output: {
	    filename: '[name].bundle.js',
	    path: path.resolve(__dirname, 'dist')
  	},
  	devServer: {
  		contentBase: './dist'
  	},
  	module: {
	    rules: [
		    {
		        test: /\.(js|jsx)$/,
		        exclude: /node_modules/,
		        use: {
		          loader: 'babel-loader'
		        }
		    },
		    {
		    	test: /\.js$/,
		    	exclude: /node_modules/,
		    	use: ['babel-loader', 'eslint-loader']
		    }
	    ]
	}
};