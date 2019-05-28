const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
	  	app: ['./src/index.js', './src/less/main.less']
	},
	output: {
	    filename: '[name].bundle.js',
	    path: path.resolve(__dirname, 'dist')
  	},
  	devtool: 'inline-source-map',
  	plugins: [
	  	new CleanWebPackPlugin(),
	  	new HtmlWebpackPlugin({
	  		template: './src/index.html',
	  		filename: './index.html'
	  	})
  	],
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
		    },
		    {
		        test: /\.less$/,
		        use: [
		        	{
						loader: 'file-loader',
						options: {
							name: 'assets/[name].css',
						}
					},
		        	{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},
					{
						loader: 'postcss-loader'
					},
		        	{
		        		loader: 'less-loader', // compiles Less to CSS
		        	}
		        ]
		    }
	    ]
	}
};