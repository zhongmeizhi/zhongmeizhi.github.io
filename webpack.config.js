const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve('')
    },
	devServer: { 
		host: '127.0.0.1', 
		port:8888 
	},
}