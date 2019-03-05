var path = require("path")
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    devtool: 'source-map', // 打包速度慢，但是调试方便
    entry: {
        app: "./src/main.js"
    },
    output: {
        path: path.resolve('dist'),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        // historyApiFallback: true,//不跳转
        // inline: true, //实时刷新
        compress: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['env']
                }
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({                 //添加在这里
            template: path.resolve(__dirname, '../index.html'),
            filename: 'index.html',
            inject: 'body'
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin()
    ]
};