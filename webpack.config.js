//@ts-check

/** @typedef {import('webpack').Configuration} WebpackConfig **/
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const configs = [
    {
        mode: 'development',
        entry: {
            app: [
                './app/client.tsx'
            ]
        },
        output: {
            path: __dirname + '/dist/public',
            filename: '[name].js',
            chunkFilename: '[name].bundle.js',
            publicPath: '/public',
        },
        // Currently we need to add '.ts' to the resolve.extensions array.
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        
        // Source maps support ('inline-source-map' also works)
        devtool: 'source-map',
    
        // Add the loader for .ts files.
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                },
            ],
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
            }
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new BundleAnalyzerPlugin(),
            new webpack.EnvironmentPlugin(process.env)
        ],
    },
    {
        mode: 'development',
        entry: {
            server: './app/index.ts',
        },
        output: {
            path: __dirname + '/dist',
            filename: '[name].js',
        },
        // Currently we need to add '.ts' to the resolve.extensions array.
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        
        // Source maps support ('inline-source-map' also works)
        devtool: 'source-map',
        
        // Add the loader for .ts files.
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                },
            ],
        },
        target: 'node',
        externals: [nodeExternals()],
    },
];

module.exports = configs;