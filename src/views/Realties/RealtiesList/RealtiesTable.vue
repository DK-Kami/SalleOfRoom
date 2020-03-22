<template>
  <filtered-table
    :server-items-length="totalItems"
    :footer-props="footerTableProps"
    :items="currentRealties"
    :page.sync="pageComp"
    :headers="headers"
    :loading="loading"
    with-index
  >
    <template #item.photos="{ item }">
      <v-img
        v-if="item.Pictures && item.Pictures.length"
        :src="photoLink(item.Pictures[1])"
        :aspect-ratio="15/10"
        style="height: 280px"
      />
      <!-- <v-carousel v-if="item.Pictures && item.Pictures.length" style="height: 280px">
        <v-carousel-item
          v-for="(photo, index) in item.Pictures"
          :key="'picture-' + index"
        >
          <v-img :src="photoLink(photo)" :aspect-ratio="15/10" />
        </v-carousel-item>
      </v-carousel> -->
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
  { text: '№',                  value: 'Number',      isSelected: true, width: '4%' },
  { text: 'Категория',          value: 'Category',    isSelected: true, width: '8%' },
  { text: 'Адрес',              value: 'Address',     isSelected: true, width: '15%' },
  { text: 'Информация',         value: 'Info',        isSelected: true, width: '20%' },
  { text: 'Цена',               value: 'Price',       isSelected: true, width: '7%' },
  { text: 'Риелтор',            value: 'RealtorName', isSelected: true, width: '10%' },
  { text: 'Дата поступления',   value: 'CreatedAt',   isSelected: true, width: '8%' },
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
    totalItems: Number,
    realties: Array,
    page: Number,
  },

  data: () => ({
    loading: false,
    timer: null,
    headers,
  }),

  computed: {
    pageComp: {
      get() {
        return this.page;
      },
      set(page) {
        this.$emit('update:page', page);
      },
    },
    currentRealties() {
      return this.realties
          || this.$store.getters['realties/getRealties'](true);
    },
  },

  methods: {
    async loadRealties() {
      this.loading = true;
      this.$emit('apply-filters')
      this.loading = false;
    },

    async deleteRealty(id) {
      await this.$store.dispatch('realties/deleteRealty', id);
      await this.loadRealties();
    },

    editRealty(id) {
      this.$router.push({ name: 'realties.edit', params: { id }});
    },
    openRealtyView(id) {
      this.$router.push({ name: 'realties.view', params: { id }});
    },

    photoLink(photo) {
      return 'https://mayak-reality.com/v1/api/service/image?id=' + photo;
    },
  },
};
</script>
