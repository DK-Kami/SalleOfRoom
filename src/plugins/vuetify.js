import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import ru from 'vuetify/es5/locale/ru';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#192541',
        secondary: '#5227b4',
        accent: '#FFB800',
        warning: '#fe891f',

        success: '#4CAF50',
        error: '#FF5252',
        info: '#2196F3',
      },
    },
  },
  options: {
    customProperties: true,
  },
  lang: {
    locales: { ru },
    current: 'ru',
  },
  icons: {
    iconfont: 'mdi',
  },
});
