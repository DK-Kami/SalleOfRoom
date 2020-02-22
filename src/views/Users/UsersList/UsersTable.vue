<template>
  <v-data-table
    :server-items-length="totalItems"
    :footer-props="footerTableProps"
    :headers="headers"
    :loading="loading"
    :page.sync="page"
    :items="users"
  >
    <template #item.Role="{ item }">
      {{ russRole(item.Role) }}
    </template>
    <template #item.actions="{ item }">
      <v-layout>
        <tooltip-button
          tooltip="Редактирование пользователя"
          icon="mdi-pencil"
          @action="editUser(item.Id)"
        />
      </v-layout>
    </template>
  </v-data-table>
</template>

<script>
import TooltipButton from '@/components/helper/TooltipButton';

const headers = [
  { text: 'ФИО',      value: 'Name'     },
  { text: 'Email',    value: 'Email'    },
  { text: 'Роль',     value: 'Role'     },
  { text: 'Действия', value: 'actions'  },
];

export default {
  name: 'UsersTable',

  created() {
    this.loadUsers();
  },

  components: {
    TooltipButton,
  },

  props: {
    search: String,
  },

  data: () => ({
    totalItems: 0,
    loading: false,
    timer: null,
    headers,
    page: 1,
  }),

  computed: {
    users() {
      return this.$store.getters['users/getUsers'];
    },
  },

  methods: {
    async loadUsers() {
      this.loading = true;
      const { error, data } = await this.$store.dispatch('users/loadUsers', {
        search: this.search,
        page: this.page,
      });
      if (!error) {
        this.totalItems = data;
      }
      this.loading = false;
    },

    searchInUsers() {
      clearTimeout(this.timer);
      this.timer = null;

      this.timer = setTimeout(this.loadUsers, 500);
    },

    editUser(id) {
      this.$router.push({ name: 'users.edit', params: { id }});
    },

    russRole(role) {
      if (role.toLowerCase() === 'admin') return 'Администратор';
      if (role.toLowerCase() === 'realtor') return 'Риелтор';
      return '';
    }
  },

  watch: {
    search() {
      this.searchInUsers();
    },
  },
};
</script>
