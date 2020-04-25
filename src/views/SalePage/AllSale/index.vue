<template>
  <div>
    <v-divider />
    <sort-bar :view.sync="view" :is-favorite="isFavorite" />
  </div>
</template>

<script>
import SortBar from './SortBar';

export default {
  name: 'SalleAll',

  components: {
    SortBar,
  },

  data: () => ({
    view: 'map',
  }),

  computed: ({
    isFavorite() {
      return this.$route.name === 'favorite';
    },
  }),
};
</script>