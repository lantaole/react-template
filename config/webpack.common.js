const path = require("path");
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin");

const handler = (percentage, message, ...args) => {
  // e.g. Output each progress message directly to the console:
  // console.info(percentage, message, ...args);
  console.log(`${(percentage * 100).toFixed()}% ${message}`);
};



module.exports = {
  target: 'web',
  entry: {
    main: path.resolve(__dirname, "../src/index.tsx"),
  },


  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'),
        use: [
          // "thread-loader",
          {
            loader: "babel-loader",
            options: {
              // cacheDirectory: true,
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              plugins: [
                [
                  "@babel/plugin-transform-runtime",
                  {
                    regenerator: true,
                  },
                ],
                // "@babel/plugin-syntax-dynamic-import"
              ],
            },
          },
        ]
      },
      // 解析图片 ，字体
      {
        test: /\.(svg|png|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: 'static/[hash][ext][query]'
        },
        // 只解析src目录
        include: path.resolve(__dirname, "../src"),
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    // modules: [path.resolve(__dirname, '../node_modules')],
    // symlinks: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React Build",
      template: "public/index.html",
      favicon: 'public/favicon.ico'
    }),
    new webpack.ProgressPlugin(handler)
  ],


};
