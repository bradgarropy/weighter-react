const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


const config = merge(common, {
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
    ],
});


module.exports = config;
