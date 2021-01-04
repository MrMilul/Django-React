var path = require('path');
module.exports = {
        entry: "./frontend/src/index.js",
        output:{
            path: path.resolve(__dirname, "frontend/static/frontend"),
            filename: "main.js",
            publicPath: "frontend/static/frontend"
        },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            }
        ]
    }
}