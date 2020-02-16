<template>
  <v-layout wrap class="elevation-4">
    <top-bar
      v-model="search"
      title="Недвижимость"
      @action="addRealties"
    />

    <v-flex xs12>
      <realties-table
        :search="search"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import RealtiesTable from './RealtiesTable';
import TopBar from '@/components/base/TopBar';

export default {
  name: 'RealtiesListPage',

  components: {
    RealtiesTable,
    TopBar,
  },

  data: () => ({
    isDisabled: false,
    search: '',
  }),

  methods: {
    addRealties() {
      return this.$router.push({ name: 'realties.create' });
    },
  },
};
</script>
