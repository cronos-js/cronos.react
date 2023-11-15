const config = {
  entry: {
    main: "./src/main.jsx",
  },
  devServer: {
    historyApiFallback: true,
    allowedHosts: "all",
    host: "localhost",
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg)$/,
        type: "asset/resource",
      },
    ],
  },
  builtins: {
    HtmlRspackPluginOptions: [
      {
        template: "./index.html",
        favicon: "./public/logo.png",
        minify: true,
      },
    ],
  },
};

module.exports = config;
