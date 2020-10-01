const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const [clientWebpackConfig, serverWebpackConfig] = require('./webpack.config');

const configs = [
    {
        ...clientWebpackConfig,
        mode: 'production',
        plugins: [
            ...clientWebpackConfig.plugins,
            new CompressionPlugin(),
            new CompressionPlugin({
                filename: '[path].br[query]',
                algorithm: 'brotliCompress',
                compressionOptions: {
                    level: 11,
                },
            }),
        ],
    },
    {
        ...serverWebpackConfig,
        mode: 'production',
        plugins: [
            new webpack.IgnorePlugin({
                resourceRegExp: /Development/,
            }),
        ],
    },
];

module.exports = configs;