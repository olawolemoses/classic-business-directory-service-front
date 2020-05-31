import Vue from 'vue'
import App from './App.vue'
import router from './router';
import AsyncComputed from 'vue-async-computed'

Vue.use(AsyncComputed)

Vue.config.productionTip = false

new Vue({
  data: {
    ipAddress: ""
  },
  router,
  render: h => h(App),
}).$mount('#app')
