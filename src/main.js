// 入口文件 
// js
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// css 放在App.vue里比较好



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
