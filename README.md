# Filter Effect Display

## 项目配置

### webpack配置

#### plugin

- HtmlWebpackPlugin: 生成一个 HTML 文件, 在 body 中使用 script 标签引入你所有 webpack 生成的 bundle, 如果有 css 资源也会引入
- mini-css-extract-plugin: 将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载
- terser-webpack-plugin: uses terser to minify/minimize JavaScript
  - extractComments:  去除所有注释，除了有特殊标志的注释如 @preserve
  - pure_funcs：去除指定函数

#### module

- css
  - postcss-loader: css 处理，配合各种预设插件比如 postcss-preset-env 来处理
    - postcss-preset-env: convert modern CSS into something most browsers can understand
  - css-loader: 支持js导入css
  - mini-css-extract-plugin.loader

#### devtool

- source-map: 生成一个 SourceMap 文件
- inline-source-map: 生成一个 DataUrl 形式的 SourceMap 文件
- cheap-source-map: 少了列信息，提高了 SourceMap 生成的效率
- module-source-map: 支持 babel 这种预编译工具
- eval-source-map: 提高持续构建效率，减少网络请求

### webpack-merge

### cross-env

统一配置Node环境变量，不同操作系统设置环境变量的方式不一定相同，cross-env进行了统一

### browserslist

- "> 0.2%": 兼容98%以上的主流浏览器
- "not dead": 不去兼容已经停用的浏览器
- "ie >=9": 只兼容ie9以上版本
- "not op_mini all": 不去兼容任何opera mini浏览器(已经停止更新很久并不再使用)
