<template>
  <v-layout wrap class="elevation-4">
    <top-bar
      v-model="search"
      title="Персонал"
      @action="addUsers"
    />

    <v-flex xs12>
      <users-table :search="search" />
    </v-flex>
  </v-layout>
</template>

<script>
import TopBar from '@/components/base/TopBar';
import UsersTable from './UsersTable';

export default {
  name: 'UsersListPage',

  components: {
    UsersTable,
    TopBar,
  },

  data: () => ({
    search: '',
  }),

  methods: {
    addUsers() {
      return this.$router.push({ name: 'users.create' });
    },
  },
};
</script>
