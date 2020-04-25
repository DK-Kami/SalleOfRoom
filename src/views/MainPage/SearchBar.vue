<template>
  <v-card>
    <v-layout class="main-search__items">
      <v-select
        v-model="searchData.transactionType"
        :items="transactionTypes"
        append-icon="mdi-chevron-down"
        class="primary--select"
        height="50px"
        hide-details
      />
      <v-select
        v-model="searchData.roomType"
        :items="roomTypes"
        append-icon="mdi-chevron-down"
        class="primary--select"
        height="50px"
        hide-details
      />

      <v-select
        v-model="searchData.roomCount"
        :items="roomCounts"
        append-icon="mdi-chevron-down"
        class="primary--select"
        label="Кол-во комнат"
        height="50px"
        hide-details
        single-line
      />

      <v-menu
        :close-on-content-click="false"
        :close-on-click="false"
        offset-y
      >
        <template #activator="{ on }">
          <v-layout
            class="primary--select pl-3 pr-1 cursor--pointer"
            style="min-width: 220px"
            justify-space-between
            align-center
            v-on="on"
          >
            <span>Цена</span>

            <v-icon>mdi-chevron-down</v-icon>
          </v-layout>
        </template>

        <v-card class="px-4 pt-2">
          <v-layout justify-space-between>
            <v-flex xs5>
              <v-text-field
                v-model="searchData.priceFrom"
                label="от"
                suffix="₽"
              />
            </v-flex>
            <v-flex xs5>
              <v-text-field
                v-model="searchData.priceTo"
                label="до"
                suffix="₽"
              />
            </v-flex>
          </v-layout>
        </v-card>
      </v-menu>

      <v-autocomplete
        v-model="searchData.city"
        :items="cities"
        append-icon="mdi-chevron-down"
        prepend-icon="mdi-map-marker"
        class="primary--select"
        height="50px"
        hide-details
      />

      <v-btn color="primary" class="button__square py-6">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-layout>
  </v-card>
</template>

<script>
import {
  mapGetters,
} from 'vuex';

export default {
  name: 'SearchBar',

  computed: {
    ...mapGetters ({
      transactionTypes: 'searchTypes/getTransactionTypes',
      roomCounts: 'searchTypes/getRoomCounts',
      roomTypes: 'searchTypes/getRoomTypes',
      cities: 'searchTypes/getCities',
      searchData: 'searchTypes/getSearchData',
    }),
  },

  watch: {
    roomType(newVal) {
      if (newVal === 'studio') {
        this.roomCount = '1';
      }
    },
  },
};
</script>

<style lang="scss">
  .main-search__items {
    .primary--select:not(:last-child) {
      border-right: 0.5px solid #C7C7C7;
    }
  }
  .primary--select {
    padding-top: 0;
    margin-top: 0;
    .v-select__slot {
      padding: 0 10px 0 20px;
    }
    .v-label {
      padding-left: 20px;
    }
    .v-label--active {
      padding-left: 5px;
      margin-top: 5px;
    }
    .v-input__prepend-outer {
      padding-left: 10px;
      margin-right: -5px;
      padding-top: 9px;
    }
  }
</style>
