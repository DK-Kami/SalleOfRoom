<template>
  <v-data-table
    :server-items-length="totalItems"
    :footer-props="footerTableProps"
    :headers="headers"
    :loading="loading"
    :page.sync="page"
    :items="realtors"
  >
    <template #item.actions="{ item }">
      <v-layout>
        <tooltip-button
          tooltip="Просмотр риелтора"
          color="primary"
          icon="mdi-eye"
          @action="viewRealtor(item.Id)"
        />
        <tooltip-button
          v-if="!isDisabled"
          tooltip="Редактирование риелтора"
          icon="mdi-pencil"
          color="primary"
          @action="editRealtor(item.Id)"
        />
        <tooltip-button
          v-if="!isDisabled"
          tooltip="Удаление риелтора"
          icon="mdi-delete"
          color="error"
          @action="deleteRealtor(item.Id)"
        />
      </v-layout>
    </template>
  </v-data-table>
</template>

<script>
import TooltipButton from '@/components/helper/TooltipButton';

const headers = [
  { text: 'ФИО',      value: 'Name'     },
  { text: 'Телефон',  value: 'Phone'    },
  { text: 'Действия', value: 'actions'  },
];

export default {
  name: 'RealtorsTable',

  created() {
    this.loadRealtors();
  },

  components: {
    TooltipButton,
  },

  props: {
    isDisabled: Boolean,
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
    realtors() {
      return this.$store.getters['users/getUsers'];
    },
  },

  methods: {
    async loadRealtors() {
      this.loading = true;
      const { error, data } = await this.$store.dispatch('users/loadRealtors', {
        isDisabled: this.isDisabled,
        search: this.search,
        page: this.page,
      });
      if (!error) {
        this.totalItems = data;
      }
      this.loading = false;
    },
    async deleteRealtor(id) {
      await this.$store.dispatch('users/deleteRealtor', id);
      this.loadRealtors();
    },

    searchInRealtors() {
      clearTimeout(this.timer);
      this.timer = null;

      this.timer = setTimeout(this.loadRealtors, 500);
    },

    editRealtor(id) {
      this.$router.push({ name: 'users.edit', params: { id }});
    },
    viewRealtor(id) {
      this.$router.push({ name: 'realtors.view', params: { id }});
    },
  },

  watch: {
    search() {
      this.searchInRealtors();
    },
    isDisabled() {
      this.searchInRealtors();
    },
  },
};
</script>
