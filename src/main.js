import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as echarts from 'echarts';
import { transform } from 'echarts-stat'
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyLoad from 'vue-lazyload'
echarts.registerTransform(transform.regression);
import store from './store/index'
Vue.prototype.$eCharts = echarts
Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  preLoad: 1,
  error: require('./assets/image/error.png'),
  loading: require('./assets/image/loading.png'),
  attempt: 2,
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
