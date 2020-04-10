<template functional>
  <v-toolbar color="primary" clipped-left dark app>
    <v-spacer />

    <!-- <v-toolbar-items>
      <v-btn
        class="mr-2 font-weight-light"
        @click="openProfile"
        large
        text
      >
        <span class="mr-2">{{ fullUserName }}</span>
        <v-icon>mdi-account</v-icon>
      </v-btn> -->

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
  </v-toolbar>
</template>

<script>
const toolbarItems = [
  // { name: 'Главная страница', to: '/', },
  // { name: 'Отзывы',           to: '/', },
  // { name: 'Вакансии',         to: '/',  items: [
  //   { name: 'О работе в компании',  to: '/' },
  //   { name: 'Список вакансий',      to: '/' },
  //   { name: 'Контактный номер',     to: '/' },
  // ]},
  // { name: 'Наши партнёры',    to: '/',  items: []},
  // { name: 'Услуги агентства', to: '/', },
  // { name: 'Информация',       to: '/', },
];

export default {
  name: 'TheToolbar',

  data: () => ({
    toolbarItems,
  }),

  methods: {
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.replace({ name: 'ping' });
    },
  },
};
</script>
