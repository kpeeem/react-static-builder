const {resolve} = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ReactStaticPlugin = require('react-static-webpack-plugin');
//const OfflinePlugin = require('offline-plugin');

const isDev = process.env.NODE_ENV !== 'production';
console.log('isDev?', isDev);

const getEntry = () => {
    let entry = [];

    if(isDev){
        entry.push('react-hot-loader/patch',
                   'webpack-dev-server/client?http://localhost:31337',
                   'webpack/hot/only-dev-server');
            // only- means to only hot reload for successful updates
    }
    entry.push('./index.js');
    // the entry point of our app
    return entry
};
const getDevServer = () => {

    if(isDev){
        return {
            hot: true,
                // enable HMR on the server
            host: 'localhost',
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
                routes: './index.js',  // Path to routes file

            })
        );
    }
    plugin.unshift(
        new webpack.DefinePlugin({
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
        }),
        //new OfflinePlugin(),
        //new StaticSiteGeneratorPlugin('bundle.js', data.routes, data),
    );
    return plugin
};
module.exports = {
    entry: getEntry(),
    output: {
       filename: 'bundle.js',
        // the output bundle
        path: resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        publicPath: '/',
    },

    context: resolve(__dirname, 'src'),

    devtool: 'inline-source-map',
    // resolve: {
    //       extensions: ['.css', '.scss', '.js', '.jsx' ]
    // },
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

    plugins: getPlugins(),
};