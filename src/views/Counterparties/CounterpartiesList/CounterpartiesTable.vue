<template>
  <v-data-table
    :server-items-length="totalItems"
    :footer-props="footerTableProps"
    :headers="headers"
    :loading="loading"
    :page.sync="page"
    :items="counterparties"
  >
    <template #item.actions="{ item }">
      <v-layout>
        <tooltip-button
          tooltip="Редактирование пользователя"
          icon="mdi-pencil"
          @action="editCounterparty(item.Id)"
        />
      </v-layout>
    </template>
  </v-data-table>
</template>

<script>
import TooltipButton from '@/components/helper/TooltipButton';

const headers = [
  
  { text: 'Действия', value: 'actions'  },
];

export default {
  name: 'CounterpartiesTable',

  created() {
    this.loadCounterparties();
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
    counterparties() {
      return this.$store.getters['counterparties/getCounterparties'];
    },
  },

  methods: {
    async loadCounterparties() {
      this.loading = true;
      const { error, data } = await this.$store.dispatch('counterparties/loadCounterparties', {
        isDisabled: this.isDisabled,
        search: this.search,
        page: this.page,
      });
      if (!error) {
        this.totalItems = data;
      }
      this.loading = false;
    },

    searchInCounterparties() {
      clearTimeout(this.timer);
      this.timer = null;

      this.timer = setTimeout(this.loadCounterparties, 500);
    },

    editCounterparty(id) {
      this.$router.push({ name: 'counterparties.edit', params: { id }});
    },

    russRole(role) {
      if (role.toLowerCase() === 'admin') return 'Администратор';
      if (role.toLowerCase() === 'rieltor') return 'Риелтор';
      return '';
    }
  },

  watch: {
    search() {
      this.searchInCounterparties();
    },
  },
};
</script>
