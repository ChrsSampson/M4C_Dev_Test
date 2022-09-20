const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

const config = {
  entry: './src/dev-test.js',
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        fix: true,
        configFile: './.eslintrc.js'
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './assets/index.html',
      inject: false
    }),
    new CopyWebpackPlugin([{
      from: 'assets',
      to: 'assets',
      ignore: ['index.html']
    }]),
    new CleanWebpackPlugin({ root: path.join(__dirname, 'dist') }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[hash].css',
    }),
  ],
  devServer: {
    writeToDisk: true,
    port: 8080
  },
  output: {
    filename: "[name].[chunkhash].js",
    libraryTarget: 'var',
    library: 'M4C',
  },
  resolve: {
    modules: [__dirname + '/node_modules', ]
  }
};

module.exports = ({
  mode
}) => {
  config.mode = mode;
  config.devtool = mode === 'development' ? 'source-map' : 'none';
  config.module.rules.push({
    test: /\.s(c|a)ss$/,
    use: [
      mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          // Prefer `dart-sass`
          implementation: require('sass'),
        },
      },
    ],
  });
  return config;
};
