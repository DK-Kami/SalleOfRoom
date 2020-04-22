<template>
  <v-layout column align-center>
    <v-flex class="white--text text-center headline main-subtitle pt-4 mb-12">
      Мы поможем найти место, которое вы полюбите
    </v-flex>

    <v-flex class="white--text">
      <search-bar />
    </v-flex>

    <v-flex class="after--header" mb-10>
      <after-header />
    </v-flex>

    <v-flex my-12 py-12>
      <form-section />
    </v-flex>

    <v-flex>
      <last-section />
    </v-flex>
  </v-layout>
</template>

<script>
import SearchBar from './SearchBar';
import AfterHeader from './AfterHeader';
import FormSection from './FormSection';
import LastSection from './LastSection';

export default {
  name: 'MainPage',

  components: {
    SearchBar,
    AfterHeader,
    FormSection,
    LastSection,
  },
};
</script>

<style lang="scss">
  .main-subtitle {
    margin-top: -50px;
    z-index: 1;
  }
  .after--header {
    margin-top: 320px;
  }
</style>
