const config = {
  entry: {
    main: "./src/main.jsx",
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
    html: [
      {
        template: "./index.html",
      },
    ],
  },
};
module.exports = config;
