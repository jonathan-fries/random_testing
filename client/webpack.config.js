const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devServer: {
        inline:true,
        contentBase: ['./public'],
        port: 23532,
        historyApiFallback: true
    },
    mode: 'development',
    entry: ['@babel/polyfill', './src/client.js'],
    output: {
        path: __dirname + '/public',
        filename: 'index.js'
    },
    module: {
        rules: [
            {test:/\.js$/,
                exclude:/node_modules/,
                use: {loader: 'babel-loader'}
            },
            {test:/\.(css)$/, use: [{loader: MiniCssExtractPlugin.loader}, "css-loader" ]},
            {test:/\.(scss|sass)$/, use: [{loader: MiniCssExtractPlugin.loader}, "css-loader", "sass-loader" ]}

        ]
    },
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "app.css"})
    ]
};
