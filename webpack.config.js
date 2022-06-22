const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
            }
        ]
    },

    optimization: {},
    
    plugins: [
        new HtmlWebpack({
            title: 'Mi Webpack App',
            // filename: 'index.html'
            template: './src/index.html'
        }),

        new MiniCssExtract({
            /* filename: '[name].[fullhash].css', */
            filename: '[name].css',
            insert: "#some-element",
        }),

        new CopyPlugin({
            patterns: [
            { from: "src/assets/", to: "assets/" }
            ]
        }),
    ],
};