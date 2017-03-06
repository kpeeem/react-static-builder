const {resolve} = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ReactStaticPlugin = require('react-static-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
//const OfflinePlugin = require('offline-plugin');

const isDev = process.env.NODE_ENV !== 'production';
console.log('isDev?', isDev);

const getEntry = () => {
    const hotloader = [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:31337',
        'webpack/hot/only-dev-server',
        './index.js'
    ];

    return {
        app: isDev ? hotloader : ['./index.js'],
        // about: ["pages/About"],
        // blog:  ["pages/Blog"],
        // main:  ["pages/Main"],
        // where: ["pages/Where"],
        // work:  ["pages/Work"],
    }
};
const getDevServer = () => {

    if (isDev) {
        return {
            hot: true,
            // enable HMR on the server
            host: '0.0.0.0',
            port: 31337,
            contentBase: resolve(__dirname, 'dist'),
            // match the output path
            publicPath: '/',
            // match the output `publicPath`
            //fallback to root for other urls
            historyApiFallback: true
        }
    }
    return {}
};
const getPlugins = () => {
    plugin = [];
    if (isDev) {
        plugin.push(
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        )
    } else {
        plugin.push(
            new ReactStaticPlugin({
                template: './template.js',    // Path to JSX template file,
                routes: './routes.js',  // Path to routes file

            }),
            new webpack.optimize.UglifyJsPlugin({
                comments: false,
                sourceMap: true,
                compress: {
                    screw_ie8: true,
                    warnings: false,
                },
            }),
            new CopyWebpackPlugin([
                {from: 'assets/img/favicons'},
            ])
        )
    }
    plugin.unshift(
        new CleanWebpackPlugin(['dist'], {
            root: resolve(__dirname),
            verbose: true,
            dry: false,
            exclude: ['index.html']
        }),
        new webpack.DefinePlugin({
            'NODE_ENV': isDev ? JSON.stringify('development') : JSON.stringify('production'),
            isDev: isDev,
        }),
        new ExtractTextPlugin({
            filename: 'style.css',
            disable: isDev,
            allChunks: true,
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            options: {
                postcss: [autoprefixer({browsers: ['last 2 versions']})],
                stylus: {
                    use: [],
                },
            },
            context: 'src',
            output: {
                path: 'dist'
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "app",
            filename: 'app.js',
            // children: true,
            minChunks: 2
        }),
        //new OfflinePlugin(),
    );
    return plugin
};
module.exports = {
    entry: getEntry(),
    output: {
        filename: "[name].js",
        chunkFilename: "[id].js",
        // the output bundle
        path: resolve(__dirname, 'dist'),
        // libraryTarget: 'umd',
        publicPath: '/',
    },

    context: resolve(__dirname, 'src'),

    devtool: 'inline-source-map',
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js', '.styl', '.css']
    },
    devServer: getDevServer(),

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
                                context: 'src',
                                localIdentName: '[name]_[folder]_[local]__[hash:base64:5]',
                            },
                        },
                        {loader: 'postcss-loader'},
                        {loader: 'resolve-url-loader'},
                        {loader: 'stylus-loader'},

                    ],
                }),
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {loader: 'css-loader'},
                        {loader: 'resolve-url-loader'},
                        {loader: 'postcss-loader'},

                    ],
                }),
            },
            // {
            //     test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {limit: 10000, mimetype: 'mimetype=application/font-woff'},
            //         },
            //     ],
            // },
            // {
            //     test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     use: 'file-loader',
            // },
            // {
            //     test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     use: "base64-font-loader"
            // },

            // {
            //     test: /\.(png|woff|woff2|eot|ttf|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     loader: 'url-loader'
            // },
            {
                test: /\.(jpg|jpeg|gif|ico|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/images/[name].[ext]'
                        }
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/fonts/[name].[ext]'
                        }
                    },
                ],
            },
            {
                test: /\.(docx|doc|pdf|pages)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/docs/[name].[ext]'
                        }
                    },
                ],
            }

        ],
    },

    plugins: getPlugins(),
};