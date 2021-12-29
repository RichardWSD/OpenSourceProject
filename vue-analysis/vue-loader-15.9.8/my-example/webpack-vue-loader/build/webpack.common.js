const {join:pathJoin} = require('path');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const VueLoaderPlugin = require('../../../lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        app:'./src/index.js'
    },
    output:{
        filename:'[name].[hash].js',
        path:pathJoin(__dirname,'../dist')
    },
    optimization:{ // +++
      splitChunks:{ // +++
          chunks:'all' // +++ initial(初始块)、async(按需加载块)、all(全部块)
      }
    },
    resolveLoader: {
      alias: {
        'vue-loader': require.resolve('../../../lib')
      }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html'
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ]
}