const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  }
}