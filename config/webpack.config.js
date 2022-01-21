const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
    const rootFolder = process.cwd();
    return {
        mode: "production",
        entry: path.join(rootFolder, 'src/index.js'),
        output: {
            path: path.join(rootFolder, 'dist'),
            filename: '[name].js',
        },
        plugins: [
            new HtmlWebpackPlugin({})
        ]
    }
}
