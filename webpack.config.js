const path = require('path');
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: {
    index: './src/index.js',
    DicierBlockDarkIcon: './src/components/DicierBlockDarkIcon/index.js',
    DicierBlockHeavyIcon: './src/components/DicierBlockHeavyIcon/index.js',
    DicierBlockLightIcon: './src/components/DicierBlockLightIcon/index.js',
    DicierRoundDarkIcon: './src/components/DicierRoundDarkIcon/index.js',
    DicierRoundHeavyIcon: './src/components/DicierRoundHeavyIcon/index.js',
    DicierRoundLightIcon: './src/components/DicierRoundLightIcon/index.js',
    DicierFlatDarkIcon: './src/components/DicierFlatDarkIcon/index.js',
    DicierFlatHeavyIcon: './src/components/DicierFlatHeavyIcon/index.js',
    DicierFlatLightIcon: './src/components/DicierFlatLightIcon/index.js',
    DicierPixelIcon: './src/components/DicierPixelIcon/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs'
  },
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, './src')
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
}