<template>
  <v-data-table
    :server-items-length="totalItems"
    :footer-props="footerTableProps"
    :headers="headers"
    :loading="loading"
    :page.sync="page"
    :items="counterparties"
  >
    <template #item.actions="{ item }" v-if="!isDisabled">
      <v-layout>
        <tooltip-button
          tooltip="Просмотреть контрагента"
          icon="mdi-eye"
          color="primary"
          @action="viewCounterparty(item.Id)"
        />
        <tooltip-button
          tooltip="Редактирование контрагента"
          icon="mdi-pencil"
          color="primary"
          @action="editCounterparty(item.Id)"
        />
        <tooltip-button
          tooltip="Удаление контрагента"
          icon="mdi-delete"
          color="error"
          @action="deleteCounterparty(item.Id)"
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

    async deleteCounterparty(id) {
      this.$store.dispatch('counterparties/deleteCounterparty', id);
      this.loadCounterparties();
    },

    editCounterparty(id) {
      this.$router.push({ name: 'counterparties.edit', params: { id }});
    },
    viewCounterparty(id) {
      this.$router.push({ name: 'counterparties.view', params: { id }});
    },

    searchInCounterparties() {
      clearTimeout(this.timer);
      this.timer = null;

      this.timer = setTimeout(this.loadCounterparties, 500);
    },
  },

  watch: {
    search() {
      this.searchInCounterparties();
    },
    isDisabled() {
      this.loadCounterparties();
    },
  },
};
</script>
