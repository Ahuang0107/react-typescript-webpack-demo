# Filter Effect Display

## 项目配置

### webpack配置

#### plugin

- HtmlWebpackPlugin: 生成一个 HTML 文件, 在 body 中使用 script 标签引入你所有 webpack 生成的 bundle, 如果有 css 资源也会引入
- mini-css-extract-plugin: 将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载

#### module

- css
  - css-loader: 支持js导入css
  - mini-css-extract-plugin.loader


### webpack-merge

### cross-env

统一配置Node环境变量，不同操作系统设置环境变量的方式不一定相同，cross-env进行了统一
