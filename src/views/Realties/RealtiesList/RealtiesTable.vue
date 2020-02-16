<template>
  <v-data-table
    :server-items-length="totalItems"
    :footer-props="footerTableProps"
    :headers="headers"
    :loading="loading"
    :page.sync="page"
    :items="realties"
  >
    <!-- <template #item.actions="{ item }">
      <v-layout>
        <tooltip-button
          tooltip="Редактирование недвижимости"
          icon="mdi-pencil"
          color="primary"
          @action="editRealty(item.Id)"
        />
        <tooltip-button
          tooltip="Удаление недвижимости"
          icon="mdi-delete"
          color="error"
          @action="deleteRealty(item.Id)"
        />
      </v-layout>
    </template> -->
  </v-data-table>
</template>

<script>
import TooltipButton from '@/components/helper/TooltipButton';

const headers = [
  { text: 'Действия', value: 'actions'  },
];

export default {
  name: 'RealtiesTable',

  created() {
    this.loadRealties();
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
    realties() {
      return this.$store.getters['realties/getRealties'];
    },
  },

  methods: {
    async loadRealties() {
      this.loading = true;
      const { error, data } = await this.$store.dispatch('realties/loadRealties', {
        isDisabled: this.isDisabled,
        search: this.search,
        page: this.page,
      });
      if (!error) {
        this.totalItems = data;
      }
      this.loading = false;
    },

    async deleteRealty(id) {
      this.$store.dispatch('realties/deleteRealty', id);
      this.loadRealties();
    },

    editRealty(id) {
      this.$router.push({ name: 'realties.edit', params: { id }});
    },

    searchInRealties() {
      clearTimeout(this.timer);
      this.timer = null;

      this.timer = setTimeout(this.loadRealties, 500);
    },
  },

  watch: {
    search() {
      this.searchInRealties();
    },
    isDisabled() {
      this.loadRealties();
    },
  },
};
</script>
