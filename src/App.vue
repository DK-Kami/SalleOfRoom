<template>
  <v-app light>
    <notification />

    <v-content v-if="isEmptyLayout">
      <router-view />
    </v-content>

    <v-content v-else>
      <!-- <the-toolbar /> -->
      <v-app-bar color="primary" dark>
        <div>
          Добро пожаловать, {{ username }}
        </div>
        <v-spacer />

        <v-toolbar-items>
          <v-btn
            v-for="item in menu"
            :key="item.path"
            :to="item.path"
            class="px-3"
            large
            text
          >
            <v-icon class="mr-2" middle>{{ item.icon }}</v-icon>
            <span>{{ item.title }}</span>
          </v-btn>

          <v-btn
            @click.stop="logout"
            class="px-3"
            large
            text
          >
            <span class="mr-2">Выйти</span>
            <v-icon middle>mdi-logout</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>
      

      <v-container class="mt-4">
        <v-layout fill-height justify-center>
          <v-slide-y-transition mode="out-in">
            <router-view />
          </v-slide-y-transition>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Notification from '@/components/layout/Notification';
import TheToolbar from '@/components/layout/TheToolbar';
import TheFooter from '@/components/layout/TheFooter';
import TheMenu from '@/components/layout/TheMenu';

const menu = [
  { title: 'Персонал',      path: '/users',           icon: 'mdi-account-group' },
  { title: 'Контр-агенты',  path: '/counterparties',  icon: 'mdi-file-document' },
  { title: 'Недвижимость',  path: '/realties',        icon: 'mdi-home-city'     },
];

export default {
  name: 'App',

  components: {
    Notification,
    TheToolbar,
    TheFooter,
    TheMenu,
  },

  data: () => ({
    menu,
  }),

  computed: {
    isEmptyLayout() {
      if (!this.$route.meta) return true;
      const meta = {};
      this.$route.matched.forEach(match => Object.assign(meta, match.meta));
      return !meta.role || meta.role === 'none';
    },
    user() {
      return this.$store.getters['auth/getUser'];
    },
    username() {
      return this.user.userName || this.user.email;
    },
  },

  methods: {
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.replace({ name: 'ping' });
    },
  },
};
</script>

<style>
.v-card,
.v-stepper,
.custom-elevation,
.v-stepper__header,
.v-expansion-panel,
.v-btn-toggle--selected,
.v-expansion-panel,
.v-expansion-panels,
.v-expansion-panel-header,
.v-expansion-panel-content,
.v-expansion-panel::before,
.v-data-table {
  /* box-shadow: 0 7px 15px rgba(0,0,0,.03) !important; */
  box-shadow: none !important;
}
.v-card, .v-expansion-panel {
  border: 1px solid #e6eef5 !important;
  border-radius: 6px !important;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.07) !important;
}
.v-data-table {
  background: transparent !important;
}
.v-application .elevation-0 {
  border: none !important;
}

.elevation-3 {
  box-shadow: 0 7px 15px rgba(0,0,0,.03) !important;
  border: none !important;
}
.cursor--pointer {
  cursor: pointer;
}
.v-navigation-drawer {
  pointer-events: inherit;
}

.no-select {
  user-select: none;
}
</style>
