const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const [clientWebpackConfig, serverWebpackConfig] = require('./webpack.config');
const [clientPlugins] = require('./webpack.config.common');

const configs = [
    {
        ...clientWebpackConfig,
        mode: 'production',
        optimization: {
            ...clientWebpackConfig.optimization,
            minimizer: [new TerserPlugin()],
        },
        plugins: [
            ...clientPlugins,
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
