const path=require('path')
const htmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports={
    entry:{
        main:path.join(__dirname,'./src/main.js')
    },
    output:{
        path:path.join(__dirname,'./dist/js'),
        filename: 'bundle.js',
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html',
        }),
        new VueLoaderPlugin(),
    ],
    module:{
        rules:[
            //配置css Loader less Loader
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            //配置img
            {test:/\.(jpg|jpeg|png|gif|bmp)$/,use:'url-loader?limit=7631&name=[hash:8]-[name].[ext]'},
            //配置字体
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            //配置babel
            {test:/\.js$/,use:'babel-loader',exclude:'/node_modules/'},
            //配置.vue
            {test:/\.vue$/,use:'vue-loader'},
        ],
    },
    resolve:{
        alias:{
            //设置import时vue的加载路径
            'vue$':'vue/dist/vue.js',
        },
    },
}