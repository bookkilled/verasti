// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;
Vue.config.debug = true;
Vue.config.devtools = true;

Vue.component('app-header',require('./components/layout/header.vue'))
Vue.component('app-footer',require('./components/layout/footer.vue'))
// Vue.component('modal',require('./components/dialog.vue'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
