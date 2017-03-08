const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const outputDir = 'dist';

module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, outputDir),
        filename: 'js/bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        publicPath: `/${ outputDir }/`
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/styles.css')
    ]
};
