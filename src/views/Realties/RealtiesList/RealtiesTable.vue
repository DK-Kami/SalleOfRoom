<template>
  <filtered-table
    :server-items-length="totalItems"
    :footer-props="footerTableProps"
    :headers="headers"
    :loading="loading"
    :page.sync="page"
    :items="realties"
    customise-header
    with-index
  >
    <template #item.photos="{ item }">
      <v-carousel v-if="item.Pictures && item.Pictures.length" style="height: 280px">
        <v-carousel-item
          v-for="(photo, index) in item.Pictures"
          :key="'picture-' + index"
        >
          <v-img :src="photoLink(photo)" :aspect-ratio="15/10" />
        </v-carousel-item>
      </v-carousel>
    </template>

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
  { text: '№',                  value: 'Number',      isSelected: true, width: '3%' },
  { text: 'Категория',          value: 'Category',    isSelected: true, width: '5%' },
  { text: 'Адрес',              value: 'Address',     isSelected: true, width: '15%' },
  { text: 'Информация',         value: 'Info',        isSelected: true, width: '20%' },
  { text: 'Цена',               value: 'Price',       isSelected: true, width: '7%' },
  { text: 'Риелтор',            value: 'RealtorName', isSelected: true, width: '10%' },
  { text: 'Дата поступления',   value: 'CreatedAt',   isSelected: true, width: '5%' },
  { text: 'Фотографии',         value: 'photos',      isSelected: true, width: '30%' },
  { text: 'Действия',           value: 'actions',     isSelected: true, width: '5%' },
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
      return this.$store.getters['realties/getRealties'](true);
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

    photoLink(photo) {
      return 'https://mayak-reality.com/v1/api/service/image?id=' + photo;
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
