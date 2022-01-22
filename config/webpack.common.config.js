const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
    const rootFolder = process.cwd();
    return {
        entry: path.join(rootFolder, 'src/index.js'),
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin,
            new MiniCssExtractPlugin,
        ],
    }
}
