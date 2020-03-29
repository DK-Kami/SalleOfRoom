<template>
  <filtered-table
    :hide-default-footer="hideDefaultFooter"
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
        :src="photoLink(item.Pictures[0])"
        style="height: 140px"
        contain
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

    <template #item.RealtorName="{ item }">
      {{ item.Realtor.Name }}
    </template>

    <template #item.actions="{ item }">
      <v-layout>
        <tooltip-button
          tooltip="Посмотреть недвижимость"
          icon="mdi-eye"
          color="primary"
          @action="openRealtyView(item.Id)"
        />

        <template v-if="mayEdit(item.Realtor.Id)">
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
        </template>
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
    hideDefaultFooter: Boolean,
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

    isRealtor() {
      return this.$store.getters['auth/getUserRole'] === 'realtor';
    },
    realtorId() {
      return this.$store.getters['auth/getUserId'];
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

    mayEdit(id) {
      if (this.isRealtor) {
        return this.realtorId === id;
      }
      return true;
    },

    photoLink(photo) {
      return 'https://mayak-reality.com/v1/api/service/image?id=' + photo;
      // return 'https://localhost:44388/api/service/image?id=' + photo;
    },
  },
};
</script>
