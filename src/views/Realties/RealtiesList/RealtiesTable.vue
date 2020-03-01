<template>
  <filtered-table
    :server-items-length="totalItems"
    :footer-props="footerTableProps"
    :headers="headers"
    :loading="loading"
    :page.sync="page"
    :items="realties"
    customise-header
  >
    <template #item.actions="{ item }">
      <v-layout>
        <tooltip-button
          tooltip="Посмотреть недвижимость"
          icon="mdi-eye"
          color="primary"
          @action="openRealtyView(item.Id)"
        />
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
    </template>
  </filtered-table>
</template>

<script>
import TooltipButton from '@/components/helper/TooltipButton';
import FilteredTable from '@/components/base/FilteredTable';

const headers = [
  { text: 'Состояние',          value: 'russReadyState',    isSelected: true, },
  { text: 'Цена',               value: 'Price',             isSelected: true  },
  { text: 'Риелтор',            value: 'RealtorName',       isSelected: true, },
  { text: 'Контагент',          value: 'CounterpartyName',  isSelected: true, },
  { text: 'Этаж',               value: 'Floor',             isSelected: true  },
  { text: 'Номер квартиры',     value: 'FlatNumber',        isSelected: true  },
  { text: 'Количество комнат',  value: 'RoomCount',         isSelected: true  },
  { text: 'Площадь',            value: 'Area',              isSelected: true  },
  { text: 'Жилая площадь',      value: 'LivingArea',        isSelected: true  },
  { text: 'Площадь кухни',      value: 'KitchenArea',       isSelected: true  },
  { text: 'Коммментарий',       value: 'Comment',           isSelected: false },
  { text: 'Действия',           value: 'actions' ,          isSelected: true  },
];

export default {
  name: 'RealtiesTable',

  components: {
    TooltipButton,
    FilteredTable,
  },

  props: {
    isDisabled: Boolean,
    totalItems: Number,
    search: String,
    page: Number,
  },

  data: () => ({
    loading: false,
    timer: null,
    headers,
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
    openRealtyView(id) {
      this.$router.push({ name: 'realties.view', params: { id }});
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
