const path = require("path");
module.exports = () => {
    const rootFolder = process.cwd();
    return {
        mode: 'production',
        output: {
            path: path.join(rootFolder, 'dist'),
            filename: 'js/[name].[contenthash:8].js',
        },
    }
}
