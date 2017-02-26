const {resolve} = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const DEV_PORT = process.env.DEV_PORT || 3000;
const DEV_HOST = 'http://localhost:' + DEV_PORT + '/';
const HMR_HOST = DEV_HOST + '__webpack_hmr';

module.exports = {
    entry: {
        app: [
            'react-hot-loader/patch',
            // activate HMR for React
            'webpack-dev-server/client?http://localhost:3000',
            // bundle the client for webpack-dev-server
            // and connect to the provided endpoint
            'webpack/hot/only-dev-server',
            // bundle the client for hot reloading
            // only- means to only hot reload for successful updates
            './index.js'
            // the entry point of our app
        ],
    },
    output: {
        filename: '[name].js',
        // the output bundle
        path: resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        publicPath: '/'
        // necessary for HMR to know where to load the hot update chunks
    },

    context: resolve(__dirname, 'src'),

    devtool: 'inline-source-map',
    resolve: {
          extensions: ['.css', '.scss', '.js', '.jsx' ]
    },
    devServer: {
        hot: true,
        // enable HMR on the server
        host: 'localhost',
        port: 3000,
        contentBase: resolve(__dirname, 'dist'),
        // match the output path
        publicPath: '/',
        // match the output `publicPath`
        //fallback to root for other urls
        historyApiFallback: true,
        // inline: true
    },

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
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            module: true,
                            importLoaders: 2,
                            localIdentName: '[name]__[local]__[hash:base64:5]',
                        },
                    },
                    { loader: 'postcss-loader' },
                    {
                        loader: 'stylus-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            importLoaders: 2,
                            localIdentName: '[local]-[hash:base64:5]',
                        },
                    },
                    {loader: 'postcss-loader'}
                ],
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {limit: 10000, mimetype: 'mimetype=application/font-woff'},
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
                    {loader: 'file-loader', options: {name: '[name].[ext]'}},
                ],
            }

        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            options: {
                postcss: [autoprefixer({browsers: ['last 2 versions']})],
                stylus: {
                    use: [],
                },
            },
        }),
        
    ],
};