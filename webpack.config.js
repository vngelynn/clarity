const path = require('path');

module.exports = {
    mode: 'development',
    entry:{
        main: path.resolve(__dirname, './client/index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 8080,
        static: './dist',
        hot: true,
      },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets : ['@babel/preset-env', '@babel/react']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", 'sass-loader']
            },
            { 
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
              },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
      },
};