// webpack.config.js
const webpack = require("webpack");
const path = require("path");
const { bundler, styles } = require("@ckeditor/ckeditor5-dev-utils");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: [path.resolve(__dirname, "./src/main.ts")],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "text-editor-library.js",
    libraryTarget: "umd",
    library: "text-editor-library",
    libraryExport: "default",
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, "build")],
    }),
    new webpack.BannerPlugin({
      banner: bundler.getLicenseBanner(),
      raw: true,
    }),
  ],
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".js", ".ts"],
    mainFields: ["browser", "jsnext:main", "main"],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["raw-loader"],
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              injectType: "singletonStyleTag",
              attributes: {
                "data-cke": true,
              },
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: styles.getPostCssConfig({
                themeImporter: {
                  themePath: require.resolve("@ckeditor/ckeditor5-theme-lark"),
                },
                minify: true,
              }),
            },
          },
        ],
      },
    ],
  },
};
