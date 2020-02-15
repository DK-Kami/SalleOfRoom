<template>
  <v-layout>
    <v-flex>Персонал</v-flex>
    <v-flex>add here</v-flex>

    <v-flex>
      <users-table />
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'UsersListPage',

  components: {
    UsersTable,
  },
};
</script>
