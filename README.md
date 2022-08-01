<<<<<<< HEAD
# vue_project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 1.项目初始化搭建

1. 安装指定版本的 Node

```js
nvm install 14.17.5
```

2. 安装 cnpm

```js
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

3. 全局安装Vue CLI（仅第一次安装需要执行）

```js
cnpm install -g @vue/cli

vue -V //查看版本

全局卸载重装
npm uninstall -g vue-cli
npm install -g @vue/cli@4.5.17
```

4. 创建项目

```js
vue create vue_project
```

5. 进入项目目录启动

```
npm run serve
```

6. **简介：项目搭建初始化配置**

   - `rem` 适配

   - - 安装

       ```bash
       cnpm install postcss-pxtorem@5.1.1 amfe-flexible -S
       ```

     - 文件配置

       ```js
       // vue.config.js
       module.exports = {
         css: {
           loaderOptions: {
             postcss: {
               plugins: [
                 require('postcss-pxtorem')({ rootValue: 37.5 , propList: ['*']}),
               ],
             },
           },
         },
       };
       ```

     - 引入

       ```js
       // main.js
       import 'amfe-flexible';
       ```

   

   


   - `less` 预处理器

     - 安装

       ```bash
       cnpm i less less-loader@7 -S
       ```

   

   


   - `vant` 组件库的引入

     - 安装

       ```bash
       cnpm i vant@next -S
       cnpm i babel-plugin-import -S
       ```

     - 引入

       ```js
       // main.js
       import { Button } from 'vant';
       
       app.use(Button)
       ```

     - 样式按需引入

       ```js
       // babel.config.js
       plugins: [
         [
           'import',
           {
             libraryName: 'vant',
             libraryDirectory: 'es',
             style: true,
           },
           'vant',
         ],
       ],
       ```

     - 使用

       ```vue
       <van-button type="primary">主要按钮</van-button>
       ```

       

   

   - 阿里巴巴矢量库引入

     - 引入

       ```js
       // index.html
       <script src="http://at.alicdn.com/t/font_2701887_5roykhspg1e.js"></script>
       ```

     - 使用

       ```vue
       <svg class="icon" aria-hidden="true">
           <use xlink:href="#icon-xxx"></use>
       </svg>
       ```

   

   

   - 报错

     - 错误

       ```
       sockjs.js:1609 GET http://192.168.0.120:8080/sockjs-node/info?t=164267043253
       ```

     - 解决

       ```
       cnpm install -g webpack webpack-cli webpack-dev-server
       ```

       










