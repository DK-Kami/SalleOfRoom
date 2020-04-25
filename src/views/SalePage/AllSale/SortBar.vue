<template>
  <v-card class="mt-n6 px-6 py-3">
    <v-layout align-center>
      <v-layout class="ml-n2">
        <v-text-field
          v-model="searchData.address"
          append-icon="mdi-magnify"
          style="max-width: 350px"
          class="subtitle-2 mx-2"
          label="Адрес"
          hide-details
          single-line
          outlined
          dense
        />

        <v-select
          v-model="searchData.transactionType"
          :items="transactionTypes"
          append-icon="mdi-chevron-down"
          style="max-width: 150px"
          class="subtitle-2 mx-2"
          hide-details
          single-line
          outlined
          dense
        />

        <v-select
          v-model="searchData.roomType"
          :items="roomTypes"
          append-icon="mdi-chevron-down"
          label="Кол-во комнат"
          class="subtitle-2 mx-2"
          style="max-width: 150px"
          hide-details
          single-line
          outlined
          dense
        />

        <v-text-field
          v-model="searchData.priceFrom"
          style="max-width: 150px"
          class="subtitle-2 ml-2"
          label="Цена от"
          suffix="₽"
          hide-details
          single-line
          outlined
          dense
        />
        <v-text-field
          v-model="searchData.priceTo"
          style="max-width: 150px"
          class="subtitle-2 mr-2"
          suffix="₽"
          label="до"
          hide-details
          single-line
          outlined
          dense
        />

        <v-select
          v-model="searchData.roomCount"
          :items="roomCounts"
          append-icon="mdi-chevron-down"
          style="max-width: 200px"
          class="subtitle-2 mx-2"
          label="Кол-во комнат"
          hide-details
          single-line
          outlined
          dense
        />

        <v-select
          v-model="searchData.repair"
          :items="repairTypes"
          append-icon="mdi-chevron-down"
          style="max-width: 200px"
          class="subtitle-2 mx-2"
          label="Ремонт"
          hide-details
          single-line
          outlined
          dense
        />
      </v-layout>

      <template v-if="!isFavorite">
        <v-flex shrink>
          <v-layout
            class="ml-4 subtitle cursor--pointer"
            :class="currentMapTextColor"
            align-center
            @click="setView('map')"
          >
            <span class="mr-1">Карта</span> <v-icon :class="currentMapTextColor">mdi-view-list</v-icon>
          </v-layout>
        </v-flex>

        <v-flex shrink>
          <v-layout
            class="ml-4 subtitle cursor--pointer"
            :class="currentListTextColor"
            align-center
            @click="setView('list')"
          >
            <span class="mr-1">Сетка</span> <v-icon :class="currentListTextColor">mdi-apps</v-icon>
          </v-layout>
        </v-flex>
      </template>
    </v-layout>
  </v-card>
</template>

<script>
import {
  mapGetters,
} from 'vuex';

export default {
  name: 'SortBar',

  props: {
    isFavorite: Boolean,
    view: String,
  },

  computed: {
    ...mapGetters ({
      transactionTypes: 'searchTypes/getTransactionTypes',
      repairTypes: 'searchTypes/getRepairTypes',
      roomCounts: 'searchTypes/getRoomCounts',
      roomTypes: 'searchTypes/getRoomTypes',
      searchData: 'searchTypes/getSearchData',
    }),

    currentMapTextColor() {
      return this.currentTextColor('map');
    },
    currentListTextColor() {
      return this.currentTextColor('list');
    },
  },

  methods: {
    setView(newVal) {
      this.$emit('update:view', newVal);
    },
    currentTextColor(neededView) {
      return this.view === neededView
        ? 'text--primary'
        : 'grey--text';
    },
  },
};
</script>

<style lang="scss">
</style>
