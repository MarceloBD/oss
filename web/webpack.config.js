const path = require('path');
const webpack = require('webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');
const WebpackShellPlugin = require('webpack-shell-plugin');

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.BASE_URL_GRAPHQL': JSON.stringify(process.env.BASE_URL_GRAPHQL),
    'process.env.DOMAIN': JSON.stringify(process.env.DOMAIN),
    'process.env.AUTH_URL': JSON.stringify(process.env.AUTH_URL),
    'process.env.PORTAL_URL': JSON.stringify(process.env.PORTAL_URL),
    'process.env.STORE_URL': JSON.stringify(process.env.STORE_URL),
  }),
  new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /pt-br/),
];
if (process.env.NODE_ENV.toUpperCase() !== 'PRODUCTION') {
  plugins.push(new WebpackShellPlugin({ onBuildExit: ['yarn update'] }));
}

if (process.env.NODE_ENV.toUpperCase() === 'TEST') {
  plugins.push(new BundleAnalyzerPlugin.BundleAnalyzerPlugin());
}

if (process.env.NODE_ENV.toUpperCase() === 'PRODUCTION') {
  plugins.push(new MinifyPlugin());
}

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/',
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        // exclude: [/node_modules/],
      },
      {
        test: /\.svg$/,
        loaders: ['svg-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loaders: ['file-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loaders: ['file-loader'],
      },
    ],
  },
  plugins,
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    historyApiFallback: true,
    inline: true,
    hot: true,
  },
  node: {
    fs: 'empty',
    child_process: 'empty',
  },
};

module.exports = config;
