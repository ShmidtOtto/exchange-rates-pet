const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: path.resolve('src/index.tsx'),
    module: {
        rules: [
            {
                test: /\.(jpg|png|svg|gif|woff|woff2|eot|ttf)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/[path][name].[ext]',
                },
            },
            // {
            //     type: 'assets/resource',
            //     use: 'assets/resource',
            //     test: /\.(jpg|png|svg|gif|woff|woff2|eot|ttf)$/
            // },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            ident: 'postcss',
                            plugins: [tailwindcss, autoprefixer]
                        }
                    }
                }],
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: path.resolve('src/public/manifest.json'), to: path.resolve('dist') },
                { from: path.resolve('src/public/robots.txt'), to: path.resolve('dist') },
            ],
        }),
        new HtmlPlugin({
            title: 'exchange-rates-pet',
            template: path.resolve('src/public/index.html'),
            filename: 'index.html'
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            "@components": path.resolve('src/components'),
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    output: {
        filename: '[name].js'
    },
    devServer: {
        port: 3030,
    },
}