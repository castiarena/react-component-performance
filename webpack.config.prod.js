const [clientWebpackConfig, serverWebpackConfig] = require('./webpack.config');
const CompressionPlugin = require('compression-webpack-plugin');

const configs = [
    {
        ...clientWebpackConfig,
        mode: 'production',
        plugins: [
            new CompressionPlugin(),
            new CompressionPlugin({
                filename: '[path].br[query]',
                algorithm: 'brotliCompress',
                compressionOptions: {
                    level: 11,
                }
            })
        ],
    },
    {
        ...serverWebpackConfig,
        mode: 'production',
    },
];

module.exports = configs;