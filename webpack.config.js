const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
    entry: ["babel-polyfill","./src/Index.js"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index.bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader', options: { presets: ['react'] }
                },
                exclude: [/node_modules/, path.resolve(__dirname, 'node_modules')]
            },
            {
                test: /\.s[ac]ss$/,
                exclude: [/node_modules/, path.resolve(__dirname, 'node_modules')],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1, minimize: true } },
                        { loader: 'postcss-loader' },
                        { loader: 'sass-loader' }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        disableHostCheck: true,
        host: '0.0.0.0',
        port: 8888,
        historyApiFallback: true,
        publicPath: '/',
        // hot: true, 
    },
    node: {
        fs: 'empty'
    }
};

module.exports = config;
