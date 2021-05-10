import Vue from 'vue'
// 加载Vant组件库
import Vant from 'vant'
import App from './App.vue'
import router from './router'
import store from './store'
// 自动设置REM基准值
import 'amfe-flexible'

// 加载Vant样式
import 'vant/lib/index.css'
// 加载全局样式
import './styles/index.less'

// 全局注册Vant中的组件
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
