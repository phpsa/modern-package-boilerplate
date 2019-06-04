/*eslint-env node*/
const fs = require('fs')
const path = require('path');

module.exports = {

	resolve: {
		extensions: ['.mjs', '.js', '.jsx', '.css'],
		modules: [path.join(__dirname, '/../src'), path.join(__dirname, '/../node_modules')]
	},

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{ loader : 'style-loader' },
					{ loader : 'css-loader' },
					{
						loader : 'sass-loader',
						options: {
							sourceMap: true,
							includePaths: [
								path.join(__dirname, '/../src'),
								path.join(__dirname, '/../src/styles')
							]
						}
					}
				],
				include: path.join(__dirname, '/../src')
			},
			{
				test: /\.css$/,
				use: [
					{ loader : 'style-loader' },
					{ loader : 'css-loader' }
				]
			},
			{
				test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
				use: [
					{
						loader: 'file-loader',
						options: {
							limit: 10000,
							name: '[name].[hash:8].[ext]',
						}
					},
					{ loader: 'image-webpack-loader' }
				]
			},
			{
                test: /\.svg?$/,
                use: [
                    { loader : 'babel-loader' },
                    { loader : 'svg-react-loader' }
                ],
                include: path.join(__dirname, '/../src'),
			},
			{
				test: /\.svg?$/,
				loader: require.resolve('file-loader'),
				options: {
					limit: 10000,
					name: '[name].[hash:8].[ext]'
				},
				include: path.join(__dirname, '/../node_modules'),
			},
			{
				test: /\.(woff|woff2|eot|ttf)$/,
				loader: require.resolve('file-loader'),
				options: {
					limit: 10000,
					name: '[name].[hash:8].[ext]',
				}
			}
		]
	},

	devServer:  {

		disableHostCheck: true,
		headers: {
			'Access-Control-Allow-Origin': '*'
		},

		watchOptions: {
			poll: true
		}
	}
}
