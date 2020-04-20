<template>
  <v-layout column>
    <v-flex class="white--text text-center headline main-subtitle pt-4 mb-12">
      Мы поможем найти место, которое вы полюбите
    </v-flex>

    <v-flex class="white--text">
      <search-bar />
    </v-flex>

    <v-flex class="after--header">
      <after-header />
    </v-flex>
  </v-layout>
</template>

<script>
import SearchBar from './SearchBar';
import AfterHeader from './AfterHeader';

export default {
  name: 'MainPage',

  components: {
    SearchBar,
    AfterHeader,
  },
};
</script>

<style lang="scss">
  .main-subtitle {
    margin-top: -50px;
    z-index: 1;
  }
  .after--header {
    margin-top: 400px;
  }
</style>
