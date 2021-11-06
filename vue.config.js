module.exports = {
  publicPath: "/fire-watch/",
  devServer: {
    proxy: "https://storage.googleapis.com",
  },
};
