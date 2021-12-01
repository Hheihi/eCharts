import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as echarts from 'echarts';
import { transform } from 'echarts-stat'
import 'element-ui/lib/theme-chalk/index.css';

echarts.registerTransform(transform.regression);
import store from './store/index'
Vue.prototype.$eCharts = echarts
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
