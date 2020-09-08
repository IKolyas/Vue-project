import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';
import './layout/styles/styles.scss';
import 'lodash'

import Vue from 'vue';
import app from './App.vue';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
