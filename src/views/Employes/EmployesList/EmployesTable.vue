<template>
  <v-data-table
    :server-items-length="totalItems"
    :footer-props="footerTableProps"
    :headers="headers"
    :loading="loading"
    :page.sync="page"
    :items="employes"
  >
    <template #item.Picture="{ item }">
      <v-img
        v-if="item.Picture"
        :src="photoLink(item.Picture)"
        style="height: 140px; max-width: 200px"
        contain
      />
    </template>

    <template #item.actions="{ item }" v-if="!isDisabled">
      <v-layout>
        <tooltip-button
          tooltip="Редактирование контрагента"
          icon="mdi-pencil"
          color="primary"
          @action="editdEmployee(item.Id)"
        />
        <tooltip-button
          tooltip="Удаление контрагента"
          icon="mdi-delete"
          color="error"
          @action="deletedEmployee(item.Id)"
        />
      </v-layout>
    </template>
  </v-data-table>
</template>

<script>
import TooltipButton from '@/components/helper/TooltipButton';

const headers = [
  { text: 'Фото',       value: 'Picture'  },
  { text: 'ФИО',        value: 'Name'     },
  { text: 'Должность',  value: 'Position' },
  { text: 'Действия',   value: 'actions'  },
];

export default {
  name: 'EmployesTable',

  created() {
    this.loadEmployes();
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
    employes() {
      return this.$store.getters['employes/getEmployes'];
    },
  },

  methods: {
    photoLink(photo) {
      return 'https://mayak-reality.com/v1/api/service/image?id=' + photo;
      // return 'https://localhost:44388/api/service/image?id=' + photo;
    },

    async loadEmployes() {
      this.loading = true;
      const { error, data } = await this.$store.dispatch('employes/loadEmployes', {
        isDisabled: this.isDisabled,
        search: this.search,
        page: this.page,
      });
      if (!error) {
        this.totalItems = data;
      }
      this.loading = false;
    },

    async deletedEmployee(id) {
      this.$store.dispatch('employes/deleteEmployee', id);
      this.loadEmployes();
    },

    editdEmployee(id) {
      this.$router.push({ name: 'employes.edit', params: { id }});
    },

    searchInEmployes() {
      clearTimeout(this.timer);
      this.timer = null;

      this.timer = setTimeout(this.loadEmployes, 500);
    },
  },

  watch: {
    search() {
      this.searchInEmployes();
    },
    page() {
      this.loadEmployes();
    },
    isDisabled() {
      this.loadEmployes();
    },
  },
};
</script>
