<template>
  <v-layout column align-end>
    <v-text-field
      v-model="search"
      append-icon="search"
      label="Поиск"
      class="pt-0"
      hide-details
      single-line
      @input="searchInUsers"
    />

    <v-data-table
      :total-items="totalItems"
      :headers="headers"
      :loding="loding"
      :items="users"
    >
    </v-data-table>
  </v-layout>
</template>

<script>
const headers = [
  { name: 'ФИО', value: '' },
  { name: 'Email', value: '' },
  { name: 'Роль', value: '' },
  { name: 'Действия', value: '' },
];

export default {
  name: 'UsersTable',

  created() {
    this.loadUsers();
  },

  data: () => ({
    totalItems: 0,
    loading: '',
    search: '',
    timer: null,
  }),

  computed: {
    users() {
      return this.$store.getters['user/getUsers'];
    },
  },

  methods: {
    async loadUsers() {
      this.loading = true;
      const { error, data } = await this.$store.dispatch('user/loadUsers', this.search);
      if (!error) {
        this.totalItems = data.totalItems;
      }
      this.loading = false;
    },

    searchInUsers() {
      this.timer = null;
      this.timer = setTimeout(() => this.loadUsers, 500);
    },
  },
};
</script>
