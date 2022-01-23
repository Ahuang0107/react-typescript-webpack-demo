const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (isProd) => {
    const rootFolder = process.cwd();
    return {
        entry: path.join(rootFolder, 'src/index.ts'),
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: [
                        ...cssLoader(isProd),
                        ...postcssLoader(isProd),
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        ...cssLoader(isProd),
                        ...postcssLoader(isProd),
                        'less-loader',
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        ...cssLoader(isProd),
                        ...postcssLoader(isProd),
                        'sass-loader',
                    ]
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin,
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].chunk.css',
            }),
        ],
    }
}

const cssLoader = (isProd) => [
    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
    'css-loader',
]

const postcssLoader = (isProd) => [
    {
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                plugins: [
                    isProd && 'postcss-preset-env'
                ]
            }
        }
    }
]
