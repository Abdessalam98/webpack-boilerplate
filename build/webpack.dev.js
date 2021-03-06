const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		compress: true,
		host: "0.0.0.0",
		port: 9000,
		open: true,
		hot: true,
		watchContentBase: true,
		inline: true,
		stats: "minimal",
		public: "http://localhost:9000"
	}
});
