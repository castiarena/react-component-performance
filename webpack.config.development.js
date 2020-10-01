const webpack = require('webpack');
const [clientWebpackConfig, serverWebpackConfig] = require('./webpack.config');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const configs = [
    {
        ...clientWebpackConfig,
        mode: 'production',
        plugins: [
            new webpack.IgnorePlugin({
                resourceRegExp: /^\.\/Production$/,
            }),
            new webpack.HotModuleReplacementPlugin(),
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
            }),
        ],
    },
    {
        ...serverWebpackConfig,
        mode: 'production',
    },
];

module.exports = configs;