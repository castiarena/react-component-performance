const path = require('path');
const webpack = require('webpack');
const LoadablePlugin = require('@loadable/webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const clientPlugins = [
    new LoadablePlugin({
        writeToDisk: true,
    }),
    new CopyPlugin({
        patterns: [
            {
                from: path.resolve(__dirname, 'app/assets/'),
                to: path.resolve(__dirname, 'dist/assets/'),
            },
        ],
    }),
    new webpack.EnvironmentPlugin(process.env),
];

module.exports = [
    clientPlugins,
];
