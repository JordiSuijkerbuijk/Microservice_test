const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const prod = process.env.NODE_ENV === "production";

const config = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            require.resolve('@babel/preset-react')
                        ],
                        plugins: [
                            [require.resolve('@babel/plugin-transform-react-jsx'), {pragma: 'h', pragmaFrag: 'Fragment'}]
                        ]
                    }
                }
            },
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    `css-loader?sourceMap=${!prod}`,
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: !prod
                        }
                    }
                ]
            },
            {
                test: /global\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    `css-loader?url=false&sourceMap=${!prod}`,
                    `sass-loader?sourceMap=${!prod}`
                ]
            },
            {
                test: /\.scss$/,
                exclude: /global\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: !prod,
                            modules: {
                                localIdentName: !prod ? '[local]___[hash:base64:5]' : '[hash:base64:5]'
                            }
                        }
                    },
                    `sass-loader?sourceMap=${!prod}`
                ]
            }
        ]
    },
    optimization: {
        minimize: prod,
        minimizer: [
            `...`,
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        "default",
                        {
                            discardComments: { removeAll: true }
                        }
                    ]
                }
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[fullhash:6].css'
        }),
        new WebpackManifestPlugin({
            fileName: 'rev-manifest.json'
        })
    ]
};

module.exports = config;