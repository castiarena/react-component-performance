const CompressionPlugin = require('compression-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const [clientWebpackConfig, serverWebpackConfig] = require('./webpack.config');

const configs = [
    {
        ...clientWebpackConfig,
        mode: 'production',
        plugins: [
            new LoadablePlugin({
                writeToDisk: true,
            }),
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
    },
];

module.exports = configs;