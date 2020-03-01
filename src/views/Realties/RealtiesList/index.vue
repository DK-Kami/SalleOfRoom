<template>
  <v-layout wrap class="elevation-4">
    <top-bar
      v-model="search"
      title="Недвижимость"
      @action="addRealties"
    >
      <template #beforeSearch>
        <v-checkbox
          v-model="isDisabled"
          label="Архив"
          class="mr-8 mt-7 headline"
        />
      </template>
    </top-bar>

    <v-flex xs12 class="my-4 px-4">
      <realties-filters @apply-filters="applyFilters" />
    </v-flex>

    <v-flex xs12>
      <v-tabs>
        <v-tab>Карта</v-tab>
        <v-tab>Плитка</v-tab>
        <v-tab>Список</v-tab>

        <v-tab-item>
          <realties-map :search="search" />
        </v-tab-item>

        <v-tab-item class="pa-4">
          <realties-card :realties="realties" with-actions />
        </v-tab-item>

        <v-tab-item>
          <realties-table
            :is-disabled="isDisabled"
            :total-items="totalItems"
            :page.sync="page"
            :search="search"
          />
        </v-tab-item>
      </v-tabs>
    </v-flex>
  </v-layout>
</template>

<script>
import TopBar from '@/components/base/TopBar';
import RealtiesFilters from './RealtiesFilters';
import RealtiesTable from './RealtiesTable';
import RealtiesCard from './RealtiesCard';
import RealtiesMap from './RealtiesMap';

export default {
  name: 'RealtiesListPage',

  components: {
    RealtiesFilters,
    RealtiesTable,
    RealtiesCard,
    RealtiesMap,
    TopBar,
  },

  created() {
    this.applyFilters();
  },

  data: () => ({
    isDisabled: false,
    totalItems: 1,
    search: '',
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

    addRealties() {
      return this.$router.push({ name: 'realties.create' });
    },

    async applyFilters(filters) {
      const { error, data } = (await this.$store.dispatch('realties/applyFilters', {
        isDisabled: this.isDisabled,
        search: this.search,
        page: this.page,
        filters,
      }));
      if (!error) {
        this.totalItems = data;
      }
      this.loading = false;
    },
  },
};
</script>
