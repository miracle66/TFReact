

const path = require('path')
const root = __dirname
// 引入html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractTextPlugin = new ExtractTextPlugin({
    filename: 'index-[hash].css',
    // disable: process.env.NODE_ENV === 'development'
});

module.exports = {
  // 入口文件
//   entry: path.resolve(root, './src/index.js'),
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index.js'
  ],
  // 出口文件
  output: {
    // filename: 'bundle.js',
    path: __dirname+'/dist',
    filename: 'index-[hash].js'
  },

  devServer: {
    contentBase: __dirname+'/dist',
    port: 9992,
    host: 'localhost',
    historyApiFallback: true,
    inline: true
   },
  // loaders
  module: {
    rules: [
      // {test: /\.js?$/, use: ['babel-loader'], exclude: /node_modules/},
      { test: /\.js?$/, 
        // exclude: /node_modules/,
        use: {
          // loader: 'babel-loader',
          loader: 'babel-loader?presets[]=es2015&presets[]=react',
          options: {
              'presets': [
                  'react',
                  'stage-2'
              ],
              'plugins': [
                ['import', { libraryName: 'antd', style: true }]
            ]
          }
      }},
      {
        test: /\.css$/,
        use: extractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
        })
     },
     {
      test: /\.less$/,
      use: extractTextPlugin.extract({
          use: [{
              loader: 'css-loader'
          }, {
              loader: 'less-loader',
              options: {
                  'modifyVars':{ '@primary-color': '@blue-6' }
              }
          }],
          // use style-loader in development
          fallback: 'style-loader'
      })
  },
     {
      test: /\.(png)|(jpg)|(jpeg)$/,
      use:{
          loader: 'url-loader?limit=20000&name=images/[name]-[hash:8].[ext]'
      }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Demo',
      filename:'index.html',
      template: path.join(__dirname+'/src', 'index.html'),
      inject:'body'
    }),
    new ExtractTextPlugin("styles.css"),
    // new webpack.BannerPlugin('版权所有，翻版必究'),
    extractTextPlugin
  ]
}