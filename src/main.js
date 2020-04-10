import Vue from 'vue';
import App from './App.vue';
import routerInit from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import WebClient from './middleware/WebClient';
import '@mdi/font/css/materialdesignicons.css';

import mainMixin from './helper/mixins/main';
import RStore from './helper/RStore';

Vue.config.productionTip = false;
Vue.mixin(mainMixin);

const router = routerInit(store);

WebClient.$router = router;
WebClient.$store = store;

RStore.subscribe('afterUpdate', state => {
  store.dispatch(state ? 'auth/loginFromState' : 'unsetUserData', state);
  if (state) router.push('/ping');
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
