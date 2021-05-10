module.exports = {
    plugins: {
        // px 转为 rem
        'postcss-pxtorem': {
            // 转换的根元素基准值
            // 正常情况下按照设计稿来
            // 750宽的设计稿 750 / 10 = 75
            // 375宽的设计稿 375 / 10 = 37.5
            // Vant组件库是基于375pt写的
            rootValue: 37.5,
            // 需要转换的css属性 *表示所有属性
            propList: ['*'],
        },
    },
}