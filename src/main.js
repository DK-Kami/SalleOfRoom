import Vue from 'vue';
import App from './App.vue';
import routerInit from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

const router = routerInit(store);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
