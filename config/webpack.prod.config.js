const path = require("path");
const TerserWebpackPlugin = require("terser-webpack-plugin");
module.exports = () => {
    const rootFolder = process.cwd();
    return {
        mode: 'production',
        output: {
            path: path.join(rootFolder, 'dist'),
            filename: 'js/[name].[contenthash:8].js',
        },
        devtool: 'cheap-module-source-map',
        optimization: {
            minimize: true,
            minimizer: [new TerserWebpackPlugin({
                extractComments: false,
                terserOptions: {
                    compress: {
                        pure_funcs: ["console.log"]
                    }
                }
            })],
        },
    }
}
