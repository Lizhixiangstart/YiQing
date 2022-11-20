import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'


//引入css初始化
import './assets/css/reset.css'
//引入js适配移动端
// import './assets/js/phone'
//挂载到原型上
// import echarts from 'echarts'
//使用开发的插件
import install from './plugins/echarts'
Vue.use(install)

import {Tab,Tabs} from 'vant'
Vue.use(Tab)
Vue.use(Tabs)

// Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  el:'#app',
  router,
  render: h => h(App),
})
