const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader', //adiciona na DOM a tag <style>
                'css-loader' // interpreta os @import, url(), etc...
            ]
        }]
    }
}