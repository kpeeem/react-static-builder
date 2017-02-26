const {resolve} = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
        './index.js'
        // the entry point of our app
    ],
    output: {
        filename: 'bundle.js',
        // the output bundle

        path: resolve(__dirname, 'dist'),

        publicPath: '/'
        // necessary for HMR to know where to load the hot update chunks
    },

    context: resolve(__dirname, 'src'),

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                importLoaders: 2,
                                localIdentName: '[local]-[hash:base64:5]',
                            },
                        },
                        { loader: 'postcss-loader' },
                        { loader: 'stylus-loader' },
                    ],
                }),
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                importLoaders: 2,
                                localIdentName: '[local]-[hash:base64:5]',
                            },
                        },
                        { loader: 'postcss-loader' }
                    ],
                }),
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 10000, mimetype: 'mimetype=application/font-woff' },
                    },
                ],
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'file-loader',
            },
            {
                test: /\.(png|jpg|gif|ico)$/,
                use: [
                    { loader: 'file-loader', options: { name: '[name].[ext]' } },
                ],
            }
        ],
    },

    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css',
            disable: false,
            allChunks: true,
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            options: {
                postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
                stylus: {
                    use: [],
                },
            },
        }),
    ],
};