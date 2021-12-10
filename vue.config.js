

module.exports = {

  lintOnSave: false,
  devServer: {
    port: 8080,
    proxy: {
      '/index': {
        target: 'http://localhost:3000',
        changeOrigin: true
      },
      '/server': {
        target: 'http://localhost:3000',
        changeOrigin: true
      },
    }
  }
};

