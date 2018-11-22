module.exports = {
    entry: {
        home: './JS/main-2.0.js',
        about: './JS/about-me-2.0.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            }
        ]
    }
}