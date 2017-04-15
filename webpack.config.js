var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/src/client/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {

    entry: __dirname + '/src/client/app/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/src/client/public'
    },
    plugins: [HTMLWebpackPluginConfig]
};