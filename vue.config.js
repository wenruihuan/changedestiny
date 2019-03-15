const path = require('path');
const merge = require('webpack-merge'); // 用于做相应的合并处理
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // 基本路径
    publicPath: '/',
    // 输出文件目录
    outputDir: resolve('./dist'),
    assetsDir: 'static',
    css: {
        extract: {
            filename: 'static/css/[name].[contenthash].css',
            chunkFilename: 'static/css/[name].[contenthash].css',
            allChunks: true
        },
        sourceMap: false
    },
    productionSourceMap: true,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@images', resolve('src/assets/images'))
            .set('@components', resolve('src/components'));

        config
            .output
            .filename('static/js/[name].[hash].js')
            .chunkFilename('static/js/[id].[hash].js');

        //内联文件的大小限制为8k
        config.module
            .rule('images')
            .use('url-loader')
            .tap(options => merge(options, {limit: 8192}));
    },

    //插件配置
    configureWebpack: config => {
        let plugins = [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false, //当删除没有用处的代码时，不显示警告
                        drop_debugger: true, //删除所有的 `debugger`
                        drop_console: true, //删除所有的 `console` 语句
                        sequences: true, //连续声明变量，用逗号隔开来。
                        booleans: true, //优化布尔运算
                        loops: true, //当do、while 、 for循环的判断条件可以确定是，对其进行优化。
                        unused: true, //干掉没有被引用的函数和变量。（除非设置"keep_assign"，否则变量的简单直接赋值也不算被引用。）
                        collapse_vars: true, //当 var 和 const 单独使用时尽量合并, 内嵌定义了但是只用到一次的变量
                    },
                    output: {
                        beautify: false,
                        comments: false,
                        preamble: "/* uglified */"
                    },
                    mangle: true, //混淆，最紧凑的输出
                },
                sourceMap: false,
                parallel: true,
            }),
        ];
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.plugins = [...config.plugins, ...plugins]
        } else {
            // 为开发环境修改配置...
        }
    },
    //代理相关配置
    devServer: {
        // host: '0.0.0.0',
        open: true,
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: null, // string | Object
    },
};