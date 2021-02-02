import Vue from 'vue'
import VuePageTitle from 'vue-page-title'
import NProgress from 'vue-nprogress'
import VueLayers from 'vuelayers'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import router from './router'
import store from './store'
import { i18n } from './localization'
import './antd'
import './registerServiceWorker'

// mocking api
import './services/axios/fakeApi'

Vue.use(BootstrapVue)
Vue.use(VueLayers)

Vue.use(NProgress)
Vue.use(VuePageTitle, {
  prefix: 'Visual Builder | ',
  router,
})

Vue.config.productionTip = false
const nprogress = new NProgress({ parent: 'body' })

new Vue({
  router,
  store,
  nprogress,
  i18n,
  render: h => h(App),
}).$mount('#app')
