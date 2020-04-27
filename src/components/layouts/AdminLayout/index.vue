<template>
  <v-content>
    <!-- <the-toolbar /> -->
    <v-app-bar color="primary" dark>
      <v-layout align-center justify-space-between>
        <v-btn icon @click="openAside" class="hidden-sm-and-up">
          <v-icon>mdi-menu</v-icon>
        </v-btn>

        <span>Добро пожаловать, {{ username }}</span>
      </v-layout>
      <v-spacer />

      <v-toolbar-items class="hidden-sm-and-down">
        <template v-for="item in menu">
          <v-btn
            v-if="currentRole(item.roles)"
            :key="item.path"
            :to="item.path"
            class="px-3 elevation-0"
            large
            text
          >
            <v-icon class="mr-2" middle>{{ item.icon }}</v-icon>
            <span>{{ item.title }}</span>
          </v-btn>
        </template>

        <v-btn
          @click.stop="logout"
          class="px-3 elevation-0"
          large
          text
        >
          <span class="mr-2">Выйти</span>
          <v-icon middle>mdi-logout</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-container class="pa-0" :class="$vuetify.breakpoint.xs ? 'mt-0' : 'mt-6'">
      <v-navigation-drawer
        v-model="asideMenu"
        color="blue-grey lighten-5"
        class="drawer"
        temporary
        app
      >
        <v-list>
          <v-list-item @click.stop="asideMenu = false">
            <v-list-item-icon>
              <v-icon>mdi-close</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Скрыть</v-list-item-title>
          </v-list-item>

          <v-divider />

          <template v-for="item in menu">
            <v-list-item
              v-if="currentRole(item.roles)"
              :key="item.path"
              :to="item.path"
              class="px-3"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </template>

          <v-list-item @click.stop="logout">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Выход</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-layout fill-height justify-center>
        <v-slide-y-transition mode="out-in">
          <router-view />
        </v-slide-y-transition>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import TheToolbar from './TheToolbar';
import TheFooter from './TheFooter';
import TheMenu from './TheMenu';

const menu = [
  { title: 'Пользователи',  path: '/users',           icon: 'mdi-account-group',  roles: ['admin']},
  { title: 'Риелторы',      path: '/realtors',        icon: 'mdi-account-tie',    roles: ['admin']},
  { title: 'Контрагенты',   path: '/counterparties',  icon: 'mdi-file-document',  roles: ['admin']},
  { title: 'Недвижимость',  path: '/realties',        icon: 'mdi-home-city',      roles: ['admin', 'realtor']},
  { title: 'История',       path: '/history',         icon: 'mdi-history',        roles: ['admin']},
];

export default {
  name: 'AdminLayout',

  components: {
    TheToolbar,
    TheFooter,
    TheMenu,
  },

  data: () => ({
    asideMenu: false,
    menu,
  }),

  computed: {
    user() {
      return this.$store.getters['auth/getUser'];
    },
    username() {
      return this.user.userName || this.user.email;
    },

    firstWord() {
      if (!this.username) return;
      console.log(this.username);
      return this.username.charAt(0).toUpperCase();
    },
  },

  methods: {
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.replace({ name: 'ping' });
    },

    currentRole(roles) {
      return roles.includes(this.$store.getters['auth/getUserRole']);
    },

    openAside() {
      this.asideMenu = true;
    },
  },
};
</script>


