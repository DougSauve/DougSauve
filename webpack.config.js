module.exports = {
  mode: 'development',
  entry: __dirname + `/src/main.js`,
  output: {
    path: __dirname + `/public`,
    filename: `bundle.js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: __dirname + '/node_modules',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              ['transform-class-properties', { 'spec': true }]
            ]
          }
        }
      }, {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  // devtool: `source-map`,
  // devServer: {
  //   contentBase: __dirname + '/public',
  //   port: 4201,
  // }
};
