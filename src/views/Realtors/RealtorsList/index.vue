<template>
  <v-layout wrap class="elevation-4">
    <top-bar
      v-model="search"
      title="Риелторы"
      @action="addRealtors"
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
      <realtors-table
        :is-disabled="isDisabled"
        :search="search"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import TopBar from '@/components/base/TopBar';
import RealtorsTable from './RealtorsTable';

export default {
  name: 'RealtorsListPage',

  components: {
    RealtorsTable,
    TopBar,
  },

  data: () => ({
    isDisabled: false,
    search: '',
  }),

  methods: {
    addRealtors() {
      return this.$router.push({ name: 'users.create' });
    },
  },
};
</script>
