const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

// define multiple HTML outputs
// source: https://stackoverflow.com/a/63385300/4096078

let htmlPageNames = ['index', 'test/index', 'another-test/index', 'example1', 'example2'];
// let htmlPageNames = ['index', 'example1', 'example2'];

let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: path.resolve(__dirname, `../src/${name}.html`),
    filename: `${name}.html`, // output HTML files
    chunks: ['main', `${name}`], // grabs JS file from the `entry`. 
    minify: true
  })
});


module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/script.js'),      
        "test/index": path.resolve(__dirname, '../src/test/script.js'), 
        "another-test": path.resolve(__dirname, '../src/another-test/the-code.js'), 
        example1: path.resolve(__dirname, '../src/example1.js'), 
        example2: path.resolve(__dirname, '../src/example2.js'),

    },
    output:
    {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'source-map',
    plugins:
    [
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, '../static') }
            ]
        }),
        new MiniCSSExtractPlugin()
    ].concat(multipleHtmlPlugins), // add the HtmlWebpackPlugin plugin objects
    module:
    {
        rules:
        [
            // HTML
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },

            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                [
                    'babel-loader'
                ]
            },

            // CSS
            {
                test: /\.css$/,
                use:
                [
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ]
            },

            // Images
            {
                test: /\.(jpg|png|gif|svg)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/images/'
                        }
                    }
                ]
            },

            // Fonts
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/fonts/'
                        }
                    }
                ]
            }
        ]
    }
}
