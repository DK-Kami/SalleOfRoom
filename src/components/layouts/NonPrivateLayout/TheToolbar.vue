<template>
  <v-app-bar color="white" class="toolbar" flat>
    <template class="cursor--pointer">
      <v-img src="/logo.png" max-width="60px" contain />
      <span class="headline ml-3">Маяк</span>
    </template>

    <v-toolbar-items class="ml-6">
      <v-btn
        to="/sale/list"
        class="body-2"
        text
      >Продажа</v-btn>

      <v-btn
        to="/buy/list"
        class="body-2"
        text
      >Аренда</v-btn>

      <v-btn
        to="/services"
        class="body-2"
        text
      >Услуги</v-btn>

      <v-btn
        to="/about"
        class="body-2"
        text
      >О нас</v-btn>

      <v-btn
        to="/contacts"
        class="body-2"
        text
      >Контакты</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheToolbar',
};
</script>

<style>
  .toolbar {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  }
</style>
