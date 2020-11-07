import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCurrencyFilter from 'vue-currency-filter'
import Numeric from '../src/ArchivosJavaScript/jquery.numeric-min'
// import 'typeface-dosis'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import 'fabric';
import 'canvas';
// Load Dosis typeface
// require('typeface-dosis')
// import jquery from 'jquery'npm run serve
// Vue.use(jquery)
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// import './editor/js/caseEditor.js';
// import './editor/js/excanvas.js';
// import './editor/js/jquery.js';
import './editor/js/bootstrap.js';
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
import store from './store'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Numeric)
Vue.use(VueSidebarMenu)     
Vue.use(VueCurrencyFilter, {
  symbol: 'CLP',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'back',
  symbolSpacing: true
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
