module.exports = {
    lintOnSave : false,//防止声明了一个变量而没有使用而报错的这种情况
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