<template>
  <v-container pa-0 ma-0 grid-list-xl>
    <v-layout wrap>
      <v-flex
        v-for="realty in realties"
        :class="small ? 'xs12' : 'xs3'"
      >
        <realty-card :realty="realty" with-actions />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import RealtyCard from './Card';

export default {
  name: 'RealtiesCard',

  components: {
    RealtyCard,
  },

  props: {
    withActions: Boolean,
    realties: Array,
    small: Boolean,
  },

  created() {
    this.loadReadyStates();
  },

  methods: {
    async loadReadyStates() {
      await this.$store.dispatch('realties/loadReadyState');
    },
  },
};
</script>
