<template>
  <v-layout column>
    <v-divider />
    <sort-bar :view.sync="view" :is-favorite="isFavorite" />

    <v-layout v-if="view === 'map'">
      <v-flex xs5></v-flex>
      <v-flex xs6></v-flex>
    </v-layout>

    <template v-if="view === 'list'">
      <div class="headline font-weight-bold px-6">Продажа квартир в Домодедово</div>
    </template>
  </v-layout>
</template>

<script>
import SortBar from './SortBar';

export default {
  name: 'SalleAll',

  components: {
    SortBar,
  },

  data: () => ({
    view: 'list',
  }),

  computed: ({
    isFavorite() {
      return this.$route.name === 'favorite';
    },
  }),
};
</script>