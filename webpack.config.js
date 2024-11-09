const path = require('path');

module.exports = {
  entry: './src/index.jsx', // Entry file, adjust according to your project structure
  output: {
    filename: 'bundle.js', // Output file
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx$/, // Look for .jsx files
        use: {
          loader: 'babel-loader', // Use babel-loader to process the JSX files
          options: {
            presets: ['@babel/preset-react'], // Add preset-react for JSX transformation
          },
        },
        exclude: /node_modules/, // Ignore node_modules
      },
      {
        test: /\.js$/, // For normal .js files
        exclude: /node_modules/,
        use: 'babel-loader', // Use Babel for .js files too (if needed)
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve both .js and .jsx extensions
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
