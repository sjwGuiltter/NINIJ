const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//清除dist目录
const ExtractTextPlugin = require("extract-text-webpack-plugin");//抽出css
module.exports = {
    mode: "production",
    entry: {
        main: "./src/main.js"
    },
    output: {
        path: path.resolve(__dirname, 'index'),
        filename: '[name][hash:6].js'
    },

    module: {
        rules: [
            {
                test: /.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/, use: 'babel-loader'
            },
            {
                test: /.css$/,
                //css的处理方式不同，有嵌入在页面style标签里的，有从外部文件引入的，我们这里用use来声明
                use: ExtractTextPlugin.extract({//接受潜在页面内部的style标签的文件。
                    fallback: "style-loader",
                    use: ["css-loader"]
                })
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: '',
            filename: '../index/index.html',
            template: "./index.html",
            inject: true//true或body插入到底部
        }),
        //抽出css文件
        new ExtractTextPlugin({
            filename: (getPath) => {
                return getPath('css/[name]-style.css').replace('css/js', 'css');
            },
            allChunks: true
        }),

    ],
    devServer: {//开发服务器
        hot: true,//热更新
        inline: true,//
        open: true,//是否自动打开默认浏览器
        contentBase: './index',//发布目录
        port: '3000'
    }
};