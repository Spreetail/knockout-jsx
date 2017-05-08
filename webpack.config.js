module.exports = {
    devtool: 'source-map',
    entry: './app.module.js',
    output: {
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.js$/],
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: ['babel-loader','nativejsx-loader']
            }
        ]
    }
};
