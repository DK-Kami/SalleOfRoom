<template>
  <v-app-bar color="white" class="toolbar" flat>
    <template class="cursor--pointer">
      <div class="logo" @click="openMain">
        <v-img src="/logo.png" max-width="60px" contain />
        <span class="display-1 ml-3">
          <a href="/" class="black--text">Маяк</a>
        </span>
      </div>
    </template>

    <v-toolbar-items class="ml-6">
      <v-btn
        to="/sale/list"
        class="subtitle-1 elevation-0"
        text
      >Продажа</v-btn>

      <v-btn
        to="/sale/list"
        class="subtitle-1 elevation-0"
        text
      >Аренда</v-btn>

      <v-btn
        to="/services"
        class="subtitle-1 elevation-0"
        text
      >Услуги</v-btn>

      <v-btn
        to="/about"
        class="subtitle-1 elevation-0"
        text
      >О нас</v-btn>

      <v-btn
        to="/contacts"
        class="subtitle-1 elevation-0"
        text
      >Контакты</v-btn>
    </v-toolbar-items>

    <v-spacer />
    <span class="mr-3">+7 (926) 811-11-18</span>
    <v-btn to="favorite" style="background-color: #fff;">
      <v-icon class="grey--text text--darken-1">mdi-heart-outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheToolbar',

  methods: {
    openMain() {
      console.log('main');
    }
  },
};
</script>

<style lang="scss">
  .v-toolbar__content {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  }
  .logo {
    display: flex;
    align-items: center;
  }
</style>
