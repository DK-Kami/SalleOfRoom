<template>
  <v-layout wrap justify-center>
    <v-flex class="white--text text-center headline main-subtitle pt-4 mb-12" xs12>
      Мы поможем найти место, которое вы полюбите
    </v-flex>

    <v-flex class="white--text" xs8>
      <search-bar />
    </v-flex>

    <v-flex class="after--header" xs8>
      <after-header />
    </v-flex>

    <v-flex mt-10>
      <form-section />
    </v-flex>

    <v-flex xs10>
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
    margin-top: 400px;
  }
</style>
