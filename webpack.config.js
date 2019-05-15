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
		    	enforce: "pre",
		    	test: /\.(js|jsx)$/,
		    	exclude: /node_modules/,
		    	use: {
		          loader: 'eslint-loader'
		        }
		    },
		    {
		        test: /\.(js|jsx)$/,
		        exclude: /node_modules/,
		        use: {
		          loader: 'babel-loader'
		        }
		    }
	    ]
	}
};