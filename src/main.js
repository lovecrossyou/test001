import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import Vuex from 'vuex'
import VideoPlayer from 'vue-video-player'
import store from './store'
import ECharts from 'vue-echarts/components/ECharts.vue'

Vue.use(VideoPlayer)
Vue.use(Vuex)
Vue.component('v-chart', ECharts)


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$store = store;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
