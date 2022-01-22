const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
    const rootFolder = process.cwd();
    return {
        mode: "production",
        entry: path.join(rootFolder, 'src/index.js'),
        output: {
            path: path.join(rootFolder, 'dist'),
            filename: '[name].js',
        },
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
        devServer: {
            port: 12000,
            compress: true,
            open: true,
        }
    }
}
