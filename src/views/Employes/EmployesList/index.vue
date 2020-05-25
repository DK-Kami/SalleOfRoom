<template>
  <v-layout wrap class="elevation-4">
    <top-bar
      v-model="search"
      title="Сотрудники"
      @action="addEmployes"
    />

    <v-flex xs12>
      <employes-table
        :is-disabled="isDisabled"
        :search="search"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import EmployesTable from './EmployesTable';
import TopBar from '@/components/base/TopBar';

export default {
  name: 'EmployesListPage',

  components: {
    EmployesTable,
    TopBar,
  },

  data: () => ({
    isDisabled: false,
    search: '',
  }),

  methods: {
    addEmployes() {
      return this.$router.push({ name: 'employes.create' });
    },
  },
};
</script>
