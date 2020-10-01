const webpack = require('webpack');
const [clientWebpackConfig, serverWebpackConfig] = require('./webpack.config');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const LoadablePlugin = require('@loadable/webpack-plugin');

const configs = [
    {
        ...clientWebpackConfig,
        mode: 'production',
        plugins: [
            new webpack.IgnorePlugin({
                resourceRegExp: /^\.\/Production$/
            }),
            new webpack.HotModuleReplacementPlugin(),
            new LoadablePlugin({
                writeToDisk: true
            }),
            new BundleAnalyzerPlugin({
                openAnalyzer: false
            }),
        ],
    },
    {
        ...serverWebpackConfig,
        mode: 'production',
    },
];

module.exports = configs;