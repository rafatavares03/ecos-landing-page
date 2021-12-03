const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /\.(scss)$/i,
        use: [{
          loader: MiniCssExtractPlugin.loader
        }, {
          loader: 'css-loader'
        }, {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          }
        }, {
          loader: 'sass-loader'
        }
        ]
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images'
        }
      }
    ]
  },

  devServer: {
    static: 'dist',
    port: '9000',
  }
}