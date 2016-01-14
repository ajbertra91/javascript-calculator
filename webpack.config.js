module.exports = {
  context: __dirname + "/app"
  ,entry: './index'
  ,output: {
    path: __dirname + "/app"
    ,filename: "bundle.js"
  }
  ,devtool: 'eval-source-map'
  ,module: {
    loaders: [
      { 
        test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
        ,query: { presets: ['es2015'] }
      }
      ,{ test: /\.styl$/, exclude: /node_modules/, loader: "style!css!stylus"}
      ,{ test: /\.png$/, exclude: /node_modules/, loader: "url"}
      ,{ test: /\.gif$/, exclude: /node_modules/, loader: "url"}
    ]
    ,resolve: {
      extensions: ['.js']
    }
  }
  ,watch: true
};