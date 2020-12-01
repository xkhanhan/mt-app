// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import axios from 'axios'
import store from '@/Vuex/index';



Vue.prototype.$axios = axios
Vue.use(elementUi)

Vue.config.productionTip = false

// 自定义指令
Vue.directive('document-click', {
    bind(el, binding){
        document.addEventListener('click', binding.value);
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
