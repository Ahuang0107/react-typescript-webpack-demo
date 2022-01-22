const common = require("./webpack.common.config");
const development = require("./webpack.dev.config");
const production = require("./webpack.prod.config");
const {merge} = require("webpack-merge");

module.exports = () => {
    const isProd = process.env.NODE_ENV === 'production';
    return merge(
        common(isProd),
        isProd ? production() : development()
    )
}
