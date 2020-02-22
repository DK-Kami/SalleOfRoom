<template>
  <v-layout wrap class="elevation-4">
    <top-bar
      v-model="search"
      title="Контрагенты"
      @action="addCounterparties"
    >
      <template #beforeSearch>
        <v-checkbox
          v-model="isDisabled"
          label="Архив"
          class="mr-8 mt-7 headline"
        />
      </template>
    </top-bar>

    <v-flex xs12>
      <counterparties-table
        :is-disabled="isDisabled"
        :search="search"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import CounterpartiesTable from './CounterpartiesTable';
import TopBar from '@/components/base/TopBar';

export default {
  name: 'CounterpartiesListPage',

  components: {
    CounterpartiesTable,
    TopBar,
  },

  data: () => ({
    isDisabled: false,
    search: '',
  }),

  methods: {
    addCounterparties() {
      return this.$router.push({ name: 'counterparties.create' });
    },
  },
};
</script>
