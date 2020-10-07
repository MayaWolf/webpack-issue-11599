module.exports = {
    entry: './main.js',
    output: {path: __dirname + '/app', filename: 'main.js'},
    target: 'electron-main',
	devtool: false,
	externalsPresets: {electron: true, electronMain: true, node: true}
};